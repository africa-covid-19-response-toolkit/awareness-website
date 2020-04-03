<template>
    <Details>
        <template v-slot:Header>
            <h2>{{ header | uppercase}}</h2>
        </template>
        <template v-slot:Body>
            <p>
                Monitor the person for worsening symptoms, know the emergency warning signs.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </template>
    </Details>
</template>
<script>
import Details from "../components/details";
export default {
   components:{
       Details
   },
   props: {
       header: {
           type: String,
           default: 'How to care for someone'
       }
   }   
}
</script>