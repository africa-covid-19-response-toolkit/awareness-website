<template>
  <div>
    <router-link :to="home" class="float-left my-2">
      &lt; {{ $t("back") }}
    </router-link>
    <div><slot name="Header"></slot></div>
    <slot name="Body"></slot>
  </div>
</template>
<script>
import i18n from "../plugins/i18n";
export default {
  data() {
    return {
      backImgSrc: `${process.env.BASE_URL}img/back-btn.svg`,
      home: `/${i18n.locale}`
    };
  }
};
</script>
