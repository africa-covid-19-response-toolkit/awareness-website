<template>
  <div>
    <b-card
      :title="title"
      :img-src="imageSrc"
      :img-alt="imageAlt"
      img-top
      tag="article"
      style="max-width: 20rem; border:0"
    >
      <b-card-text>
        {{ snippetText }}
      </b-card-text>

      <router-link :to="{ name: morePath, params: { header: title } }">{{
        $t("read_more")
      }}</router-link>
    </b-card>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    imageSrc: String,
    imageAlt: String,
    snippetText: String,
    morePath: String
  }
};
</script>
