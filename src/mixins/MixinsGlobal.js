/* eslint-disable no-console */
import { mapMutations, mapActions, mapGetters } from 'vuex'
export const MixinsGlobal = {
  data () {
    return {
      reqMessage: 'Please fill in required fields!',
      errorGetLocation: '',
      drawer: false,
      date: null,
      menu: false,
      window: {
        width: 0,
        height: 0
      }
    }
  },

  computed: {
    isMobile () {
      return this.window.width < 768
    },
    ...mapGetters({
      MESSAGE: 'MESSAGE'
    })
  },

  watch: {
    menu (val) {
      val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
    }
  },

  methods: {
    ...mapMutations({
      MODAL_ERROR: 'MODAL_ERROR',
      MODAL_SUCCESS: 'MODAL_SUCCESS',
      SNACKBAR_ERROR: 'SNACKBAR_ERROR',
      SNACKBAR_CLOSE: 'SNACKBAR_CLOSE'
    }),
    ...mapActions({
      API_POST: 'API_POST',
      API_FETCH: 'API_FETCH'
    }),

    save (date) {
      this.$refs.menu.save(date)
    },

    showDrawerNav () {
      this.drawer = !this.drawer
    },

    handleScroll () {
      this.scrolled = window.scrollY > 0
    },

    validateForm (form) {
      let willProceed = true
      let data = new FormData()
      Object.keys(form).forEach((keys) => {
        let value = form[keys].value
        let required = form[keys].required
        // eslint-disable-next-line no-console
        // console.log(value)
        if (!value && required) {
          form[keys].isEmpty = true
          willProceed = false
        } else {
          form[keys].isEmpty = false
          if (value) {
            if (typeof value === 'object') {
              if (value) {
                if (keys) {
                  data.append(keys, value)
                } else {
                  Object.keys(value).forEach(index => {
                    let fileValue = value[index]
                    let fileName = value[index].name
                    data.append(index, fileValue, fileName)
                  })
                }
              } else {
                let fileName = value.name
                data.append(keys, value, fileName)
              }
            } else {
              data.append(keys, value)
            }
          } else {
            data.append(keys, value)
          }
        }
      })
      if (!willProceed) return false
      return data
    },

    formRules (value, required) {
      return {
        value: value,
        required: required,
        isEmpty: false
      }
    },

    clearForm (form) {
      Object.keys(form).forEach((keys) => {
        form[keys].value = null
        form[keys].isEmpty = false
      })
    }
  }
}

