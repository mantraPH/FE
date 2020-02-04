<template>
  <v-row class="login"
    :style="{ 'background-image': 'url(' + loginLogo + ')' }">
    <v-col md="4"></v-col>
    <v-col
      md="4"
      cols="12">
      <v-row class="login-container">
        <v-col cols="12"
          class="pa-5">
          <v-row>
            <v-col class="text-center">
              <h1 class="login-content">
                <v-icon>mdi-quote-left</v-icon>
                  YOUR PARTNER <br/>IN HEALTHCARE
                <v-icon>mdi-quote-left</v-icon>
                </h1>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
    <v-col class="wrapper"
      md="4"
      cols="12">
      <v-row class="login-container">
        <v-col cols="12"
          class="pa-5 login-wrapper">
          <v-row>
            <v-col class="text-center">
              <h1 class="one-health">ONE HEALTH</h1>
            </v-col>
          </v-row>
          <v-row>
            <v-col class="text-left">
              <label>LOGIN ACCOUNT</label>
            </v-col>
          </v-row>
          <v-row class="mt-n5">
            <v-col cols="12">
              <v-text-field
                label="Enter Username *"
                outlined
                :disabled="isLoading"
                v-model="form.UserName.value"
                :class="{'border-red': form.UserName.isEmpty}"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-n8">
            <v-col cols="12"
              class="mt-n2">
              <v-text-field
                type="password"
                label="Enter Password *"
                outlined
                :disabled="isLoading"
                v-model="form.Password.value"
                :class="{'border-red': form.Password.isEmpty}"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row class="mt-n10">
            <v-col cols="12"
              class="text-center"
              md="12">
              <v-btn color="primary"
                block
                large
                :disabled="isLoading"
                @click="signIn">
                <v-progress-circular
                  :size="25"
                  v-if="isLoading"
                  color="primary"
                  indeterminate />
                <span v-else>Sign in</span>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>
<script>
/* eslint-disable no-console */
export default {
  name: 'Login',
  data () {
    return {
      loginLogo: require('@/assets/login-logo.jpg'),
      isLoading: false,
      form: {
        UserName: this.formRules('', true),
        Password: this.formRules('', true)
      }
    }
  },

  methods: {
    signIn () {
      let data = this.validateForm(this.form)
      if (!data) {
        this.MODAL_ERROR(this.MESSAGE.requiredMess)
        return
      }
      this.API_POST({url: '/ApiLogin/validateLogin', data: data})
        .then((response) => {
          let data = response.data
          this.$session.start()
          this.$session.set('id', data.id)
          this.$session.set('storeId', data.storeId)
          this.$session.set('firstName', data.firstName)
          this.$session.set('lastName', data.lastName)
          this.$session.set('userType', data.userLevel)
          this.$session.set('token', data.token)
          this.$router.push('/stores')
        })
        .catch((error) => {
          this.MODAL_ERROR(error)
        })
      }
  }
}
</script>
<style scoped>
.icon-quote {
  font-size: 15px;
  position: relative;
  top: -20px;
}
.login-wrapper {
  background-color: #ffff;
  border-radius: 5px;
}
.wrapper {
  padding: 18px;
}
.login {
  height: 100vh;
}
.login-container {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  margin: auto;
}
.one-health {
  color: #1976d2;
}
.login-content{
  color: #ffff;
  font-size: 45px;
}
</style>