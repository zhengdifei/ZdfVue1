<template>
    <section :class="{'showMenu': showMenu}">
        <div class="content">
            <div class="header-section">
                <a class="toggle-btn menu-collapsed" @click="menuToggle">
                    <i class="fa fa-bars"></i>
                </a>
                <div class="header-right">
                    <div class="user-panel-top">
                        <div class="profile_details_left">
                            <ul class="nofitications-dropdown">
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                        <i class="fa fa-envelope"></i>
                                        <span class="badge">3</span>
                                    </a>
                                </li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                        <i class="fa fa-bell"></i>
                                        <span class="badge blue">3</span>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>hello world</li>
                                    </ul>
                                </li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                        <i class="fa fa-tasks"></i>
                                        <span class="badge violet">22</span>
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li>hello world</li>
                                    </ul>
                                </li>
                                <div class="clearfix"></div>
                            </ul>
                        </div>
                        <div class="profile_details">
                            <ul>
                                <li class="dropdown profile_details_drop">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                        <div class="profile_img">
                                            <span class="profile_img_details"></span>
                                            <div class="user-name">
                                                <p>Peter <i>Administrator</i></p>
                                            </div>
                                            <i class="lnr lnr-chevron-down"></i>
                                            <i class="lnr lnr-chevron-up"></i>
                                            <div class="clearfix"></div>
                                        </div>
                                    </a>
                                </li>
                                <div class="clearfix"></div>
                            </ul>
                        </div>
                        <div class="social_icons"></div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
            <div class="content-inner">
                <slot></slot>
            </div>
        </div>
    </section>
</template>
<style lang="scss">
    .content {
        margin-left: 200px;
        padding-top: 50px;
        background: #f8f8f8;
        .header-section {
            position: fixed;
            top: 0;
            left: 200px;
            width: 100%;
            z-index: 100;
            .toggle-btn {
                font-size: 15px;
                padding: 10px 0 0 ;
                width: 40px;
                height: 40px;
                margin: .4em 0 0 2em;
                text-align: center;
                float: left;
                cursor: pointer;
                color: #fff;
                background: #f44336;
                border: none;
                border-radius: 100%;
                -moz-transition: all 0.2s ease-out 0s;
                -webkit-transition: all 0.2s ease-out 0s;
                transition: all 0.2s ease-out 0s;
            }
            .header-right {
                margin:6px 15px 0px 0px;
                .user-panel-top{
                    ul {
                        padding-left: 0;
                    }
                    li {
                        float: left;
                        margin-left: 15px;
                        position: relative;
                        &:first-child {
                            margin-left: 0;
                        }
                        a {
                            display: block;
                            padding: 5px;
                            text-decoration: none;
                            i {
                                width: 24px;
                                height: 24px;
                                display: block;
                                text-align: center;
                                line-height: 25px;
                                color: #ababab;
                            }
                            span {
                                position: absolute;
                                top: -3px;
                                right: -10px;
                                padding: 2px 0px 0px;
                                font-size: 11px;
                                font-weight: bold;
                                color: #fff;
                                background: #8bc34a;
                                line-height: 15px;
                                width: 20px;
                                height: 20px;
                                border-radius: 2em;
                                -webkit-border-radius: 2em;
                                -moz-border-radius: 2em;
                                -o-border-radius: 2em;
                                text-align: center;
                                display: inline-block;
                            }
                            span.blue {
                                background: #00aced;
                            }
                            span.violet {
                                background: #9358ac;
                            }
                        }
                    }
                }
                .profile_details_left {
                    float: left;
                    margin: .3em 0 0 1em;;
                }
                .nofitications-dropdown {
                    margin-top: 2px;
                    li {
                        display: inline-block;
                    }
                }
                .profile_details {
                    display: none;
                    float: right;
                    margin:0 4.8em 0 1em;
                    ul li {
                        list-style-type: none;
                        width: 87%;
                    }
                    .profile_details_drop a {
                        padding: 0 5px 5px !important;
                    }
                    .profile_img span {
                        float: left;
                        display: block;
                        width: 40px;
                        height: 40px;
                        border-radius: 3em;
                        -webkit-border-radius: 3em;
                        -moz-border-radius: 3em;
                        -o-border-radius: 3em;
                        -webkit-background-size: cover;
                        -moz-background-size: cover;
                        -o-background-size: cover;
                        background-size: cover;
                    }
                    .profile_img_details {
                        background: url(images/1.jpg) no-repeat center;
                    }
                    .user-name {
                        float: left;
                        margin-top: 8px;
                        margin-left: 5px;
                        height: 35px;
                        width: 45%;
                        p {
                            font-size: 14px;
                            color: #f44336;
                            line-height: 1em;
                            font-weight: 700;
                            i {
                                font-size: 10px;
                                font-style: italic;
                                color: #424f63;
                                font-weight: normal;
                            }
                        }
                    }
                }
            }
        }
        .content-inner {
            width: 100%;
            margin: 10px 20px 10px 0px;
            background-color: #fff;
        }
    }
    .showMenu {
        .content {
            margin-left: 52px;
        }
        .header-section {
            left: 52px;
            margin-left: 0px;
        }
    }

    ul.dropdown-menu {
        padding: 0;
        min-width: 250px;
        top: 108%;
        -moz-animation: fadeInDown .3s ease-in;
        -webkit-animation: fadeInDown .3s ease-in;
        animation: fadeInDown .3s ease-in;

    }
</style>
<script>
    import { mapState,mapMutations } from 'vuex'
    import { MENU_COLLAPSE } from 'store/types'

    export default{
        computed : mapState({
            showMenu : state => state.header.show
        }),
        methods : {
            menuToggle (){
                this.$store.commit(MENU_COLLAPSE)
            }
        }
    }
</script>
