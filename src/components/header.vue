<template>
  <b-img :src="imgSrc" fluid></b-img>
</template>
<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: `${process.env.BASE_URL}img/hero.svg`
    }
  }
};
</script>
