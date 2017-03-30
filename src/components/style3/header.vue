<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <section :class="[{'menu_collapsed': show}]">
        <div class="left-side sticky-left-side">
            <div class="logo">
                <h1>
                    <a href="#">
                        Easy <span>Admin</span>
                    </a>
                </h1>
            </div>
            <div class="logo-icon text-center">
                <a href="#">
                    <i class="lnr lnr-home"></i>
                </a>
            </div>
            <div class="left-side-inner">
                <ul class="nav nav-pills nav-stacked custom-nav">
                    <li v-for="(menu,index) in menus" :class="[index == menuClickIndex ? 'active':'',menu.children?'menu-list':'',index == menuHoverIndex ? 'nav-hover':'',index == menuClickIndex && menu.children && subMenuToggle && !show?'nav-active':'']" @click="menuClick(index)" @mouseover="menuHover(index)" @mouseout="menuMouseOut(index)">
                        <router-link :to="menu.url?menu.url:'#'">
                            <i :class="['lnr',menu.icon]"></i>

                            <span>{{menu.name}}</span>
                        </router-link>
                        <ul v-show="menu.children!=null" class="sub-menu-list">
                            <li v-for="submenu in menu.children" @click.stop>
                               <router-link :to="submenu.url?submenu.url:'#'">{{submenu.name}}</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
    .left-side {
        width: 200px;
        position: absolute;
        top: 0;
        left: 0;
    }
    .sticky-left-side {
        position: fixed;
        height: 100%;
        overflow: hidden;
        outline: none;
        z-index: 100;
        background-color: #000;
    }
    .logo {
        position: fixed;
        top: 0;
        left: 0;
        width: 200px;
        z-index: 100;
        background-color: #8bc34a;
        border-bottom: 1px solid #303b4d;
        text-align: center;
        padding: 0.55em 0 1em;
        h1 {
            margin-bottom: 0;
            line-height: 25px;
        }
        a {
            font-size: 0.7em;
            color: #fff;
            margin: 0;
            text-decoration: none;
            display: inline-block;
            text-transform: capitalize;
            span {
                color: #000;
            }
        }
    }
    $bg-color : #353f4f;
    $color : #8bc34a;
    .logo-icon {
        display: none;
        a {
            display: block;
            text-align: center;
            text-decoration: none;
            &:hover {
                color: #b8c9f1;
            }
            i {
                line-height: 1.4em;
                font-size: 1.5em;
                color: #fff;
                padding-top: 10px;
                display: block;
            }
        }
    }

    .left-side-inner {
        padding: 0px;
        margin-bottom: 50px;
        .custom-nav {
            background: #000;
            margin-top: 59px;
            margin-bottom: 10px;
            li > a {
                color: #c8c8c8;
                padding: 12px 20px;
                border-radius: 0;
                -webkit-border-radius: 0;
                &:hover &:active {
                    background-color: $bg-color;
                    color: $color;
                    border-radius: 0;
                    -webkit-border-radius: 0;
                }
            }

            li.menu-list > a {
                background: transparent;
                &:hover {
                    background-color: $bg-color;
                }
            }
            li.nav-active > a {
                background-color: $bg-color;
                color: $color;
            }
            li.nav-active > ul {
                display: block;
            }
            li.active > a,a:hover,a:focus {
                background-color: $bg-color;
                color: $color;
            }
            .sub-menu-list {
                list-style: none;
                display: none;
                margin: 0;
                padding: 0;
                background: $bg-color;
                li > a {
                    color: #fff;
                    font-size: 13px;
                    display: block;
                    padding: 10px 5px 10px 50px;
                    -moz-transition: all 0.2s ease-out 0s;
                    -webkit-transition: all 0.2s ease-out 0s;
                    transition: all 0.2s ease-out 0s;
                    &:hover,&:active,&:focus {
                        text-decoration: none;
                        color: #fff;
                        background-color: #6b9d31;
                    }
                }
                li.active > a {
                    color: #65cea7;
                    background-color: #2a323f;
                }
            }
        }
    }

    .nav > li {
        position: relative;
        display: block;
        a {
            position: relative;
            display: block;
            padding: 12px 15px;
        }
    }
    .menu_collapsed {
        .logo-icon {
            height: 51px;
            margin-top: 0px;
            display: block!important;
        }
        .logo {
            display: none;
        }
        .left-side {
            width: 52px;
            top: 0px;
            overflow: visible!important;
        }

        .left-side-inner {
            padding: 0;
        }
        .custom-nav {
            margin: 2px 0 20px 0;
            li a {
                text-align: center;
                padding: 10px;
                position: relative;
                span {
                    position: absolute;
                    background: #8bc34a;
                    padding: 11.7px;
                    left: 52px;
                    top: 1px;
                    min-width: 160px;
                    z-index: 100;
                    display: none;
                    font-size: 14px;
                    &:after {
                        position: absolute;
                        right: 100%;
                        top: 50%;
                        border: solid transparent;
                        content: " ";
                        height: 0;
                        width: 0;
                        pointer-events: none;
                        border-color: rgba(0,0,0,0);
                        border-right-color: #8bc34a;
                        border-width: 6px;
                        margin-top: -6px;
                    }
                }
                i {
                    margin-right: 0;
                    font-size: 1.2em;
                }
            }
            li.active a span {
                -moz-border-radius: 0;
                -webkit-border-radius: 0;
                border-radius: 0;
            }
            li.menu-list > a {
                background-image: none;
            }
            ul{
                display: none;
            }
            .menu-list.nav-active ul {
                display: none;
            }
            .menu-list.nav-hover ul {
                display: block;
            }
            li.nav-hover>a,li.nav-active.active > a {
                background: #353f4f;
                color: #8bc34a;
                span {
                    display: block;
                    color: #fff;
                }
            }
            li.nav-hover ul {
                display: block;
                position: absolute;
                top: 44px;
                left: 52px;
                margin: 0;
                min-width: 160px;
                background: #517626;
                z-index: 100;
                -moz-border-radius: 0 0 2px 0;
                -webkit-border-radius: 0 0 2px 0;
                border-radius: 0 0 2px 0;
            }
            ul a {
                text-align: left;
                padding: 6px 10px;
                padding-left: 10px;
                &:hover {
                    background: #6b9d31;
                }
            }
        }

    }
</style>
<script>
    import { mapState } from 'vuex'

    export default{
        data(){
            return{
                menus : [{name : 'Dashboard',icon: 'lnr-power-switch',url:'/Dashboard2'},{name : 'Components',icon:'lnr-cog',url:'#',children:[{name:'Grids',icon:'',url:'#'},{name : 'Widgets',icon:'',url:'#'}]},{name : 'Forms',icon:'lnr-spell-check',url:'#'},{name:'MailBox',icon:'lnr-envelope',url:'#',children:[{name:'Inbox',icon:'',url:'#'},{name:'Compose',icon:'',url:'#'}]}],
                menuClickIndex : 0,
                menuHoverIndex : -1,
                subMenuToggle : false
            }
        },
        computed : mapState({
            show : state => state.header.show
        }),
        methods : {
            menuClick : function(index){
                if(this.menuClickIndex != index){
                    this.subMenuToggle = true;
                }else{
                    this.subMenuToggle = !this.subMenuToggle
                }
                this.menuClickIndex = index

            },
            menuHover : function(index){
                this.menuHoverIndex = index
            },
            menuMouseOut : function(index){
                this.menuHoverIndex = -1
            }
        }
    }
</script>
