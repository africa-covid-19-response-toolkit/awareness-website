<template>
  <b-container>
    <b-row>
      <b-col sm>
        <b-row class="align-items-center justify-content-center mt-5">
          <b-col col class="col-3 pr-md-0">
            <b-img :src="mohLogoWorld" :width="70" fluid></b-img>
          </b-col>
          <b-col col class="col-6 pl-0">
            <b-img :src="mohLogoText" fluid></b-img>
          </b-col>
        </b-row>
        <b-row class="my-5 justify-content-center" align-v="center">
          <b-col v-for="b in buttons" :key="b.text" class="py-2" sm="8">
            <b-button
              block
              size="lg"
              style="background-color: #EDF0FF; border: 0.75px solid #3D3C99"
              :href="b.url"
              :target="b.target"
              :to="
                b.external
                  ? null
                  : { name: b.morePath, params: { header: b.text } }
              "
            >
              <StyledLabel>{{ $t(b.text) }}</StyledLabel>
            </b-button>
          </b-col>
        </b-row>
      </b-col>
      <b-col sm px="0">
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
        target: "_blank",
        external: true
      }
    ]
  })
};
</script>
