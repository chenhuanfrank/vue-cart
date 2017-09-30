<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h1>{{$route.params.item}}</h1>
    <p>
      <router-link :to='{name: "item1" , params: {id: $route.params.item}}'>item1</router-link>
      <router-link :to='{name: "item2"}'>item2</router-link>    
    </p>
    <router-view></router-view>
    <router-view name='a'></router-view>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
