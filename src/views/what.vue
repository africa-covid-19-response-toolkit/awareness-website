<template>
  <Details>
    <template v-slot:Header>
      <h2>{{ header | uppercase }}</h2>
    </template>
    <template v-slot:Body>
      <p>{{ $t("what") }}</p>
    </template>
  </Details>
</template>
<script>
import Details from "../components/details";
export default {
  components: {
    Details
  },
  props: {
    header: {
      type: String,
      default: "What is COVID-19?"
    }
  }
};
</script>
