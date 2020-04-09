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
  props: {
    backImgSrc: {
      type: String,
      default: `${process.env.BASE_URL}img/icons/back-btn.svg`
    }
  }
};
</script>
