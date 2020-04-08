<template>
  <Details>
    <template v-slot:Header>
      <Header :imgSrc="imgSrc" />
    </template>
    <template v-slot:Body>
      <p>{{ $t("care") }}</p>
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
  props: {
    imgSrc: {
      type: String,
      default: `${process.env.BASE_URL}img/how-to-care-head.svg`
    }
  }
};
</script>
