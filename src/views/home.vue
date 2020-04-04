<template>
  <div>
    <Header />
    <b-row v-for="r in rows" :key="r">
      <b-col v-for="s in snippets.slice((r - 1) * 4, r * 4)" :key="s.titleKey">
        <Snippet
          :title="$t(s.titleKey)"
          :imageSrc="s.imageSrc"
          :imageAlt="s.imageAlt"
          :snippetText="$t(s.snippetText)"
          :morePath="s.morePath"
        >
        </Snippet>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import Snippet from "../components/snippet";
import Header from "../components/header";

export default {
  components: {
    Snippet,
    Header
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
          titleKey: "snippets.protection",
          imageSrc: `${publicPath}img/icons/protect_icon.svg`,
          imageAlt: "icon",
          morePath: "protection",
          snippetText: "snippets.protection_detail"
        },
        {
          titleKey: "snippets.sick",
          imageSrc: `${publicPath}img/icons/sick_icon.svg`,
          imageAlt: "icon",
          morePath: "sick",
          snippetText: "snippets.sick_detail"
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
