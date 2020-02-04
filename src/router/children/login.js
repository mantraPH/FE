import Login from '@/components/login'
export default {
  path: '/Login',
  component: Login,
  meta: {
    requireAuth: false,
    transitionName: 'slide'
  }
}
