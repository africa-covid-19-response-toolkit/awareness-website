<template>
  <Details>
    <template v-slot:Header>
      <Header :imgSrc="imgSrc" />
    </template>
    <template v-slot:Body>
      <vue-markdown>{{ $t("what") }}</vue-markdown>
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
      default: `${process.env.BASE_URL}img/icons/what-is-covid-head.svg`
    }
  },
  data: () => ({
    source: `
Sample
---

Description

## Section 1

Information

* Item 1
* Item 2

## Section 2

1. Item
2. Item
`
  })
};
</script>
