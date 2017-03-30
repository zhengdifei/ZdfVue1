/**
 * time : 2017/3/7 0007.
 * author : zhengdifei
 * desc : 配置所有系统的访问路径
 * path : {
 *      / : 首页,
 *      /Building : 建筑物管理页,
 *      /ElecAnalysis : 用电统计分析
 * }
 */
import Home from 'pages/Home.vue'
import Ui from 'pages/Ui.vue'
import Form from 'pages/Form.vue'
import Dashboard1 from 'pages/Dashboard_1.vue'
import Dashboard2 from 'pages/Dashboard_2.vue'

export default [{
    path : '/',
    component : Home
},{
    path : "/ui",
    component : Ui
},{
    path : '/form',
    component : Form
},{
    path : '/dashboard1',
    component : Dashboard1
},{
    path : '/dashboard2',
    component : Dashboard2
}]