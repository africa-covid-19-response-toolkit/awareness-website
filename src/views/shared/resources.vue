<template>
  <Details>
    <template v-slot:Header>
      <b-jumbotron header lead>
        <template v-slot:header>{{ $t("snippets.resources") }}</template>

        <template v-slot:lead>{{ $t("snippets.resources_detail") }}</template>
        <hr class="my-4" />
        <b-row>
          <b-col>
            <b-button
              block
              size="lg"
              style="background-color: #0445b0; color: #fff;"
              href="https://community.covid19.et/"
              target="_blank"
            >
              <StyledLabel>
                {{ $t("snippets.community_form") }}
              </StyledLabel>
            </b-button>
          </b-col>
          <b-col>
            <b-button
              block
              size="lg"
              style="background-color: #0445b0; color: #fff;"
              href="https://www.covid19.et/Covid-19/Volenteer/Create"
              target="_blank"
            >
              <StyledLabel>
                {{ $t("snippets.volunteer_form") }}
              </StyledLabel>
            </b-button>
          </b-col>
          <b-col>
            <b-button
              block
              size="lg"
              style="background-color: #0445b0; color: #fff;"
              variant="success"
              target="_blank"
              href="https://www.covid19.et/Covid-19/ReportCase/Create"
            >
              <StyledLabel>
                {{ $t("snippets.public_report") }}
              </StyledLabel>
            </b-button>
          </b-col>
        </b-row>
      </b-jumbotron>
    </template>
    <template v-slot:Body>
      <div class="container" style="text-align: left;">
        <h4>
          Links to resources that you can download, print and redistribute. Click to download
        </h4>
        <b-list-group class="border-0">
          <b-list-group-item
            class="border-0"
            href="https://drive.google.com/uc?export=download&amp;id=1KAKhpvWq5yYrKxDhxZXThEp3jQUvKaKh"
            download
            >Avoid Physical Touching Amharic</b-list-group-item
          >
          <b-list-group-item
            class="border-0"
            href="https://drive.google.com/uc?export=download&amp;id=1NRNVa99AJU2tDiWnGpZig0eoHMm9TQig"
            download
            >Avoid Physical touching Oromiffa</b-list-group-item
          >
          <b-list-group-item
            class="border-0"
            href="https://drive.google.com/uc?export=download&amp;id=1axu8EWxySnsCp3iFgsGsaO57L2dqsSED"
            download
            >Avoid Physical Touching Tigrinya</b-list-group-item
          >
          <b-list-group-item
            class="border-0"
            href="https://drive.google.com/uc?export=download&amp;id=11kRvF31D056Jm1z5hnUGC7Wz5nJsj7D0"
            download
            >Taxi distancing(Tigrinya)</b-list-group-item
          >
          <b-list-group-item
            class="border-0"
            href="https://drive.google.com/uc?export=download&amp;id=1klz807L7-LjrdXygiGjTpQLnoLNgM_KM"
            download
            >Avoid Physical touching</b-list-group-item
          >
          <b-list-group-item
            class="border-0"
            href="https://drive.google.com/uc?export=download&amp;id=1HJ9aMaXUUdreM9DPUrnZF1u4Jcj6mnNY"
            download
            >Basic protective measures against the new coronavirus_Amharic</b-list-group-item
          >
          <b-list-group-item
            class="border-0"
            href="https://drive.google.com/uc?export=download&amp;id=1W0YuNcbV5gKL9jaA3dnBSkRgDUVsKzCc"
            download
            >Physical Distancing Amharic</b-list-group-item
          >
          <b-list-group-item
            class="border-0"
            href="https://drive.google.com/uc?export=download&amp;id=1k3ZSGOCIlXiye1EY7BtR9TcqcMzqmLHz"
            download
            >Stay at home Amharic</b-list-group-item
          >
          <b-list-group-item
            class="border-0"
            href="https://drive.google.com/uc?export=download&amp;id=1NDyUXRq-OcLVCF7MxerM0Ky6xVWLs11j"
            download
            >Houses of worship</b-list-group-item
          >
        </b-list-group>
      </div>
    </template>
  </Details>
</template>
<script>
import Details from "../../components/details";
import { StyledLabel } from "../../styles/StyledLabel";
//import Header from "../components/header";
export default {
  components: {
    Details,
    StyledLabel
  },
  data() {
    return {
      imgSrc: `${process.env.BASE_URL}img/hero-img.svg`
    };
  }
};
</script>
