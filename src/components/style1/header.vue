<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <section class="logo">
        <div class="container">
            <div class="row">
                <div class="col-md-2">
                    <img src="./images/logo-vrinda.png"/>
                </div>
                <div class="col-md-6"></div>
                <div class="col-md-4 quick-info">
                    Support : <i>zhengdifei@visenergy.cc</i>
                    <br>
                    Call : <i>+86-18694079433</i>
                </div>
            </div>
        </div>
        <section class="menu">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                    <span class="menu-icon-pointer" @click="showMenu">
                        <i class="fa fa-bars pull-left fa-2x b-clr"></i>
                    </span>
                        <i class="pull-right">Welcome To The Admin Module</i>
                    </div>
                </div>
            </div>
            <div :class="['side-menu',{ 'menu_show': show}]">
                <ul>
                    <li>
                        <a href="#" title="close" @click="showMenu">
                            <i class="fa fa-close fa-2x b-clr menu-icon-pointer"></i>
                        </a>
                    </li>
                    <li>
                        <router-link to="/" title="Dashboard">
                            <i class="fa fa-home fa-2x"></i>
                        </router-link>
                    </li>
                    <li>
                        <a href="#" title="UI Elements">
                            <router-link to="/ui" title="Dashboard">
                                <i class="fa fa-plug fa-2x"></i>
                            </router-link>
                        </a>
                    </li>
                    <li>
                        <a href="#" title="Forms">
                            <router-link to="/form" title="Dashboard">
                                <i class="fa fa-rocket fa-2x"></i>
                            </router-link>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </section>
</template>
<style lang="scss">
    $bg-color : #3AB056;
    .logo {
        padding-top : 15px;
        padding-bottom : 10px;
    }
    .quick-info {
        font-family : 'Lobster', cursive;
        font-size : 20px;
    }
    .b-clr {
        color: #000;
    }
    .menu {
        background-color: $bg-color;
        padding-top: 20px;
        padding-bottom: 15px;
        color: #fff;
        font-size: 22px;
    }
    .menu-icon-pointer {
        cursor: pointer;
    }
    .side-menu {
        height: 100%;
        position: fixed;
        background-color: $bg-color;
        left: -250px;
        top: 0px;
        color: #fff;
        z-index: 999;
        max-width: 500px;
        overflow: auto;
        ul {
            list-style: none;
            padding: 0px;
            li {
                border-bottom: 1px solid #3BA551;
                padding: 20px 25px;
                a , a:hover{
                    color: #fff;
                    text-decoration: none;
                    font-size: 16px;
                    i {
                        padding-right: 10px;
                    }
                }
            }
        }
    }
    .menu_show {
        left: 0px;
    }
</style>
<script>
    export default{
        data(){
            return{
                show : true
            }
        },
        methods : {
            showMenu : function(){
                this.show = !this.show
                console.log(this.show)
            }
        }
    }
</script>
