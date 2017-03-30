<template xmlns:v-bind="http://www.w3.org/1999/xhtml">
    <section>
        <nav class="navbar navbar-default navbar-cls-top" role="navigation">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse"></button>
                <a class="navbar-brand" href="#">COMPANY NAME</a>
            </div>
            <div class="navbar-right">
                <a href="#" class="btn btn-info">
                    <b>30</b>
                    <i class="fa fa-envelope-o fa-2x"></i>
                </a>
                <a href="#" class="btn btn-primary">
                    <b>40</b>
                    <i class="fa fa-bars fa-2x"></i>
                </a>
                <a href="#" class="btn btn-danger">
                    <i class="fa fa-exclamation-circle fa-2x"></i>
                </a>
            </div>
        </nav>
        <nav class="navbar-default navbar-side" role="navigation">
            <div class="sidebar-collapse">
                <ul class="nav" id="main-menu">
                    <li>
                        <div class="user-img">
                            <img src="images/user.gif" class="img-thumbnail">
                            <div class="inner-text">
                                "zheng difei"<br>
                                <small>Last Login : 2 weeks ago</small>
                            </div>
                        </div>
                    </li>
                    <li>
                        <a class="active-menu" href="/#/dashboard1">
                            <i class="fa fa-dashboard"></i>
                            Dashboard
                        </a>
                    </li>
                    <li>
                       <a href="#">
                           <i class="fa fa-desktop"></i>
                           UI Element
                           <span class="fa arrow"></span>
                       </a>
                        <ul class="nav nav-second-level collapse">
                            <li>
                                <a href="#">
                                    <i class="fa fa-toggle-on"></i>
                                    Tab
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-yelp"></i>
                            Extra
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="fa fa-flash"></i>
                            Data Table
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </section>
</template>
<style lang="scss">
    .navbar-default {
        margin-bottom: 0px;
        border: 0px solid #000;
    }
    .navbar-cls-top{
        background: #00CA79;
        .navbar-brand {
            color: #fff;
            background: #202020;
            width: 260px;
            text-align: center;
            height: 75px;
            font-size: 20px;
            letter-spacing: 1px;
            font-weight: 900;
            padding-top: 25px;
            text-transform: uppercase;
        }
    }
    .navbar-header {
        background: #000;
    }
    .navbar-right {
        color: #fff;
        padding: 15px 50px;
        float: right;
        font-size: 16px;
    }

    .navbar-side {
        z-index: 1;
        position: absolute;
        width: 260px;
        height: 100%;
        background-color: #202020;
    }
    .user-img {
        min-height: 140px;
        padding: 20px;
        background-color: #4380B8;
        img {
            max-height: 60px;
        }
        .img-thumbnail {
            display: inline-block;
            max-width: 100%;
            height: auto;
            padding: 4px;
            line-height: 1.42;
            background-color: #fff;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        .inner-text {
            text-align: right;
            position: relative;
            color: #fff;
            font-weight: 700;
            line-height: 25px;
        }
    }

    .sidebar-collapse {
        .nav > li > a {
            padding: 15px 10px;
            color: #fff;
            background: #202020;
            text-shadow: none;
            border-bottom: 1px solid #2f2e31;
            i {
                margin-right: 10px;
            }
        }
    }

    .active-menu {
        background-color: #00ca79!important;
    }
    .arrow {
        float:  right;
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

            }
        }
    }
</script>
