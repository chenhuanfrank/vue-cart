<template>
	<div id="header">
		<ul>
			<li>
				<router-link :to='{name: "Home", params: {item: "index"}}'>首页</router-link>
			</li>
			<li>
				<router-link :to="{name: 'About' }">关于</router-link>
			</li>
      <li>
        <router-link :to='{name: "shopping"}'>购物车</router-link>
      </li>
		</ul>
	</div>
</template>

<script type='text/babel'>
export default {
  name: 'header',
  data: function () {
    return {
      message: 'header is going on!'
    }
  }
}
</script>

<style scoped>
h1, h2 {
	color:red;
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