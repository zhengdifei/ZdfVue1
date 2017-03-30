<template>
    <div class="dashboard">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h4 class="header-line">DASHBOARD</h4>
                </div>
            </div>
            <div class="row global_msg">
                <div class="col-md-2 col-sm-2 col-xs-6 text-center">
                    <div>
                        <i class="fa fa-bus fa-5x"></i>
                        <h5>30 stocks pending</h5>
                    </div>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-6 text-center">
                    <div>
                        <i class="fa fa-paint-brush fa-5x"></i>
                        <h5>30 stocks pending</h5>
                    </div>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-6 text-center">
                    <div>
                        <i class="fa fa-paypal fa-5x"></i>
                        <h5>30 stocks pending</h5>
                    </div>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-6 text-center">
                    <div>
                        <i class="fa fa-birthday-cake fa-5x"></i>
                        <h5>30 stocks pending</h5>
                    </div>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-6 text-center">
                    <div>
                        <i class="fa fa-bolt fa-5x"></i>
                        <h5>30 stocks pending</h5>
                    </div>
                </div>
                <div class="col-md-2 col-sm-2 col-xs-6 text-center">
                    <div>
                        <i class="fa fa-comments fa-5x"></i>
                        <h5>30 stocks pending</h5>
                    </div>
                </div>
            </div>
            <hr>
            <br>
            <br>
            <div class="row text-center">
                <div class="col-md-4 col-sm-4 col-xs-6">
                    <div class="alert alert-info">
                        <h4>Important Notice</h4>
                        <hr>
                        <i class="fa fa-warning fa-4x"></i>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn.
                        </p>
                        <hr>
                        <a class="btn btn-info">Read Full Details</a>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-6">
                    <div class="alert alert-danger">
                        <h4>Important Notice</h4>
                        <hr>
                        <i class="fa fa-bolt fa-4x"></i>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn.
                        </p>
                        <hr>
                        <a class="btn btn-danger">Read Full Details</a>
                    </div>
                </div>
                <div class="col-md-4 col-sm-4 col-xs-6">
                    <div class="alert alert-success">
                        <h4>Important Notice</h4>
                        <hr>
                        <i class="fa fa-warning fa-4x"></i>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit gthn.
                        </p>
                        <hr>
                        <a class="btn btn-success">Read Full Details</a>
                    </div>
                </div>
            </div>
            <hr>
            <br>
            <br>
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <ul class="media-list">
                        <li class="media">
                            <a class="pull-left">
                                <img class="img-circle" src="images/user2.png">
                            </a>
                            <div>
                                <h4>Vestibulum et eros consectetur</h4>
                                <p>Donec sit amet ligula enim. Duis vel condimentum massa. Maecenas eget congue dui. Vestibulum et eros consectetur, interdum nibh et, volutpat dolor.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .header-line {
        font-weight: 900;
        padding-bottom: 25px;
        padding-top: 30px;
        border-bottom: 1px solid #eeeeee;
    }
    .global_msg {
        padding-bottom: 40px;
    }
    .text-center {
        text-align: center;
    }
    .media-list {
        list-style: none;
        padding-left: 0;
        .img-circle {
            border-radius: 50%;
        }
    }
</style>
<script>
    /*
        time : 2017-3-9
        author : zhengdifei
        desc : 首页
    */

    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
