<template>
  <div>
    <b-card
      no-body
      style="min-width:14rem; border:0; background: #fafafa"
      class="pt-5"
    >
      <b-container>
        <b-col align-self="center">
          <b-card-img :src="imageSrc" style="width:75px" />
        </b-col>
        <b-col class="pt-3">
          <b-card-text
            style="font-size: 20px; font-weight: bold; text-align:left"
            >{{ title }}</b-card-text
          >
        </b-col>
        <b-col class="pt-3">
          <b-card-text style="font-size: 14px; text-align:left">{{
            snippetText
          }}</b-card-text>
        </b-col>
        <b-col class="pt-2">
          <router-link :to="{ name: morePath, params: { header: title } }">
            <StyledLink>{{ $t("read_more") }}</StyledLink>
          </router-link>
        </b-col>
      </b-container>
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
    morePath: String,
    arrowImg: {
      type: String,
      default: `${process.env.BASE_URL}img/icons/arrow-btn.svg`
    }
  }
};
</script>
