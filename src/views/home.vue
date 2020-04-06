<template>
  <div>
    <HomeHeader />
    <div style="background: #fafafa; padding-bottom: 50px">
      <b-row no-gutters>
        <b-col v-for="s in snippets" :key="s.titleKey">
          <Snippet
            :title="$t(s.titleKey)"
            :imageSrc="s.imageSrc"
            :imageAlt="s.imageAlt"
            :snippetText="$t(s.snippetText)"
            :morePath="s.morePath"
            :buttonText="$t(s.buttonText)"
            :buttonUrl="s.buttonUrl"
          ></Snippet>
        </b-col>
        <b-col></b-col>
      </b-row>
    </div>
  </div>
</template>
<script>
import Snippet from "../components/snippet";
import HomeHeader from "../components/homeHeader";

export default {
  components: {
    Snippet,
    HomeHeader
  },
  data() {
    const publicPath = process.env.BASE_URL;
    return {
      snippets: [
        {
          titleKey: "snippets.what",
          imageSrc: `${publicPath}img/icons/what_icon.svg`,
          imageAlt: "icon",
          morePath: "what",
          snippetText: "snippets.what_detail"
        },
        {
          titleKey: "snippets.care",
          imageSrc: `${publicPath}img/icons/care_icon.svg`,
          imageAlt: "icon",
          morePath: "care",
          snippetText: "snippets.care_detail"
        }
      ]
    };
  },
  computed: {
    rows() {
      return Math.ceil(this.snippets.length / 4);
    }
  }
};
</script>
