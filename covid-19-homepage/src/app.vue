<template>
  <div id="app">
    <b-container>
      <router-view></router-view>
      <footer>
        <b-jumbotron>
          <p>Footer goes here</p>
        </b-jumbotron>
      </footer>
    </b-container>   
  </div>  
</template>

<script>

export default {  
  name: "app"
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
