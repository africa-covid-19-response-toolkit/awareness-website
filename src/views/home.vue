<template>
  <div>
    <template>
      <div class="locale-changer">
        <select v-model="$i18n.locale">
          <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{
            lang
          }}</option>
        </select>
      </div>
    </template>
    <b-jumbotron>
      <h3>{{ $t("home_page_header") }}</h3>
    </b-jumbotron>
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
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    Snippet
  },
  data() {
    return {
      langs: ["am", "en"],
      snippets: [
        {
          titleKey: "snippets.what",
          imageSrc: "https://picsum.photos/200?image=100",
          imageAlt: "icon",
          morePath: "what",
          snippetText: "snippets.what_detail"
        },
        {
          titleKey: "snippets.protection",
          imageSrc: "https://picsum.photos/200?image=200",
          imageAlt: "icon",
          morePath: "protection",
          snippetText: "snippets.protection_detail"
        },
        {
          titleKey: "snippets.sick",
          imageSrc: "https://picsum.photos/200?image=300",
          imageAlt: "icon",
          morePath: "sick",
          snippetText: "snippets.sick_detail"
        },
        {
          titleKey: "snippets.care",
          imageSrc: "https://picsum.photos/200?image=400",
          imageAlt: "icon",
          morePath: "care",
          snippetText: "snippets.care_detail"
        }
      ]
    };
  },
  methods: {
    ...mapMutations(["setLocale"])
  },
  computed: {
    rows() {
      return Math.ceil(this.snippets.length / 4);
    },
    ...mapGetters(["getLocale"])
  }
};
</script>
