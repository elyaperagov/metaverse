<template>
  <div id="__app">
    <notifications group="app-notifications" />
    <Sprite />
    <div class="default-layout">
      <div class="wrapper">
        <Header
          :is-wallet-connected="isWalletConnected"
          @connectMetaMask="connectMetaMask"
        />

        <router-view
          :current-wallet="currentWallet"
          :is-wallet-connected="isWalletConnected"
          @connectMetaMask="connectMetaMask"
        />
      </div>

      <back-to-top v-if="this.$root.width < 450"></back-to-top>

      <Footer />

      <back-to-top v-if="this.$root.width > 449"></back-to-top>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Sprite from "@/components/Sprite.vue";
import Footer from "@/components/Footer.vue";
import BackToTop from "@/components/BackToTop.vue";

const requestMethods = {
  getAccountsList: "eth_accounts",
  callWalletConnection: "eth_requestAccounts",
};

const walletConnectionProcessStartedErrorCode = -32002;
const walletConnectionHeaderErrorCode = -32000;

export default {
  name: "App",
  components: {
    Header,
    Sprite,
    Footer,
    BackToTop,
  },
  data() {
    return {
      isMetaMaskInstalled: false,
      isWalletConnected: false,
      currentWallet: null,
    };
  },
  mounted() {
    const { ethereum } = window;
    this.isMetaMaskInstalled = !!ethereum?.isMetaMask;
    if (this.isMetaMaskInstalled) {
      ethereum.on("accountsChanged", (accounts) => {
        this.handleAccountsChange(accounts);
      });
      this.ethereumRequest(requestMethods.getAccountsList);
    }
  },
  methods: {
    handleAccountsChange(accounts) {
      this.setWalletConnectionStatus(accounts);
    },
    connectMetaMask() {
      if (this.isWalletConnected) {
        this.$notify({
          group: "app-notifications",
          type: "success",
          text: "Metamask is already connected",
        });
      } else {
        if (this.isMetaMaskInstalled) {
          this.ethereumRequest(requestMethods.callWalletConnection);
        } else {
          this.$notify({
            group: "app-notifications",
            type: "error",
            title: "MetaMask is not installed",
            text: `<a href="https://metamask.io/download.html" target="_blank">Download here</a>`,
          });
        }
      }
    },
    setWalletConnectionStatus(accounts) {
      this.isWalletConnected = !!accounts.length;
      if (this.isWalletConnected) {
        this.currentWallet = accounts[0].toLowerCase();
      } else {
        this.currentWallet = null;
      }
    },
    ethereumRequest(method) {
      const { ethereum } = window;
      ethereum
        .request({ method })
        .then((response) => {
          this.setWalletConnectionStatus(response);
        })
        .catch((error) => {
          if (error.code === walletConnectionProcessStartedErrorCode) {
            this.$notify({
              group: "app-notifications",
              type: "error",
              text: "Wallet connection process already started. Please finish or cancel it.",
            });
          }
          if (error.code === walletConnectionHeaderErrorCode) {
            // this.$notify({
            //   group: 'app-notifications',
            //   type: 'error',
            //   text: 'Something went wrong. Please, refresh page.'
            // })
          }
        });
    },
  },
};
</script>

