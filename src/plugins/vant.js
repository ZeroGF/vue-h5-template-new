// 按需全局引入 vant组件
import Vue from 'vue'
import {
    Icon,
    Button,
    Checkbox,
    Image as VanImage,
    List,
    Cell,
    NavBar,
    Tabbar,
    TabbarItem,
    Skeleton,
    Empty,
    Stepper,
    Field,
    Form,
    DropdownMenu,
    DropdownItem,
    PullRefresh
} from 'vant'

Vue.use(Icon)
Vue.use(Button)
Vue.use(Checkbox)
Vue.use(VanImage)
Vue.use(Cell)
Vue.use(NavBar)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)
Vue.use(Skeleton)
Vue.use(Empty)
Vue.use(Stepper)
Vue.use(Field)
Vue.use(Form)
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(PullRefresh);