export default {
  // eslint-disable-next-line no-console
  IS_TOKEN: state => state.Auth.Token,
  SESSION_DATA: state => state.Auth,
  MODAL: state => state.modal,
  MESSAGE: state => state.resMessage,
  SNACKBAR: state => state.snackBar
}