import Form from './views/Form'
import Contact from './views/Contact'
import About from './views/About'

export const routes = [
  {
    path: '/form/',
    component: Form
  },
  {
    path: '/contacts/',
    component: Contact
  },
  {
    path: '/about/',
    component: About
  }
]
