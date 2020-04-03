<template>
  <div>
    <b-container>
      <b-jumbotron></b-jumbotron>
      <b-row v-for="r in rows" :key="r">
        <b-col v-for="s in snippets.slice((r - 1) * 4, r * 4)" :key="s.title">
          <Snippet
            :title="s.title"
            :imageSrc="s.imageSrc"
            :imageAlt="s.imageAlt"
            :snippetText="s.snippetText"
          >
          </Snippet>
        </b-col>
      </b-row>
      <b-jumbotron></b-jumbotron>
    </b-container>
  </div>
</template>
<script>
import Snippet from "./snippet";
export default {
  components: {
    Snippet
  },
  data() {
    return {
      snippets: [
        {
          title: "What is COVID-19?",
          imageSrc: "https://picsum.photos/200",
          imageAlt: "icon",
          snippetText:
            "COVID-19 is the new respiratory disease spreading around the world and it is caused by a coronavirus."
        },
        {
          title: "How to protect yourself",
          imageSrc: "https://picsum.photos/200",
          imageAlt: "icon",
          snippetText:
            "There is currently no vaccine to prevent coronavirus disease 2009 (COVID-19)."
        },
        {
          title: "What to do if you are at sick",
          imageSrc: "https://picsum.photos/200",
          imageAlt: "icon",
          snippetText:
            "A guide to help you make decisions and seek appropriate medical care."
        },
        {
          title: "How to care for someone",
          imageSrc: "https://picsum.photos/200",
          imageAlt: "icon",
          snippetText:
            "Monitor the person for worsening symptoms, know the emergency warning signs."
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
