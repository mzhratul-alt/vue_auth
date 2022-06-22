<template>
   <div>
      <h1>Hello World</h1>
      <button @click="test">Click</button>
   </div>
</template>

<script>
import axios from 'axios'
import store from '../store/store'
export default {
   methods: {
      test() {
         axios.post(store.state.url + 'auth/me', {
           token: store.state.user.token
         })
            .then(res => {
               console.log(res.data)
            })
            .catch((error) => {
               console.log(error)
            });
      }
   }
}
</script>

<style scoped>
</style>