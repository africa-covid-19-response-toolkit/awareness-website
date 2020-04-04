<template>
  <div>
    <b-card style="min-width: 10rem; max-width: 15rem; border:0">
      <b-card-img :src="imageSrc" style="width: 20%" />
      <b-card-text style="font-weight: bold">
        {{ title }}
      </b-card-text>
      <b-card-text style="font-size: 12px">
        {{ snippetText }}
      </b-card-text>
      <router-link :to="{ name: morePath, params: { header: title } }">
        <StyledLink>
          {{ $t("read_more") }}
        </StyledLink>
      </router-link>
    </b-card>
  </div>
</template>
<script>
import StyledLink from "../styles/StyledLink";
export default {
  components: {
    StyledLink
  },
  props: {
    title: String,
    imageSrc: String,
    imageAlt: String,
    snippetText: String,
    morePath: String
  }
};
</script>
