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
          titleKey: "ኮቪድ-19 ምንድን ነው",
          imageSrc: `${publicPath}img/what_icon.svg`,
          imageAlt: "icon",
          morePath: "what_am",
          snippetText:
            "ኮቪድ-19 አዲስና በአለም ላይ እየተስፋፋ ያለ በመተንፈሻ አካል ላይ የሚከሰት ህመም ነው፤ በሽታው ከዚህ በፊት ሰዎች ላይ ተገኝቶ በማይታወቀው በኮሮናቫይረስ ምክንያት ተከስቷል።"
        },
        {
          titleKey: "ሰዎችን ለመንከባከብ",
          imageSrc: `${publicPath}img/care_icon.svg`,
          imageAlt: "icon",
          morePath: "care_am",
          snippetText: "ምልክቶቹ የሚያገረሹበትን ግለሰብ በቅርብ ይከታተሉ። ድንገተኛ ቅድመ ምልክቶችን ይወቁ።"
        },
        {
          titleKey: "ጠቃሚ መረጃዎች",
          imageSrc: `${publicPath}img/resources_icon.svg`,
          imageAlt: "icon",
          morePath: "resources_am",
          snippetText: "የተለያዩ ጠቃሚ መረጃዎችን እና አትመው ማሰራጨት የሚችሏቸው ጽሁፎችን እዚህ ማግኘት"
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
