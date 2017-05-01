export default {
  header: {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  },

  api: {
    // base: 'http://localhost:8069/',
    base: 'http://192.168.1.58:8069/',
    contacts: 'contacts',
    login: 'login',
  },

  msg: {
    error: 'An error occurred. Please try again later.'
  }
}
