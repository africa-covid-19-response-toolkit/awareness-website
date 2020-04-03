<template>    
    <div>      
      <b-jumbotron>
        <div><router-link to="/" class="float-left">Back</router-link></div>
        <div><slot name="Header"></slot></div>
        
      </b-jumbotron>      
      <slot name="Body"></slot>
    </div> 
</template>
<script>
export default {
  
}
</script>