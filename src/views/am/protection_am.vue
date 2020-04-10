<template>
  <Details>
    <template v-slot:Header>
      <Header :imgSrc="imgSrc" />
    </template>
    <template v-slot:Body>
      <div class="detail-content">        
        <span class="content-sub-title">
          ቫይረሱ እንዴት እንደሚተላለፍ ይወቁ።
        </span>        
          <p class="content-text">            
            <ul>
              <li>
                በአሁን ሰአት ኮሮናቫይረስን (ኮቪድ -19) መከላከያ ምንም አይነት ክትባት የለም።
              </li>
              <li>
                በሽታውን መከላከያ ዋነኛውና ብቸኛው መንገድ ራስን ለቫይረሱ እንዳይጋለጡ ጥንቃቄ  በማድረግ ነው።
              </li>
              <li>
                ቫይረሱ  በዋነኛነት ከሰው ወደ ሰው እንደሚተላለፍ ተገልጿል።
              </li>
              <li>
                ሰዎች እርስ በርሳቸው ከ2 ሜትር ባነሰ ርቀት ውስጥ ተቀራርበው ሲገኙ ይተላለፋል።
              </li>
              <li>
                ቫይረሱ ያለበት ሰው በሚያስልበት ወይም በሚያስነጥስበት ጊዜ በሚረጫቸው ከሰውነታችን በሚወጡ በጣም ጥቃቅን ጠብታዎች ወደ ሌላ ሰው ይተላለፋል።
              </li>
              <li>
                እነዚህ ጠብታዎች በአቅራቢያ ወዳለው ጤነኛ ሰው አፍንጫና አፍ ላይ ያርፋሉ ወይም ሲተነፍሱ ቀጥታ ወደ ሳንባው ይገባሉ።
              </li>
            </ul>
          </p> 
          <span class="content-sub-title">
            እራስዎን ከቫይረሱ ለመከላከል የሚከተሉትን ያድርጉ።
          </span> 
          <p class="content-text">
            <ol>
              <li>
                እጅዎቾን በየጊዜው በሙቅ ውሃ እና በሳሙና ቢያንስ ለሃያ ሰከንድ ያህል ይታጠቡ።
              </li>
              <li>
                ማህበራዊ መራራቅን ይተግብሩ። ይህም ማለት ከሌሎች ሰዎች ራቅ ይበሉ።
              </li>
              <li>
                ቫይረሱ ሊያርፍባቸው የሚችላቸውን አካባቢዎች ያጽዱ። ለምሳሌ ስልኮችን፣ የበር እጀታዎችን፣ ጠረቤዛን ኮምፒውተሮትንና ማንኛውም እጅ የሚያርፍበትን ቁሳቁሶችና በአጠቃላይ ቫይረሱ ያርፍበታል ብለው የሚገምቱበትን አካባቢ በሚገባ ያጽዱ።
              </li>
              <li>
                የፊት መሸፈኛ ጭምብል ያድርጉ - እራስዎ በቤትዎ እንዲህ ሊሰሩ ይችላሉ።
              </li>              
            </ol>
          </p>          
          <span class="content-sub-title">
            እቅድ ያውጡና ይተግብሩ።
          </span> 
          <p class="content-text">
            <ul>
              <li>ከህመም በፊት እቅድ አውጥቶ ውሳኔ መስጠት አስፈላጊ ነው።</li>
              <li>ልጆችዎን እንዴት መንከባከብና መርዳት እንዳለብዎት ቀድመው ይወቁ።</li>
              <li>እራስዎን፣ ቤተሰብ ወዳጅዎን እና የአካባቢዎን ማህበረሰብ እንዴት ይህን ፈተና በጋራ እና በጥንካሬ የሚያልፉበትን መላ ያስቡ።</li>
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
