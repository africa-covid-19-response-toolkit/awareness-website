<template>
  <div>
      <b-jumbotron>
        <p>Home page header goes here</p>
      </b-jumbotron>
      <b-row v-for="r in rows" :key="r">
        <b-col v-for="s in snippets.slice((r - 1) * 4, r * 4)" :key="s.title">
          <Snippet
            :title="s.title"
            :imageSrc="s.imageSrc"
            :imageAlt="s.imageAlt"
            :snippetText="s.snippetText"
            :morePath="s.morePath"
          >
          </Snippet>
        </b-col>
      </b-row> 
  </div>
</template>
<script>
import Snippet from "../components/snippet";
export default {
  components: {
    Snippet
  },
  data() {
    return {
      snippets: [
        {
          title: "What is COVID-19?",
          imageSrc: "https://picsum.photos/200?image=100",
          imageAlt: "icon",
          morePath: 'what',
          snippetText:
            "COVID-19 is the new respiratory disease spreading around the world and it is caused by a coronavirus."
        },
        {
          title: "How to protect yourself",
          imageSrc: "https://picsum.photos/200?image=200",
          imageAlt: "icon",
          morePath: 'protection',
          snippetText:
            "There is currently no vaccine to prevent coronavirus disease 2009 (COVID-19)."
        },
        {
          title: "What to do if you are at sick",
          imageSrc: "https://picsum.photos/200?image=300",
          imageAlt: "icon",
          morePath: 'sick',
          snippetText:
            "A guide to help you make decisions and seek appropriate medical care."
        },
        {
          title: "How to care for someone",
          imageSrc: "https://picsum.photos/200?image=400",
          imageAlt: "icon",
          morePath: 'care',
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
