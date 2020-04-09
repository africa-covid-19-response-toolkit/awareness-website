<template>
      <Details>
        <template v-slot:Header>
      <b-jumbotron  header="" lead="">
        <template v-slot:header>{{$t("snippets.resources")}}</template>

        <template v-slot:lead>{{$t("snippets.resources_detail")}}
    </template>
        <hr class="my-4" />
        <b-row>
          <b-col>
            <b-button
          block
          size="lg"
          style="background-color: #EDF0FF; border: 0.75px solid #3D3C99; color:black;"
          href="https://community.covid19.et/"
          target="_blank"
          ><StyledLabel>{{ $t("snippets.community_form") }}</StyledLabel></b-button
        >
          </b-col>
          <b-col>
            <b-button
          block
          size="lg"
          style="background-color: #EDF0FF; border: 0.75px solid #3D3C99; color:black;"
          href="https://www.covid19.et/Covid-19/Volenteer/Create"
          target="_blank"
          ><StyledLabel>{{ $t("snippets.volunteer_form") }}</StyledLabel></b-button>
          </b-col>
          <b-col>
            <b-button
          block
          size="lg"
          style="background-color: #EDF0FF; border: 0.75px solid #3D3C99; color:black;"
          variant="success"
          target="_blank"
          href="https://www.covid19.et/Covid-19/ReportCase/Create"
          ><StyledLabel>{{ $t("snippets.public_report") }}</StyledLabel></b-button
        >
          </b-col>
        </b-row>      
        
        
      </b-jumbotron>
        </template>
        <template v-slot:Body>
          <div class="container" style="text-align: left;">  
            <h4>Links to resources that you can download, print and redistribute</h4>          
            <b-list-group flush="true" class="border-0">
                <b-list-group-item class="border-0" href="#some-link" download>Downloadable Resource 1</b-list-group-item>
                <b-list-group-item class="border-0" href="#some-link" download>Downloadable Resource 2</b-list-group-item>
                <b-list-group-item class="border-0" href="#some-link" download>Downloadable Resource 3</b-list-group-item>
                <b-list-group-item class="border-0" href="#some-link" download>Downloadable Resource 4</b-list-group-item>
                <b-list-group-item class="border-0" href="#some-link" download>Downloadable Resource 5</b-list-group-item>
                <b-list-group-item class="border-0" href="#some-link" download>Downloadable Resource 6</b-list-group-item>
                <b-list-group-item class="border-0" href="#some-link" download>Downloadable Resource 7</b-list-group-item>
            </b-list-group>
          </div>
        </template>
      </Details>     
</template>
<script>
import Details from "../components/details";
//import Header from "../components/header";
export default {
  components: {
    Details //,
    //Header
  },
  data() {
    return {
      imgSrc: `${process.env.BASE_URL}img/hero-img.svg`
    };
  }
};
</script>
