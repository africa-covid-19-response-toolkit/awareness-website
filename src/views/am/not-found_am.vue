<template>
  <b-col class="my-5">
    <b-row>
      <b-col>
        <b-img :src="errImgSrc" width="100" fluid></b-img>
        <h1 class="mt-3">{{ $t("page_not_found_title") }}</h1>
        <p>{{ $t("page_not_found_desc") }}</p>
      </b-col>
    </b-row>
    <h4>{{ $route.name }}</h4>
    <ResourceLinks :showHomeBtn="true" />
  </b-col>
</template>
<script>
import ResourceLinks from "../../components/resourceLinks";
export default {
  components: {
    ResourceLinks
  },
  data: () => ({
    errImgSrc: `${process.env.BASE_URL}img/error-404.svg`
  })
};
</script>
