/**import routes from various components */
import {subnavRoutes} from './modules/App/components/SubNav/SubNavRoutes'

/**
 * combine all the routes here and send to redux
 */
const routePaths = {
	...subnavRoutes
}

export default routePaths;