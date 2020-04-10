<template>
  <b-col>
    <b-row> <HomeHeader /> </b-row>
    <b-row style="background: #fafafa; padding-bottom: 50px">
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
      </b-row>
    </b-row>
  </b-col>
</template>
<script>
import Snippet from "../../components/snippet";
import HomeHeader from "../../components/homeHeader";

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
          imageSrc: `${publicPath}img/what_icon.svg`,
          imageAlt: "icon",
          morePath: "what_am",
          snippetText: "snippets.what_detail"
        },
        {
          titleKey: "snippets.care",
          imageSrc: `${publicPath}img/care_icon.svg`,
          imageAlt: "icon",
          morePath: "care_am",
          snippetText: "snippets.care_detail"
        },
        {
          titleKey: "snippets.resources",
          imageSrc: `${publicPath}img/resources_icon.svg`,
          imageAlt: "icon",
          morePath: "resources_am",
          snippetText: "snippets.resources_detail"
        }
      ]
    };
  },
  computed: {
    rows() {
      return Math.ceil(this.snippets.length / 3);
    }
  }
};
</script>
