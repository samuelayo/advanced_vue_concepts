<template>
  <div class="hello">
  <input type="text" v-model="user.name" placeholder="Name"/>
  <input type="text" v-model="user.age" placeholder="age"/>
  <input type="text" v-model="user.status" placeholder="status"/>
  <input type="text" v-model="user.created_at" placeholder="created_at"/>
  <input type="button" @click="add_user()" :disabled="(user.name =='')" value="add user"/>


    </hr>    
    <h2>Users</h2>
    <ul>
      <li style="display:block;" v-for="(use, index) in users">Name: {{use.name}}, Age: {{use.age}}     <input type="button" value="delete user" @click="delete_user(index)" /></li> 
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: {
          name: '',
          age: '',
          status: 0,
          created_at: '2017-10-01'      
      }
    }
  },
  methods: {
    add_user: function(){
      this.$store.dispatch('ADD_USER', this.user);
      this.user =  {
          name: '',
          age: '',
          status: 0,
          created_at: '2017-10-01'      
      }
    },
    delete_user: function(index){
      this.$store.dispatch('DELETE_USER', index);
    }

  },
  computed: {
        users: function(){
          return this.$store.getters.users;
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
