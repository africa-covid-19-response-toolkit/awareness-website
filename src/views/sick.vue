<template>
  <Details>
    <template v-slot:Header>
      <Header :imgSrc="imgSrc" />
    </template>
    <template v-slot:Body>
      <p>{{ $t("sick") }}</p>
    </template>
  </Details>
</template>
<script>
import Details from "../components/details";
import Header from "../components/header";
export default {
  components: {
    Details,
    Header
  },
  data() {
    return {
      imgSrc: `${process.env.BASE_URL}img/what-to-do-if-head.svg`
    };
  }
};
</script>
