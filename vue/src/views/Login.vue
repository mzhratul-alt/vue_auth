<template>
   <div>
      <!-- Login Content -->
      <div class="container-login">
         <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-12 col-md-9">
               <div class="card shadow-sm my-5">
                  <div class="card-body p-0">
                     <div class="row">
                        <div class="col-lg-12">
                           <div class="login-form">
                              <div class="text-center">
                                 <h1 class="h4 text-gray-900 mb-4">Login</h1>
                              </div>
                              <form class="user" @submit.prevent="login">
                                 <div class="form-group">
                                    <input type="email" class="form-control" id="exampleInputEmail"
                                       aria-describedby="emailHelp" placeholder="Enter Email Address"
                                       v-model="user.email">
                                 </div>
                                 <div class="form-group">
                                    <input type="password" class="form-control" id="exampleInputPassword"
                                       placeholder="Password" v-model="user.password">
                                 </div>
                                 <div class="form-group">
                                    <div class="custom-control custom-checkbox small" style="line-height: 1.5rem;">
                                       <input type="checkbox" class="custom-control-input" id="customCheck">
                                       <label class="custom-control-label" for="customCheck">Remember
                                          Me</label>
                                    </div>
                                 </div>
                                 <div class="form-group">
                                    <button type="submit" class="btn btn-primary btn-block">Login</button>
                                 </div>
                              </form>
                              <hr>
                              <div class="text-center">
                                 <router-link class="font-weight-bold small" :to="{ name: 'register' }">Create an
                                    Account!
                                 </router-link>
                              </div>
                              <div class="text-center">
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Login Content -->
   </div>
</template>

<script>
import axios from 'axios'
import store from '../store/store'

export default {
   data() {
      return {
         user: {
            email: '',
            password: '',
         },
         errors: {
            email: '',
            password: '',
         }
      }
   },
   methods: {
      login() {
         store.commit('objReset', this.errors)
         axios.post(store.state.url + 'auth/login', this.user)
            .then((res) => {
               store.commit('storeUser',res)
               this.$router.push({ name: 'dashboard' })
               this.$Notice.success({
                  title: 'Loged In Successfully'
               })
            })
            .catch((err) => {
               this.$Notice.error({
                  title: 'Invalid Credintials'
               })
               this.errors.email = (err.response.data.errors.email) ? err.response.data.errors.email[0] : '';
               this.errors.password = (err.response.data.errors.password) ? err.response.data.errors.password[0] : '';
            })
      }
   }
}
</script>

<style lang="scss" scoped>
</style>