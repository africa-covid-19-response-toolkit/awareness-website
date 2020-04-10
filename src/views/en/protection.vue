<template>
  <Details>
    <template v-slot:Header>
      <Header :imgSrc="imgSrc" />
    </template>
    <template v-slot:Body>
      <div class="detail-content">        
        <span class="content-sub-title">
          KNOW HOW IT SPREADS
        </span>        
          <p class="content-text">            
            <ul>
              <li>
                There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19).
              </li>
              <li>
                The best way to prevent illness is to avoid being exposed to this virus.
              </li>
              <li>
                The virus is thought to spread mainly from person-to-person.
              </li>
              <li>
                Between people who are in close contact with one another (within about 6 feet).
              </li>
              <li>
                Through respiratory droplets produced when an infected person coughs or sneezes.
              </li>
              <li>
                These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs.
              </li>
            </ul>
          </p> 
          <span class="content-sub-title">
            TAKE STEPS TO PROTECT YOURSELF
          </span> 
          <p class="content-text">
            <ol>
              <li>
                Wash hands frequently with hot water and soap for 20 seconds
              </li>
              <li>
                Social distancing
              </li>
              <li>
                Clean and disinfect surfaces that can be contaminated
              </li>
              <li>
                Wear face masks - Here is how to make your own!
              </li>              
            </ol>
          </p>          
          <span class="content-sub-title">
            PLAN &amp; COPE
          </span> 
          <p class="content-text">
            <ul>
              <li>Plan and make decisions in advance of an illness.</li>
              <li>Know how to protect and support the children in your care.</li>
              <li>Find ways to cope with stress that will make you, your loved ones, and your community stronger.</li>
            </ul>
          </p>          
      </div>
    </template>
  </Details>
</template>
<script>
import Details from "../../components/details";
import Header from "../../components/header";
export default {
  components: {
    Details,
    Header
  },
  data() {
    return {
      imgSrc: `${process.env.BASE_URL}img/how-to-protect-head.svg`
    };
  }
};
</script>
