<template>
  <b-container>
    <b-row align="left">
      <b-col col lg="1">
        <b-img :src="mohLogoWorld" fluid></b-img>
      </b-col>
      <b-col col lg="3">
        <b-img :src="mohLogoText" fluid></b-img>
      </b-col>
    </b-row>
    <b-row align-v="center">
      <b-col col lg="6" align="center">
        <b-col v-for="b in buttons" :key="b.text" class="py-2" col lg="8">
          <b-button
            block
            pill
            size="xxl"
            variant="light"
            style="background-color: #EDF0FF; border: '0.75px solid #3D3C99'"
          >
            <div v-if="b.external">
              <a target="_blank" :href="b.url" />
              <StyledLabel>{{ $t(b.text) }}</StyledLabel>
            </div>
            <div v-else>
              <router-link
                :to="{ name: b.morePath, params: { header: b.text } }"
              >
                <StyledLabel>{{ $t(b.text) }}</StyledLabel>
              </router-link>
            </div>
          </b-button>
        </b-col>
      </b-col>
      <b-col>
        <b-img :src="imgHeroSrc" fluid></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { StyledLabel } from "../styles/StyledLabel";
export default {
  components: {
    StyledLabel
  },
  data: () => ({
    imgHeroSrc: `${process.env.BASE_URL}img/icons/hero-img.svg`,
    mohLogoText: `${process.env.BASE_URL}img/moh-logo-text.png`,
    mohLogoWorld: `${process.env.BASE_URL}img/moh-logo-world.png`,
    buttons: [
      {
        text: "buttons.protection",
        morePath: "protection"
      },
      {
        text: "buttons.sick",
        morePath: "sick"
      },
      {
        text: "buttons.monitoring",
        url: "https://passengers.covid19.et/",
        external: true
      }
    ]
  })
};
</script>
