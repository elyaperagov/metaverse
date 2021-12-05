<template>
  <div class="minting-progress__buttons">
    <button
      class="button button--minting-counter"
      :disabled="isDecreaseDisabled"
      @click="decrease"
    >
      <svg width="29" height="9" aria-hidden="true">
        <use xlink:href="#minus"></use>
      </svg>
    </button>
    <div class="minting-progress__value">
      <input ref="input" v-model.number="computedValue" type="number" />
    </div>

    <button
      class="button button--minting-counter"
      :disabled="isIncreaseDisabled"
      @click="increase"
    >
      <svg width="35" height="34" aria-hidden="true">
        <use xlink:href="#plus"></use>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: "PlusMinusInput",
  props: {
    currentValue: {
      type: Number,
      required: true,
    },
    maxValue: {
      type: Number,
      required: true,
    },
    minValue: {
      type: Number,
      required: true,
    },
  },
  computed: {
    computedValue: {
      get() {
        return this.currentValue;
      },
      set(val) {
        if (
          val >= this.minValue &&
          val <= this.maxValue &&
          Number.isInteger(val)
        ) {
          this.$emit("update:currentValue", val);
        }
      },
    },
    isIncreaseDisabled() {
      return this.currentValue >= this.maxValue;
    },
    isDecreaseDisabled() {
      return this.currentValue <= this.minValue;
    },
  },
  mounted() {
    this.$refs.input.focus();
  },
  methods: {
    formatCountdown(number, index) {
      let strNumber = number.toString();
      if (strNumber.length == 2) {
        return strNumber[index];
      }
      if (index === 0) {
        return 0;
      }
      if (index === 1) {
        return strNumber[0];
      }
    },
    decrease() {
      if (this.currentValue > this.minValue) {
        this.$emit("update:currentValue", this.currentValue - 1);
      }
    },
    increase() {
      if (this.currentValue < this.maxValue) {
        this.$emit("update:currentValue", this.currentValue + 1);
      }
    },
  },
};
</script>
