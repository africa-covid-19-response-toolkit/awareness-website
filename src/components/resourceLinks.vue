<template>
  <b-row class="justify-content-center" align-v="center">
    <b-col v-if="showHomeBtn" class="py-2" sm="7">
      <b-button
        block
        size="lg"
        style="background-color: #0445b0; color: #fff"
        :to="{ name: homeRouteName }"
      >
        <StyledLabel>{{ $t("back") }}</StyledLabel>
      </b-button>
    </b-col>
    <b-col v-for="b in buttons" :key="b.text" class="py-2" sm="7">
      <b-button
        block
        size="lg"
        style="background-color: #0445b0; color: #fff"
        :href="b.url"
        :target="b.target"
        :to="
          b.external ? null : { path: b.morePath, params: { header: b.text } }
        "
      >
        <StyledLabel>{{ $t(b.text) }}</StyledLabel>
      </b-button>
    </b-col>
  </b-row>
</template>

<script>
import { StyledLabel } from "../styles/StyledLabel";
import { HOME_ROUTE_NAME } from "../router";
import i18n from "../plugins/i18n";

export default {
  components: {
    StyledLabel
  },
  props: {
    showHomeBtn: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    homeRouteName: HOME_ROUTE_NAME,
    buttons: [
      {
        text: "buttons.protection",
        morePath: `/${i18n.locale}/protection`
      },
      {
        text: "buttons.sick",
        morePath: `/${i18n.locale}/sick`
      },
      {
        text: "buttons.monitoring",
        url: "https://www.covid19.et/covid-19",
        target: "_blank",
        external: true
      }
    ]
  })
};
</script>
