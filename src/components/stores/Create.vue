<template>
  <v-row justify="center">
    <v-dialog v-model="dialog"
      persistent max-width="900px">
      <v-card>
        <v-card-title color="primary">
          <v-row class="ml-1">
            <v-col cols="12"
              md="6"
              class="mt-n3">
              <h3>
                <v-icon color="white"
                  large>
                  mdi-pen-plus
                </v-icon>
                CREATE STORE
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
            <v-row>
              <v-col cols="12"
                md="4">
                <v-text-field
                  label="Enter Store Name *"
                  outlined
                  v-model="form.storeName.value"
                  :class="{'border-red': form.storeName.isEmpty}" />
              </v-col>
              <v-col cols="12"
                md="4">
                <v-text-field
                  label="Enter Email Address *"
                  outlined
                  v-model="form.email.value"
                  :class="{'border-red': form.email.isEmpty}" />
              </v-col>
              <v-col cols="12"
                md="4">
                <v-text-field
                  label="Enter Mobile No. *"
                  outlined
                  v-model="form.mobile.value"
                  :class="{'border-red': form.mobile.isEmpty}" />
              </v-col>
              <v-col cols="12"
                class="mt-n10"
                md="4">
                <v-text-field
                  label="Enter Secondary Mobile No. *"
                  outlined
                  v-model="form.secondaryMobile.value"
                  :class="{'border-red': form.secondaryMobile.isEmpty}" />
              </v-col>
              <v-col cols="12"
                class="mt-n10"
                md="4">
                <v-text-field
                  label="Enter Landline No. *"
                  outlined
                  v-model="form.landline.value"
                  :class="{'border-red': form.landline.isEmpty}" />
              </v-col>
              <v-col cols="12"
                class="mt-n10"
                md="4">
                <v-text-field
                  label="Enter Manager Fullname. *"
                  outlined
                  v-model="form.manager.value"
                  :class="{'border-red': form.manager.isEmpty}" />
              </v-col>
              <v-col cols="12"
                class="mt-n10"
                md="4">
                <v-text-field
                  label="Enter Secondary Landline No. *"
                  outlined
                  v-model="form.secondaryLandline.value"
                  :class="{'border-red': form.secondaryLandline.isEmpty}" />
              </v-col>
              <v-col cols="12"
                class="mt-n10"
                md="4">
                <v-combobox
                  v-model="form.province.value"
                  :items="provinceList"
                  :class="{'border-red': form.province.isEmpty}" 
                  item-text="name"
                  item-value="id"
                  label="Select Province"
                  outlined
                ></v-combobox>
              </v-col>
              <v-col cols="12"
                class="mt-n10"
                md="4">
                <v-combobox
                  v-model="form.city.value"
                  :items="cityList"
                  :class="{'border-red': form.city.isEmpty}" 
                  item-text="name"
                  item-value="id"
                  label="Select City"
                  outlined
                ></v-combobox>
              </v-col>
              <v-col cols="12"
                class="mt-n10"
                md="4">
                <v-combobox
                  v-model="form.barangay.value"
                  :items="barangayList"
                  :class="{'border-red': form.barangay.isEmpty}" 
                  item-text="name"
                  item-value="id"
                  label="Select Barangay"
                  outlined
                ></v-combobox>
              </v-col>
              <v-col cols="12"
                class="mt-n10"
                md="4">
                <v-text-field
                  type="number"
                  label="Enter Street/Block/Lot Number *"
                  outlined
                  v-model="form.no.value"
                  :class="{'border-red': form.no.isEmpty}" />
                </v-col>
                <v-col cols="12"
                  class="mt-n10"
                md="4">
                <v-text-field
                  label="Enter Street Name *"
                  outlined
                  v-model="form.street.value"
                  :class="{'border-red': form.street.isEmpty}" />
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
  name: 'Create-Store',
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
        storeName: this.formRules('', true),
        mobile: this.formRules('', true),
        secondaryMobile: this.formRules('', false),
        landline: this.formRules('', true),
        manager: this.formRules('', true),
        secondaryLandline: this.formRules('', false),
        email: this.formRules('', true),
        province: this.formRules('', true),
        city: this.formRules('', true),
        barangay: this.formRules('', true),
        no: this.formRules('', false),
        street: this.formRules('', false)
      },
      dateFromMenu: false,
      userType: [
        { id: 1, name: 'Super Admin' },
        { id: 2, name: 'Store Admin' },
        { id: 3, name: 'Rider' }
      ],
      provinceList: [
        { id: 1, name: 'Province 1' },
        { id: 2, name: 'Province 2' },
        { id: 3, name: 'Province 3' },
        { id: 4, name: 'Province 4' }
      ],
      cityList: [
        { id: 1, name: 'City 1', provinceId: 1 },
        { id: 2, name: 'City 2', provinceId: 2 },
        { id: 3, name: 'City 3', provinceId: 3 },
        { id: 4, name: 'City 4', provinceId: 4 }
      ],
      barangayList: [
        { id: 1, name: 'Barangay 1', cityId: 1 },
        { id: 2, name: 'Barangay 2', cityId: 2 },
        { id: 3, name: 'Barangay 3', cityId: 3 },
        { id: 4, name: 'Barangay 4', cityId: 4 }
      ]
    }
  },
  methods: {
    create () {
      let data = this.validateForm(this.form)
      if (!data) {
        this.SNACKBAR_ERROR()
        return
      }

      this.API_POST({ url: this.$API_URL + '/Access/SystemUser/?update_system_user', data: data })
        .then(() => {
          this.MODAL_SUCCESS('Successfully Updated!')
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
    }
  }
}
</script>
