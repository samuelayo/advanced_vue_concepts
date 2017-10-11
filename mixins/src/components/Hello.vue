<template>
  <div class="hello">
    
    <h2>Inactive Users</h2>
    <ul>
      <li style="display:block;" v-for="user in inactiveUsers">Name: {{user.name}}, Age: {{user.age}}</li> 
    </ul>
  </div>
</template>

<script>
import {firstMixin} from '../mixins/firstMixin'
export default {
  name: 'hello',
  mixins: [firstMixin],
  data () {
    return {
      status: 0,
      users: [
        {name: 'glo abredit', age: 27, status: 0, created_at: '2017-09-11' },
        {name: 'gia fella', age: 29, status: 1, created_at: '2017-09-01' },
        {name: 'ohaneze david', age: 23, status: 0, created_at: '2017-09-09' },
        {name: 'paul david', age: 21, status: 1, created_at: '2017-09-21' },
        {name: 'john williams', age: 20, status: 0, created_at: '2017-03-13' },
        {name: 'mary jokers', age: 28, status: 1, created_at: '2017-09-30' },
        {name: 'chris aloha', age: 27, status: 0, created_at: '2017-09-19' },
        {name: 'johnson silva', age: 29, status: 0, created_at: '2017-09-17' },
        {name: 'sens carlos', age: 26, status: 0, created_at: '2017-09-04' },
        {name: 'sophia nkom', age: 25, status: 0, created_at: '2017-09-05' },
        {name: 'jo westley', age: 22, status: 1, created_at: '2017-09-16' },
        {name: 'sam cunt', age: 24, status: 0, created_at: '2017-04-01' },
        {name: 'dia dia', age: 27, status: 1, created_at: '2017-05-08' }
      ]
    }
  },
  computed: {
    inactiveUsers: function(){
      return this.filter_by_date(this.get_active_or_inactive());
    }
}
}
</script>
