<template>
  <Details>
    <template v-slot:Header>
      <Header :imgSrc="imgSrc" />
    </template>
    <template v-slot:Body>
      <div class="detail-content">        
        <span class="content-sub-title">
          SELF-CHECKER
        </span>        
          <p class="content-text">
            A guide to help you make decisions and seek appropriate medical care
          </p>
          <span>
            MONITOR YOUR SYMPTOMS
          </span>
          <p class="content-text">
            <ul>
              <li>
                Common symptoms of COVID-19 include fever and cough. Trouble breathing is a more serious symptom that means you should get medical attention.
              </li>
              <li>
                If you are having trouble breathing, seek medical attention, but call first.
              </li>
              <li>
                Wear a facemask: If available, put on a facemask before you enter the building. If you can’t put on a facemask, cover your coughs and sneezes. Try to stay at least 2 meters away from other people.
              </li>
              <li>
                Follow care instructions from your healthcare provider and local health department: Your local health authorities may give instructions on checking your symptoms and reporting information.
              </li>              
            </ul>
          </p> 
          <span class="content-sub-title">
            STAY HOME, EXCEPT TO GET MEDICAL CARE
          </span> 
          <p class="content-text">           
            <ul>
              <li>
                Most people with COVID-19 have mild illness and are able to recover at home without medical care. Do not leave your home, except to get medical care. Do not visit public areas.
              </li>
              <li>
                Call before you get medical care. Be sure to get care if you have trouble breathing, or have any other emergency warning signs, or if you think it is an emergency.
              </li>
              <li>
                Avoid public transportation: Avoid using public transportation, ride-sharing, or taxis.
              </li>
              <li>
                Separate yourself from other people in your home, this is known as home isolation. You should stay in a specific “sick area” if possible. Use a separate bathroom, if available.
              </li>  
              <li>
                Wear a facemask, if available, when you are around other people (including before you enter a healthcare provider’s office).
              </li>            
              <li>
                Get rest and stay hydrated.
              </li>
              <li>
                Call and notify the dispatch personnel that you have or may have COVID-19.
              </li>
            </ul>
          </p> 
          <span class="content-sub-title">
            WHEN TO SEEK MEDICAL ATTENTION
          </span> 
          <p class="content-text">
            If you develop emergency warning signs for COVID-19, get medical attention immediately. Emergency warning signs include, but are not limited to:
            <ul>
              <li>
                Trouble breathing
              </li>
              <li>
                Persistent pain or pressure in the chest
              </li>
              <li>
                New confusion or inability to arouse
              </li>
              <li>
                Bluish lips or face
              </li>
              <li>
                Severe, constant dizziness or lightheadedness
              </li>
              <li>
                Slurred speech
              </li>              
            </ul>
            If you develop emergency warning signs, call.
          </p>
          <span class="content-sub-title">
            TAKE STEPS TO PROTECT OTHERS
          </span> 
          <p class="content-text">
            Cover your coughs and sneezes
            <ul>
              <li>
                Cover: Cover your mouth and nose with a tissue when you cough or sneeze. If you don’t have a tissue, cough or sneeze into your elbow.
              </li>
              <li>
                Dispose: Throw used tissues in a lined trash can.
              </li>
            </ul>
          </p>
          <span class="content-sub-title">
            Clean your hands often
          </span> 
          <p class="content-text">
            <ul>
              <li>
                Wash hands: Wash your hands often with soap and water for at least 20 seconds. This is especially important after blowing your nose, coughing, or sneezing; going to the bathroom; and before eating or preparing food.
              </li>
              <li>
                Hand sanitizer: If soap and water are not available, use an alcohol-based hand sanitizer with at least 60% alcohol, covering all surfaces of your hands and rubbing them together until they feel dry.
              </li>
              <li>
                Soap and water: Soap and water are the best option, especially if hands are visibly dirty.
              </li>
              <li>
                Avoid touching: Avoid touching your eyes, nose, and mouth with unwashed hands.
              </li>
            </ul>
          </p>
          <span class="content-sub-title">
            Avoid sharing personal household items and clean frequently
          </span> 
          <p class="content-text">
            <ul>
              <li>
                Do not share: Do not share dishes, drinking glasses, cups, eating utensils, towels, or bedding with other people in your home.
              </li>
              <li>
                Wash thoroughly after use: After using these items, wash them thoroughly with soap and water or put in the dishwasher.
              </li>
              <li>
                Clean and disinfect areas that may have blood, stool, or body fluids on them.
              </li>
              <li>
                Household cleaners and disinfectants: Clean the area or item with soap and water or another detergent if it is dirty. Then, use a household disinfectant.
              </li>
            </ul>
          </p>
          <span class="content-sub-title">
            GETTING HELP
          </span> 
          <p class="content-text">
            <ul>
              <li>
                Use this tool to help you make decisions and seek appropriate medical care
              </li>
              <li>
                If you need to talk to someone, call these hotlines managed by the Ministry of Health and Telecom
              </li>
              <li>
                You can ask questions using self-service tools on Telegram, Whatsapp or SMS 
              </li>
              <li>
                You can pre-recorded information about COVID-19 by calling 8335 or 952
              </li>
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
      imgSrc: `${process.env.BASE_URL}img/what-to-do-if-head.svg`
    };
  }
};
</script>
