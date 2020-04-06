<template>
  <div>
    <HomeHeader />
    <b-row no-gutters v-for="r in rows" :key="r">
      <b-col v-for="s in snippets.slice((r - 1) * 4, r * 4)" :key="s.titleKey">
        <Snippet
          :title="$t(s.titleKey)"
          :imageSrc="s.imageSrc"
          :imageAlt="s.imageAlt"
          :snippetText="$t(s.snippetText)"
          :morePath="s.morePath"
          :buttonText="$t(s.buttonText)"
          :buttonUrl="s.buttonUrl"
        >
        </Snippet>
      </b-col>
    </b-row>
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
          snippetText: "snippets.what_detail",
          buttonText: "snippets.community_form",
          buttonUrl: "https://community.covid19.et/"
        },
        {
          titleKey: "snippets.protection",
          imageSrc: `${publicPath}img/icons/protect_icon.svg`,
          imageAlt: "icon",
          morePath: "protection",
          snippetText: "snippets.protection_detail",
          buttonText: "snippets.passenger_form",
          buttonUrl: "https://passengers.covid19.et/"
        },
        {
          titleKey: "snippets.sick",
          imageSrc: `${publicPath}img/icons/sick_icon.svg`,
          imageAlt: "icon",
          morePath: "sick",
          snippetText: "snippets.sick_detail",
          buttonText: "snippets.public_report",
          buttonUrl: "https://www.covid19.et/Covid-19/ReportCase/Create"
        },
        {
          titleKey: "snippets.care",
          imageSrc: `${publicPath}img/icons/care_icon.svg`,
          imageAlt: "icon",
          morePath: "care",
          snippetText: "snippets.care_detail",
          buttonText: "snippets.volunteer_form",
          buttonUrl: "https://www.covid19.et/Covid-19/Volenteer/Create"
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
