/* eslint-disable no-console */
export default {
  MODAL_ERROR: (state, message) => {
    state.modal.toggle = true
    state.modal.title = 'Error'
    state.modal.type = 'error'
    state.modal.message = message
  },

  MODAL_SUCCESS: (state, message) => {
    state.modal.toggle = true
    state.modal.title = 'Success'
    state.modal.type = 'success'
    state.modal.message = message
  },

  MODAL_CLOSE: (state) => {
    state.modal.toggle = false
    state.modal.message = ''
  },

  SNACKBAR_ERROR: (state, message) => {
    state.snackBar.toggle = true
    state.snackBar.message = message
  },

  SNACKBAR_CLOSE: (state) => {
    state.snackBar.toggle = false
  }
}