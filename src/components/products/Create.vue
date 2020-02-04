<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <v-row class="ml-1">
            <v-col cols="12"
              md="6"
              class="mt-n3">
              <h3>
                <v-icon color="white"
                  class="mt-n2"
                  large>
                  mdi-pen-plus
                </v-icon>
                CREATE PRODUCT
              </h3>
            </v-col>
            <v-col cols="12"
              md="6"
              class="mt-n3 text-right">
              <v-btn text
                @click="$emit('closeDialog')">
                <v-icon color="white">mdi-close</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row class="mt-n2">
              <v-col cols="12">
                <v-text-field
                  label="Enter Product Name *"
                  outlined
                  v-model="form.name.value"
                  :class="{'border-red': form.name.isEmpty}" />
              </v-col>
              <v-col cols="12"
                class="mt-n10">
                <v-text-field
                  type="number"
                  label="Enter Price *"
                  outlined
                  v-model="form.price.value"
                  :class="{'border-red': form.price.isEmpty}" />
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-right mb-n6 mt-n6">
                <v-btn color="warning"
                  class="ml-1"
                  @click="resetForm">
                  <v-icon>mdi-eraser</v-icon>
                </v-btn>
                <v-btn color="primary"
                  class="ml-1"
                  @click="create">
                  Submit
                </v-btn>
              </v-col>
            </v-row>
          </v-container>  
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  name: 'Create-Product',
  props: {
    dialog: {
      type: Boolean,
      default: false
    }
  },

  data () {
    return {
      alert: false,
      form: {
        name: this.formRules('', true),
        price: this.formRules('', true)
      }
    }
  },

  methods: {
    create () {
      let data = this.validateForm(this.form)
      if (!data) {
        this.SNACKBAR_ERROR()
        return
      }

      this.API_POST({ url: this.$API_URL + '/Access/?add_group', data: data })
        .then(() => {
          this.clearForm(this.form)
          this.MODAL_SUCCESS('Successfully Added!')
        })
        .catch(error => {
          this.MODAL_ERROR(error.Message)
        })
    },

    resetForm () {
      Object.keys(this.form).forEach(index => {
        this.form[index].isEmpty = false
        this.form[index].value = ''
      })
      this.SNACKBAR_CLOSE()
    },
  }
}
</script>
