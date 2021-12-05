<template>
  <div v-if="showModal" class="modal">
    <div class="modal__overlay" @click.self="closeModal()">
      <div class="container">
        <div class="modal__body">
          <button class="button button--close-modal" @click="closeModal">
            &times;
          </button>
          <div class="modal__texts">
            <h3>{{ title }}</h3>
            <div v-if="link" v-html="link"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Transaction",
  props: {
    link: {
      type: String,
      default: null,
    },
    showModal: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      title: "Your transaction",
    };
  },
  created() {
    document.addEventListener("keyup", (evt) => {
      if (evt.key === 27) {
        this.closeModal();
      }
    });
  },
  methods: {
    closeModal() {
      this.$emit("update:showModal", false);
      this.$emit("update:link", null);
    },
  },
};
</script>
