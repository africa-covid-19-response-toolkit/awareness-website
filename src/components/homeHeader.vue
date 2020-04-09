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
        <ResourceLinks class="mt-3" />
      </b-col>
      <b-col sm px="0">
        <b-img :src="imgHeroSrc" fluid></b-img>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import ResourceLinks from "../components/resourceLinks";
export default {
  components: {
    ResourceLinks
  },
  data: () => ({
    imgHeroSrc: `${process.env.BASE_URL}img/hero-img.svg`,
    mohLogoText: `${process.env.BASE_URL}img/moh-logo-text.png`,
    mohLogoWorld: `${process.env.BASE_URL}img/moh-logo-world.png`
  })
};
</script>
