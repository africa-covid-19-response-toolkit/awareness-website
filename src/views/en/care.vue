<template>
  <Details>
    <template v-slot:Header>
      <Header :imgSrc="imgSrc" />
    </template>
    <template v-slot:Body>
      <div class="detail-content">        
        <span class="content-sub-title">
          MONITOR THE PERSON FOR WORSENING SYMPTOMS. KNOW THE EMERGENCY WARNING SIGNS.
        </span>        
          <p class="content-text">
            If they develop emergency warning signs for COVID-19, get medical attention immediately. Emergency warning signs include, but are not limited to:
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
            If you develop emergency warning signs, call xxx.
          </p> 
          <span class="content-sub-title">
            PREVENT THE SPREAD OF GERMS WHEN CARING FOR SOMEONE WHO IS SICK
          </span> 
          <p class="content-text">
            <ul>
              <li>
                Have the person stay in one room, away from other people, including yourself, as much as possible.
                <ul>
                  <li>
                    If possible, have them use a separate bathroom.
                  </li>
                  <li>
                    Avoid sharing personal household items, like dishes, towels, and bedding
                  </li>
                  <li>
                    If facemasks are available, have them wear a facemask when they are around people, including you.
                  </li>
                  <li>
                    If the sick person can’t wear a facemask, you should wear one while in the same room with them, if facemasks are available. <a href="#">Here</a> is how to make your own mask at home.
                  </li>
                  <li>
                    If the sick person needs to be around others (within the home, in a vehicle, or doctor’s office), they should wear a facemask.
                  </li>
                </ul>
              </li>
              <li>
                Wash your hands often with soap and water for at least 20 seconds, especially after interacting with the sick person. If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry.
              </li>
              <li>
                Avoid touching your eyes, nose, and mouth.
              </li>
              <li>
                Every day, clean all surfaces that are touched often, like counters, tabletops, and doorknobs. Use household cleaning sprays or wipes according to the label instructions.
              </li>
              <li>
                Wash laundry thoroughly. If laundry is soiled, wear disposable gloves and keep the soiled items away from your body while laundering. Wash your hands immediately after removing gloves.
              </li>
              <li>
                Avoid having any unnecessary visitors.
              </li>
              <li>
                For any additional questions about their care, contact their healthcare provider or state or local health department.
              </li>
            </ul>
          </p>
          <span class="content-sub-title">
            PROVIDE SYMPTOM TREATMENT
          </span> 
          <p class="content-text">
            <ul>
              <li>
                Make sure the sick person drinks a lot of fluids to stay hydrated and rests at home.
              </li>
              <li>
                Over-the-counter medicines may help with symptoms.
              </li>
              <li>
                For most people, symptoms last a few days and get better after a week.
              </li>
            </ul>
          </p>
          <span class="content-sub-title">
            WHEN TO END HOME ISOLATION (STAYING HOME)
          </span> 
          <p class="content-text">
            People with COVID-19 who have stayed home (are home isolated) can stop home isolation under the following conditions:
            <ul>
              <li>
                <strong>If they will not have a test</strong> to determine if they are still contagious, they can leave home after all these three things have happened:
                <ol>
                  <li>They have had no fever for at least 72 hours (that is three full days of no fever without the use medicine that reduces fevers)</li>
                  <li>Other symptoms have improved (for example, when their cough or shortness of breath have improved)</li>
                  <li>At least 7 days have passed since their symptoms first appeared</li>
                </ol>
              </li>
              <li>
                <strong>If they will be tested</strong> to determine if they are still contagious, they can leave home after these three things have happened:
                <ol>
                  <li>They no longer have a fever (without the use medicine that reduces fevers)</li>
                  <li>Other symptoms have improved (for example, when their cough or shortness of breath have improved)</li>
                  <li>They received two negative tests in a row, 24 hours apart. Their doctor will follow CDC guidelines.</li>
                </ol>
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
      imgSrc: `${process.env.BASE_URL}img/how-to-care-head.svg`
    };
  }
};
</script>
