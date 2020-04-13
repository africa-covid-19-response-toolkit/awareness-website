<template>
  <div>
    <div class="header">
      <router-link :to="home" class="float-left my-2 homeLink">
        <!--&lt; {{ $t("back") }}-->
        <b-img :src="backImgSrc" style="height: 20px" fluid alt=""></b-img>
      </router-link>
      <slot name="Header"></slot>
    </div>
    <slot name="Body"></slot>
  </div>
</template>
<script>
import i18n from "../plugins/i18n";
export default {
  data() {
    return {
      backImgSrc: `${process.env.BASE_URL}img/home.svg`,
      home: `/${i18n.locale}`
    };
  }
};
</script>
<style scoped>
.header {
  background-color: #f8f8f8;
}
.homeLink {
  padding-left: 10px;
}
</style>
