<template>
  <Details>
    <template v-slot:Header>
      <Header :imgSrc="imgSrc" />
    </template>
    <template v-slot:Body>
      <vue-markdown>{{ $t("sick") }}</vue-markdown>
    </template>
  </Details>
</template>
<script>
import Details from "../components/details";
import Header from "../components/header";
import VueMarkdown from "vue-markdown";
export default {
  components: {
    Details,
    Header,
    VueMarkdown
  },
  props: {
    imgSrc: {
      type: String,
      default: `${process.env.BASE_URL}img/icons/what-to-do-if-head.svg`
    }
  }
};
</script>
