<template>
  <div>
    <router-link to="/" class="float-left">
      <b-img :src="backImgSrc" style="height: 20px" fluid alt=""></b-img>
    </router-link>
    <div><slot name="Header"></slot></div>
    <slot name="Body"></slot>
  </div>
</template>
<script>
export default {
  props: {
    backImgSrc: {
      type: String,
      default: `${process.env.BASE_URL}img/back-btn.svg`
    }
  }
};
</script>
