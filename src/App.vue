<template>
  <div id="app">
    <index></index>
  </div>
</template>

<script>
export default {
  name: 'App',
	components:{
		index:()=>import('@/components/index')
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,body{
	margin: 0;
	padding: 0;
}
</style>
