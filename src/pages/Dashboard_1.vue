<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <h1 class="page-head-line">DashBoard</h1>
                <h1 class="page-subhead-line">This is dummy text , you can replace it with your original text.</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <div class="main-box mb-red">
                    <a href="#">
                        <i class="fa fa-bolt fa-5x"></i>
                        <h5>Zero Issues</h5>
                    </a>
                </div>
            </div>
            <div class="col-md-4">
                <div class="main-box mb-dull">
                    <a href="#">
                        <i class="fa fa-plug fa-5x"></i>
                        <h5>Zero Issues</h5>
                    </a>
                </div>
            </div>
            <div class="col-md-4">
                <div class="main-box mb-pink">
                    <a href="#">
                        <i class="fa fa-dollar fa-5x"></i>
                        <h5>Zero Issues</h5>
                    </a>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="table-responsive">
                    <table class="table table-triped table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>No.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td><span class="label label-danger">Mark</span></td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><span class="label label-info">100090</span></td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>100090</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td><span class="label label-danger">the Bird</span> </td>
                                <td>@twitter</td>
                                <td>100090</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td><span class="label label-success">Mark</span></td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td><span class="label label-info">100090</span></td>
                            </tr>

                            <tr>
                                <td>5</td>
                                <td>Larry</td>
                                <td><span class="label label-primary">the Bird</span></td>
                                <td>@twitter</td>
                                <td>100090</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td><span class="label label-warning">Jacob</span></td>
                                <td><span class="label label-success">Thornton</span></td>
                                <td>@fat</td>
                                <td><span class="label label-danger">100090</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="col-md-4">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <i class="fa fa-bell fa-fw"></i>
                        Notifications Panel
                    </div>
                    <div class="panel-body">
                        <div class="list-group">
                            <a href="#" class="list-group-item">
                                <i class="fa fa-twitter fa-fw"></i>3 New Followers
                                    <span class="pull-right text-muted small"><em>12 minutes ago</em>
                                    </span>
                            </a>
                            <a href="#" class="list-group-item">
                                <i class="fa fa-envelope fa-fw"></i>Message Sent
                                    <span class="pull-right text-muted small"><em>27 minutes ago</em>
                                    </span>
                            </a>
                            <a href="#" class="list-group-item">
                                <i class="fa fa-tasks fa-fw"></i>New Task
                                    <span class="pull-right text-muted small"><em>43 minutes ago</em>
                                    </span>
                            </a>
                            <a href="#" class="list-group-item">
                                <i class="fa fa-upload fa-fw"></i>Server Rebooted
                                    <span class="pull-right text-muted small"><em>11:32 AM</em>
                                    </span>
                            </a>
                            <a href="#" class="list-group-item">
                                <i class="fa fa-bolt fa-fw"></i>Server Crashed!
                                    <span class="pull-right text-muted small"><em>11:13 AM</em>
                                    </span>
                            </a>
                        </div>
                        <a href="#" class="btn btn-info btn-block">view all</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .page-head-line {
        font-size: 30px;
        text-transform: uppercase;
        color: #000;
        font-weight: 800;
        padding-bottom: 20px;
        border-bottom: 2px solid #00ca79;
        margin-bottom: 10px;
    }
    .page-subhead-line {
        font-size: 14px;
        padding-top: 5px;
        padding-bottom: 20px;
        font-style: italic;
        margin-bottom: 30px;
        border-bottom: 1px dashed #00ca79;
    }

    .mb-red {
        background-color: #d36f2e;
    }
    .mb-dull {
        background-color: #8f8f2c;
    }
    .mb-pink {
        background-color: #ff2f71;
    }
    .main-box {
        text-align: center;
        padding: 20px;
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        margin-bottom: 40px;
        a {
            color: #fff;
            text-decoration: none;
        }
        h5 {
            font-size: 16px;
            font-weight: 800;
            text-transform: uppercase;
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                msg:'hello vue'
            }
        }
    }
</script>
