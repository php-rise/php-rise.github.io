import {calcMinHeight} from './body-min-height'
import {registerSidebarBtn} from './sidebar'

calcMinHeight()
window.addEventListener('resize', calcMinHeight)

registerSidebarBtn()
