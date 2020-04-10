<template>
  <div>
    <router-link to="/" class="float-left my-2">
      &lt; {{ $t("back") }}
    </router-link>
    <div><slot name="Header"></slot></div>
    <slot name="Body"></slot>
  </div>
</template>
<script>
export default {
  data() {
    return {
      backImgSrc: `${process.env.BASE_URL}img/back-btn.svg`
    };
  }
};
</script>
