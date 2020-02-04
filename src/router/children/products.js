import routerView from '@/views/routerView'
import Products from '@/components/products'
import Create from '@/components/products/Create'

export default {
  path: '/products',
  component: routerView,
  children: [
    {
      path: '/',
      name: 'Products',
      component: Products,
      meta: {
        transitionName: 'slide'
      }
    },
    {
      path: 'create',
      name: 'Create-Product',
      component: Create,
      meta: {
        transitionName: 'slide'
      }
    }
  ]
}
