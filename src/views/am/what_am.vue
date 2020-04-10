<template>
  <Details>
    <template v-slot:Header>
      <Header :imgSrc="imgSrc" />
    </template>
    <template v-slot:Body>
      <h4>{{$route.name}}</h4>
      <p>{{ $t("what") }}</p>
    </template>
  </Details>
</template>
<script>
import Details from "../../components/details";
import Header from "../../components/header";
export default {
  components: {
    Details,
    Header
  },
  data() {
    return {
      imgSrc: `${process.env.BASE_URL}img/what-is-covid-head.svg`
    };
  }
};
</script>
