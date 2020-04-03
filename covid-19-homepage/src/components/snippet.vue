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
        {{ this.snippetText }}
      </b-card-text>

      <router-link :to="morePath">Read more</router-link>
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
