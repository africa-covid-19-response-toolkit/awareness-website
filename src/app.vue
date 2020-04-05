<template>
  <theme-provider :theme="theme">
    <app-container id="app">
      <b-container>
        <StyledNav>
          <nav>
            <StyledBrand>
              <b-row class="p-1 m-0 text-left" align-v="center">
                <b-col col lg="1" class="pr-0"> <b-img :src="imgSrc"/></b-col>
                <b-col col lg="8" class="pl-0"> An official website </b-col>
                <b-col col lg="3">
                  <select v-model="$i18n.locale">
                    <option
                      v-for="(lang, i) in langs"
                      :key="`Lang${i}`"
                      :value="lang.name"
                      >{{ lang.label }}</option
                    >
                  </select>
                </b-col>
              </b-row>
            </StyledBrand>
          </nav>
        </StyledNav>
        <router-view></router-view>
        <b-jumbotron class="bg-transparent">
          <app-footer>
            {{ $t("footer_title") }}
          </app-footer>
        </b-jumbotron>
      </b-container>
    </app-container>
  </theme-provider>
</template>

<script>
import { AppContainer } from "./styles/AppContainer";
import { Footer } from "./styles/Footer";
import { StyledNav } from "./styles/StyledNav";
import { StyledBrand } from "./styles/StyledNav";

import theme from "./styles/theme";

export default {
  name: "app",
  props: {
    imgSrc: {
      type: String,
      default: `${process.env.BASE_URL}img/icons/flag.svg`
    }
  },
  components: {
    "app-container": AppContainer,
    "app-footer": Footer,
    StyledNav,
    StyledBrand
  },
  data: () => ({
    langs: [
      { name: "am", label: "Amharic" },
      { name: "en", label: "English" }
    ],
    theme
  })
};
</script>
