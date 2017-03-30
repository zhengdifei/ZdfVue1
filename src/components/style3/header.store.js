/**
 * Created by zhengdifei on 2017/3/29 0029.
 */
import {MENU_COLLAPSE} from 'store/types'

export default {
    state : {
        show : true
    },
    mutations : {
        [MENU_COLLAPSE] (state) {
            state.show = !state.show
        }
    }
}