<template>
  <theme-provider :theme="theme">
    <app-container id="app">
      <b-container>
        <StyledNav>
          <nav>
            <StyledBrand>
              <b-list-group horizontal>
                <b-list-group-item class="bg-transparent">
                  <b-img :src="imgSrc" fluid alt=""></b-img
                ></b-list-group-item>
                <b-list-group-item class="bg-transparent">
                  An official website of the Ethiopian
                  Government</b-list-group-item
                >
                <b-list-group-item class="bg-transparent">
                  <select v-model="$i18n.locale">
                    <option
                      v-for="(lang, i) in langs"
                      :key="`Lang${i}`"
                      :value="lang.name"
                      >{{ lang.label }}</option
                    >
                  </select>
                </b-list-group-item>
              </b-list-group>
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
