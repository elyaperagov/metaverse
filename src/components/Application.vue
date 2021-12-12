<template>
  <section class="application">
    <div class="container container--narrow">
      <h1 v-html="title"></h1>

      <div class="application__block" v-for="(block, j) in blocks" :key="j">
        <h2 class="application__subtitle" v-html="block.title"></h2>
        <div class=" application__block-inner">
          <p class="application__block-title" v-html="block.subtitle"></p>
          <ul class="application__block-texts">
            <li
              class="application__block-text"
              v-for="(item, i) in block.texts"
              :key="i"
            >
              <p v-html="item.text"></p>
            </li>
          </ul>
        </div>
      </div>
      <div class="application__form-wrapper">
        <h2 class="application__subtitle" v-html="formTitle"></h2>
        <p class="application__form-info" v-html="formInfo"></p>
        <p class="application__notification" v-html="formNotification"></p>

        <Form />
      </div>
    </div>
  </section>
</template>

<script>
import Form from '@/components/Form'
export default {
  name: 'Application',
  components: { Form },
  props: {},
  data() {
    return {
      title: 'Get your Project Listed with <a href="/">Metaverse.sg</a>  ',
      formTitle: 'Upcoming Projects Form',
      formInfo:
        'Submit your NFT project information to get published on the "Upcoming Projects" page.',
      formNotification:
        'PLEASE SUBMIT YOUR PROJECT INFORMATION AT LEAST 5 DAYS BEFORE YOUR PUBLIC OR PRESALE DATE SO WE HAVE ENOUGH TIME TO PUBLISH IT.',
      blocks: [
        {
          title: 'Attract more NFT enthusiasts to your project!',
          subtitle: 'WARNING: Beware Scammers!',
          texts: [
            {
              text:
                'Contact us only through email or official Twitter account.',
            },
            {
              text: 'Listing in Upcoming category is free of charge now.',
            },
            {
              text:
                'Anyone who’s claiming to work for us and asking for payment to get you listed is a scammer!',
            },
            {
              text:
                'Always double check the Twitter link to make sure you’ve contacted the right one.',
            },
          ],
        },
        {
          title:
            'Fill up the following form to get listed in the Upcoming Projects category!',
          subtitle: 'Before filing the request please make sure:',
          texts: [
            {
              text: 'You are providing correct information about your project.',
            },
            {
              text:
                'Your project does not contain explicit, illegal or material with graphic violence.',
            },
            {
              text:
                'Send a DM on Twitter to our account @ to inform us that your project info was sent.',
            },
          ],
        },
      ],
    }
  },
  methods: {},
  created() {},
}
</script>
