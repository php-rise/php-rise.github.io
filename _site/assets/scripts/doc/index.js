import {calcMinHeight} from './body-min-height'
import {registerSidebar} from './sidebar'

calcMinHeight()
window.addEventListener('resize', calcMinHeight)

registerSidebar()
