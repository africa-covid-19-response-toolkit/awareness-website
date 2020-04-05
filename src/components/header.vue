<template>
  <styled-b-jumbotron>
    <b-img :src="imgSrc"></b-img>
  </styled-b-jumbotron>
</template>
<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: `${process.env.BASE_URL}img/icons/hero-img.svg`
    }
  }
};
</script>
