<template>
  <b-col>
    <b-row> <HomeHeader /> </b-row>
    <b-row style="background: #fafafa; padding-bottom: 50px">
      <b-row no-gutters>
        <b-col v-for="s in snippets" :key="s.titleKey">
          <Snippet
            :title="s.titleKey"
            :imageSrc="s.imageSrc"
            :imageAlt="s.imageAlt"
            :snippetText="s.snippetText"
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
          titleKey: "What is COVID-19",
          imageSrc: `${publicPath}img/what_icon.svg`,
          imageAlt: "icon",
          morePath: "what",
          snippetText:
            "COVID-19 is the new respiratory disease spreading around the world and it is caused by a coronavirus."
        },
        {
          titleKey: "How to care for someone",
          imageSrc: `${publicPath}img/care_icon.svg`,
          imageAlt: "icon",
          morePath: "care",
          snippetText:
            "Monitor the person for worsening symptoms, know the emergency warning signs."
        },
        {
          titleKey: "Resources",
          imageSrc: `${publicPath}img/resources_icon.svg`,
          imageAlt: "icon",
          morePath: "resources",
          snippetText:
            "Find more resources and downloadable material for print and distribution."
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
