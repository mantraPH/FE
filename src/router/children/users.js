import routerView from '@/views/routerView'
import Users from '@/components/users'
import Create from '@/components/users/Create'

export default {
  path: '/users',
  component: routerView,
  children: [
    {
      path: '/',
      name: 'Users',
      component: Users,
      meta: {
        transitionName: 'slide'
      }
    },
    {
      path: 'create',
      name: 'Create-User',
      component: Create,
      meta: {
        transitionName: 'slide'
      }
    }
  ]
}
