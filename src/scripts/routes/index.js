import Favorite from '../views/pages/Favorite'
import Detail from '../views/pages/Detail'
import Home from '../views/pages/Home'

const routes = {
  '/': Home,
  '/favorite': Favorite,
  '/detail/:id': Detail
}

export default routes
