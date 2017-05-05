import Form from './views/Form'
import Contact from './views/Contact'
import Partner from './views/Partner'
import About from './views/About'

export const routes = [
  {
    path: '/form/',
    component: Form
  },
  {
    path: '/about/',
    component: About
  },
  {
    path: '/contacts/',
    component: Contact
  },
  {
    path: '/contact/:partnerId',
    component: Partner
  }
]
