import Form from './views/Form'
import Contact from './views/Contact'
import Partner from './views/Partner'

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
    path: '/contact/:partnerId',
    component: Partner
  }
]
