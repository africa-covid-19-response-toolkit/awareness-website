<template>
  <theme-provider :theme="theme">
    <app-container id="app">
      <StyledNav>
        <nav>
          <b-row class="p-2 m-0 text-left" align-v="center">
            <b-col col lg="10" sm="10">
              <b-img :src="flagIcon" />
              &nbsp; {{ $t("official_banner") }}
            </b-col>
            <b-col col lg="2" sm="2" align-self="right">
              <select v-model="$i18n.locale" class="bg-light">
                <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang.name">
                  {{
                  lang.label
                  }}
                </option>
              </select>
            </b-col>
          </b-row>
        </nav>
      </StyledNav>
      <b-container>
        <router-view></router-view>
        <app-footer>{{ $t("footer_title") }}</app-footer>
      </b-container>
    </app-container>
  </theme-provider>
</template>

<script>
import { AppContainer } from "./styles/AppContainer";
import { Footer } from "./styles/Footer";
import { StyledNav } from "./styles/StyledNav";

import theme from "./styles/theme";

export default {
  name: "app",
  props: {
    flagIcon: {
      type: String,
      default: `${process.env.BASE_URL}img/flag.svg`
    }
  },
  components: {
    "app-container": AppContainer,
    "app-footer": Footer,
    StyledNav
  },
  data: () => ({
    langs: [
      { name: "am", label: "Amharic" },
      { name: "en", label: "English" }
    ],
    theme
  }),
  methods: {
    langSwitched(event) {
      let lang = event.target.value;
      let path = this.$route.path.trimRight("/");
      console.log(lang);
      console.log(path);
      let segments = path.split("/");
      console.log(segments);
      let currentPage = segments.length > 2 ? `/${segments[2]}` : "";
      this.$router.push(`/${lang}${currentPage}`);
    }
  }
};
</script>
