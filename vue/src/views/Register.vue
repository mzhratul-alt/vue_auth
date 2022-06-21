<template>
   <div>
      <!-- Register Content -->
      <div class="container-login">
         <div class="row justify-content-center">
            <div class="col-md-6">
               <div class="card shadow-sm my-5">
                  <div class="card-body p-0">
                     <div class="row">
                        <div class="col-lg-12">
                           <div class="login-form">
                              <div class="text-center">
                                 <h1 class="h4 text-gray-900 mb-4">Register</h1>
                              </div>
                              <form @submit.prevent="register">
                                 <div class="form-group">
                                    <label>Name</label>
                                    <input type="text" class="form-control" id="exampleInputFirstName"
                                       placeholder="Enter Your Name" v-model="user.name">
                                 </div>
                                 <div class="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" id="exampleInputEmail"
                                       aria-describedby="emailHelp" placeholder="Enter Email Address" v-model="user.email">
                                 </div>
                                 <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword"
                                       placeholder="Password" :v-model="user.password">
                                 </div>
                                 <!-- <div class="form-group">
                                    <label>Repeat Password</label>
                                    <input type="password" class="form-control" id="exampleInputPasswordRepeat"
                                       placeholder="Repeat Password">
                                 </div> -->
                                 <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-block">Register</button>
                                 </div>
                              </form>
                              <hr>
                              <div class="text-center">
                                 <router-link class="font-weight-bold small" :to="{ name: 'login' }">Already have an
                                    account?
                                 </router-link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Register Content -->
   </div>
</template>

<script>
import router from '../router/router'
import store from '../store/store'

export default {
   data() {
      return {
         user: {
            name:'',
            email:'',
            password:'',
         }
      }
   },
   methods:{
      register() {
         console.log(this.user)
         store.dispatch('register', this.user)
            .then(() => {
               router.push({name:'dashboard'})
            })
      }
   }
}
</script>

<style lang="scss" scoped>
</style>