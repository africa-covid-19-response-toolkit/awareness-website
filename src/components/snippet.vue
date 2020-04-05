<template>
  <div>
    <b-card no-body style="min-width:14rem; border:0" class="pt-5">
      <b-container>
        <b-col align-self="center">
          <b-card-img :src="imageSrc" style="width:30px" />
        </b-col>
        <b-col class="pt-3">
          <b-card-text style="font-weight: bold; text-align:left">
            {{ title }}
          </b-card-text>
        </b-col>
        <b-col class="pt-3" style="height: 60px">
          <b-card-text style="font-size: 12px; text-align:left">
            {{ snippetText }}
          </b-card-text>
        </b-col>
        <b-col class="pt-2">
          <router-link :to="{ name: morePath, params: { header: title } }">
            <StyledLink>
              {{ $t("read_more") }}
            </StyledLink>
          </router-link>
        </b-col>
        <b-col class="pt-3">
          <b-button block variant="light" :href="buttonUrl">
            <b-row>
              <b-col>
                <StyledLabel>{{ buttonText }}</StyledLabel></b-col
              >
              <b-col col lg="2"> <b-img :src="arrowImg" /> </b-col>
            </b-row>
          </b-button>
        </b-col>
      </b-container>
    </b-card>
  </div>
</template>
<script>
import StyledLink from "../styles/StyledLink";
import { StyledLabel } from "../styles/StyledLabel";
export default {
  components: {
    StyledLink,
    StyledLabel
  },
  props: {
    title: String,
    imageSrc: String,
    imageAlt: String,
    snippetText: String,
    morePath: String,
    buttonText: String,
    buttonUrl: String,
    arrowImg: {
      type: String,
      default: `${process.env.BASE_URL}img/icons/arrow-btn.svg`
    }
  }
};
</script>
