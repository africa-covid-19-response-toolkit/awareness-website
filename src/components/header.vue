<template>
  <styled-b-jumbotron>
    <b-img :src="imgSrc" fluid alt=""></b-img>
    <StyledBCard />
  </styled-b-jumbotron>
</template>
<script>
import { StyledBJumbotron } from "../styles/bootstrap/StyledBJumbotron";
import { StyledBCard } from "../styles/bootstrap/StyledBCard";

export default {
  components: {
    "styled-b-jumbotron": StyledBJumbotron,
    StyledBCard
  },
  props: {
    imgSrc: {
      type: String,
      default: `${process.env.BASE_URL}img/icons/hero-img.svg`
    }
  }
};
</script>
