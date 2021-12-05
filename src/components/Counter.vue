<template>
  <div class="minting-progress__inner">
    <div class="minting-progress__text-wrapper">
      <div class="minting-progress__texts">
        <h2 class="minting-progress__title">Creeps minted</h2>
        <div class="minting-progress__counts">
          <p class="minting-progress__current">
            {{ "&nbsp;" + computedMintedCount }} /
          </p>
          <p class="minting-progress__total">
            {{ "&nbsp;" + computedTotalCount }}
          </p>
        </div>
      </div>

      <plus-minus-input
        :current-value.sync="currentCount"
        :max-value="maxMintCount"
        :min-value="minMintCount"
      />
    </div>
    <template v-if="mintedCount !== null">
      <button
        v-if="computedLeftCount > 0"
        class="button button--primary button--mint-for"
        @click.prevent="handleMint"
      >
        Mint for {{ currentPrice }}
      </button>

      <template v-if="computedLeftCount <= 0">
        <a
          href="https://opensea.io/collection/creepy-club"
          class="button button--primary button--opensea"
          target="_blank"
        >
          Buy on Opensea
        </a>
        <div class="minting-progress__sold-out">
          <img :src="soldOut.src" :alt="soldOut.alt" />
        </div>
      </template>
    </template>

    <transaction :link.sync="link" :show-modal.sync="showModal" />
  </div>
</template>

<script>
import Web3 from "web3";
import { contractAddress, abi } from "@/utils/creeps.js";
import PlusMinusInput from "@/components/PlusMinusInput";
import Transaction from "@/components/Transaction.vue";

const delimiter = 1e18;
const unknown = "xxxxx";

const web3 = new Web3(
  Web3.givenProvider ||
    "https://mainnet.infura.io/v3/04409b76a741421989336c3a616194ef"
);

export default {
  name: "Counter",
  components: { PlusMinusInput, Transaction },
  props: {
    currentWallet: {
      type: String,
      default: null,
    },
    isWalletConnected: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      soldOut: {
        src: require("@/assets/images/sold-out.png"),
        alt: "sold out",
      },
      currentCount: 2,
      creepsContract: null,
      isPaused: null,
      isPresalePaused: null,
      inWhiteList: null,
      mintedCount: null,
      totalCount: null,
      price: null,
      link: null,
      showModal: false,
    };
  },
  computed: {
    currentPrice() {
      return (this.currentCount * (this.price / delimiter)).toFixed(2);
    },
    computedLeftCount() {
      return this.mintedCount !== null ? this.totalCount - this.mintedCount : 0;
    },
    computedMintedCount() {
      return this.mintedCount !== null ? this.mintedCount : unknown;
    },
    computedTotalCount() {
      return this.totalCount !== null ? this.totalCount : unknown;
    },
    maxMintCount() {
      return this.computedLeftCount < 10 ? this.computedLeftCount : 10;
      // if (!this.isPaused || !this.isPresalePaused) {
      // }
      // return 0;
    },
    minMintCount() {
      return this.computedLeftCount === 0 ? 0 : 1;
      // if (!this.isPaused || !this.isPresalePaused) {
      // }
      // return 0;
    },
  },
  watch: {
    currentWallet(newV, oldV) {
      this.web3Handler();
    },
  },
  mounted() {
    this.web3Handler();
  },
  methods: {
    async web3Handler() {
      this.creepsContract = new web3.eth.Contract(abi, contractAddress);

      const { creepsContract, currentWallet } = this;

      const response = await Promise.all([
        creepsContract.methods.MAX_NFTS().call(),
        creepsContract.methods.totalSupply().call(),
        creepsContract.methods.paused().call(),
        creepsContract.methods.presalePaused().call(),
        creepsContract.methods.getPrice(1).call(),
        currentWallet !== null
          ? creepsContract.methods.inWhiteList(currentWallet).call()
          : false,
      ]).catch((error) => {
        console.log(error);
        setTimeout(() => {
          this.web3Handler();
        }, 1000);
      });

      const [
        totalCount,
        mintedCount,
        isPaused,
        isPresalePaused,
        price,
        inWhiteList,
      ] = response;

      this.totalCount = Number(totalCount);
      this.mintedCount = Number(mintedCount);
      this.isPaused = isPaused;
      this.isPresalePaused = isPresalePaused;
      this.price = Number(price);
      this.inWhiteList = inWhiteList;
      console.log("inWhiteList: " + inWhiteList);

      return Promise.resolve();
    },
    async isReadyToMint() {
      if (!this.isWalletConnected) {
        this.$emit("connectMetaMask");
        return Promise.resolve(false);
      }

      if (!this.currentWallet) {
        this.$notify({
          group: "app-notifications",
          type: "error",
          text: "MetaMask is not connected",
        });
        return Promise.resolve(false);
      }

      if (this.isPaused && this.isPresalePaused) {
        this.$notify({
          group: "app-notifications",
          type: "error",
          text: "Smart contract paused",
        });
        return Promise.resolve(false);
      }

      if (this.currentcount > 10) {
        this.$notify({
          group: "app-notifications",
          type: "error",
          text: "Max creeps are 10",
        });
        return Promise.resolve(false);
      }

      if (this.currentcount > this.computedLeftCount) {
        this.$notify({
          group: "app-notifications",
          type: "error",
          text: "Not enought creeps",
        });
        return Promise.resolve(false);
      }

      if (this.computedLeftCount <= 0) {
        this.$notify({
          group: "app-notifications",
          type: "error",
          text: "No creeps available",
        });
        return Promise.resolve(false);
      }

      return Promise.resolve(true);
    },
    async handleMint() {
      await this.web3Handler();

      const ready = await this.isReadyToMint();

      if (ready) {
        this.mint();
      }
    },
    mint() {
      const {
        creepsContract,
        currentWallet,
        price,
        currentCount,
        web3Handler,
      } = this;

      creepsContract.methods
        .mint(currentWallet, currentCount)
        .send({
          from: currentWallet,
          value: currentCount * price,
        })
        .on("transactionHash", (hash) => {
          this.link = `<a href="https://etherscan.io/tx/${hash}" target="_blank">${hash}</a>`;
          this.showModal = true;
          web3Handler();
        })
        .on("error", (error) => {
          if (error.code !== 4001) {
            this.$notify({
              group: "app-notifications",
              type: "error",
              text: error,
            });
          }
          web3Handler();
        });
    },
  },
};
</script>
