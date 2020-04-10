<template>
  <Details>
    <template v-slot:Header>
      <Header :imgSrc="imgSrc" />
    </template>
    <template v-slot:Body>
      <div class="detail-content">
        <div class="content-text">
          COVID-19 is a new respiratory disease spreading around the world which is caused by a coronavirus that has not been previously identified in humans. COVID-19 is short for “Coronavirus Disease 2019.”
          <ul>
            <li>
              The virus is thought to spread mainly between people who are in close contact with one another (about 2 meters) and through respiratory droplets produced when an infected person coughs or sneezes.
            </li>
            <li>
              People are most contagious when they are the sickest. But those who don’t have a lot of symptoms can still pass the virus on to others.
            </li>
            <li>
              There is currently no vaccine or cure for COVID-19 but researchers are working to find one.
            </li>
          </ul>
        </div>
        <span class="content-sub-title">
          WHAT ARE THE COVID-19 SYMPTOMS?
        </span>        
          <div class="content-text">
            Symptoms may appear 2 to 14 days after exposure and range from mild to severe illness.
            <ul>
              <li>
                Coughing
              </li>
              <li>
                Shortness of breath
              </li>
              <li>
                Sore throat
              </li>
              <li>
                Headache
              </li>
              <li>
                Fever
              </li>
            </ul>
          </div> 
          <span class="content-sub-title">
            HOW IS THE COVID-19 COMPARED TO SEASONAL FLU?
          </span> 
          <div class="content-text">
            Both COVID-19 and seasonal flu cause fever, cough and aches. However, COVID-19 is much more severe than seasonal flu and no vaccine is available at this time whereas a vaccine is available to prevent some types of the flu.  Someone with a COVID-19 virus can infect approximately 2.5 people, which is higher than seasonal flu. 
          </div>
          <span class="content-sub-title">
            HOW SEVERE IS COVID-19 INFECTION?
          </span> 
          <div class="content-text">
            There is a lot we don’t know about the COVID-19 infection. However, from the data we have, almost 80% of the infections appear asymptomatic or mild while 20% are severe and critical infections. So far, the mortality rate for COVID-19 is also higher than seasonal flu.
          </div>
          <span class="content-sub-title">
            WHO IS AT HIGH RISK FOR COVID-19?
          </span> 
          <div class="content-text">
            Everyone is at risk of getting COVID-19, but some people are at a higher risk of serious illness. <br/>
            Generally, adults aged 65 and older and people of any age who have heart disease, lung disease, and diabetes with complications and obesity may be at higher risk for serious illness from COVID-19. However, it is possible for children and pregnant women to be infected, so they should also follow the proper prevention. There is not enough evidence to suggest that a mother who contracts COVID-19 will transmit the virus to her baby during pregnancy. 
          </div>
          <span class="content-sub-title">
            WHAT TO DO IF I AM FEELING ANXIOUS OR STRESSED BECAUSE OF EVENTS RELATED TO COVID-19?
          </span> 
          <div class="content-text">
            Take a break from social media and news. Do deep breaths exercises. Try doing simple stretching exercises at home  Keep talking to your family and friends and talk about how you are feeling
          </div>
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
      imgSrc: `${process.env.BASE_URL}img/what-to-do-if-head.svg`
    };
  }
};
</script>
