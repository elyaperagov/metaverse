<template>
  <transition name="fade" v-if="messageShow">
    <div class="message message--shown">
      <h6 v-html="message" class="message__text"></h6>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      message: 'Your message was successfully sent!',
    }
  },
  props: {
    messageShow: Boolean,
  },
  methods: {},
  created() {},
  computed: {
    data() {},
  },
}
</script>
