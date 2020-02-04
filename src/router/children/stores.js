import routerView from '@/views/routerView'
import Stores from '@/components/stores'
import Create from '@/components/stores/Create'

export default {
  path: '/stores',
  component: routerView,
  children: [
    {
      path: '/',
      name: 'Stores',
      component: Stores,
      meta: {
        transitionName: 'slide'
      }
    },
    {
      path: 'create',
      name: 'Create-Store',
      component: Create,
      meta: {
        transitionName: 'slide'
      }
    }
  ]
}
