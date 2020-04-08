<template>
  <b-row class="justify-content-center" align-v="center">
    <b-col v-for="b in buttons" :key="b.text" class="py-2" sm="7">
      <b-button
        block
        size="lg"
        style="background-color: #EDF0FF; border: 0.75px solid #3D3C99"
        :href="b.url"
        :target="b.target"
        :to="
          b.external ? null : { name: b.morePath, params: { header: b.text } }
        "
      >
        <StyledLabel>{{ $t(b.text) }}</StyledLabel>
      </b-button>
    </b-col>
  </b-row>
</template>
<script>
import { StyledLabel } from "../styles/StyledLabel";
export default {
  components: {
    StyledLabel
  },
  data: () => ({
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
