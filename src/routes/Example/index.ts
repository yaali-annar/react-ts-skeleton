import { lazy } from 'react'
import { ROUTE_PATH } from '@constants/url'

export default {
  exact: true,
  path: ROUTE_PATH.EXAMPLE,
  Component: lazy(() => import('./View')),
}
