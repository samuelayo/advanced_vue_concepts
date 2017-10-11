<template>
  <div class="hello">
  <transition name="test">
    <h1 v-if="status">{{ msg }}</h1>
    </transition>
    <input type="button" @click="status=!status" value="test transition"/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'welcome to your Vue.js App',
      status: false
    }
  },
  mounted: function(){
    this.status = true;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
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

.test-enter-active {
  transition: transform 3s;
  text-shadow:0px 5px 10px #fdff00;
}
.test-leave-active {
  transition: transform 3s;
  text-shadow:0px 5px 10px #a1a194;
}

.test-enter, .test-leave-to {
  transform: translateX(90%);
}

.test-enter-to, .test-leave {
  transform: translateX(-15%);
}


</style>
