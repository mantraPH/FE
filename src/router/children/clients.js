import routerView from '@/views/routerView'
import Clients from '@/components/clients/Clients'

export default {
  path: '/clients',
  component: routerView,
  children: [
    {
      path: '/',
      name: 'Clients',
      component: Clients,
      meta: {
        transitionName: 'slide'
      }
    }
  ]
}
