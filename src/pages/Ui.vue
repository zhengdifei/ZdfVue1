<template>
    <div class="container ui">
        <div class="row">
            <div class="col-md-12">
                <h4 class="header-line">UI Elements</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-md-7">
                <div class="panel panel-default">
                    <div class="panel-heading">Simple Buttons Examples</div>
                    <div class="panel-body">
                        <h4>Default Button</h4>
                        <a href="#" class="btn btn-default">default</a>
                        <a href="#" class="btn btn-primary">primary</a>
                        <a href="#" class="btn btn-danger">danger</a>
                        <a href="#" class="btn btn-success">success</a>
                        <a href="#" class="btn btn-info">info</a>
                        <a href="#" class="btn btn-warning">warning</a>


                        <h4>Mini Button</h4>
                        <a href="#" class="btn btn-default btn-xs">default</a>
                        <a href="#" class="btn btn-primary btn-xs">primary</a>
                        <a href="#" class="btn btn-danger btn-xs">danger</a>
                        <a href="#" class="btn btn-success btn-xs">success</a>
                        <a href="#" class="btn btn-info btn-xs">info</a>
                        <a href="#" class="btn btn-warning btn-xs">warning</a>


                        <h4>Small Button</h4>
                        <a href="#" class="btn btn-default btn-sm">default</a>
                        <a href="#" class="btn btn-primary btn-sm">primary</a>
                        <a href="#" class="btn btn-danger btn-sm">danger</a>
                        <a href="#" class="btn btn-success btn-sm">success</a>
                        <a href="#" class="btn btn-info btn-sm">info</a>
                        <a href="#" class="btn btn-warning btn-sm">warning</a>


                        <h4>Large Button</h4>

                        <a href="#" class="btn btn-default btn-lg">default</a>
                        <a href="#" class="btn btn-primary btn-lg">primary</a>
                        <a href="#" class="btn btn-danger btn-lg">danger</a>
                        <a href="#" class="btn btn-success btn-lg">success</a>
                        <a href="#" class="btn btn-info btn-lg">info</a>

                    </div>
                </div>
            </div>
            <div class="col-md-5">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Button Dropdowns
                    </div>
                    <div class="panel-body">
                        <h4>Simple Button Dropdown Examples</h4>
                        <div>
                            <div class="btn-group">
                                <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle" aria-expanded="false">Action<span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Action1</a></li>
                                    <li><a href="#">Action2</a></li>
                                    <li><a href="#">Action3</a></li>
                                </ul>
                            </div>
                        </div>
                        <h4>Split Button Dropdown Examples</h4>
                        <div>
                            <div class="btn-group">
                                <button class="btn btn-primary">Action</button>
                                <button data-toggle="dropdown" class="btn btn-primary dropdown-toggle" aria-expanded="false"><span class="caret"></span></button>
                                <ul class="dropdown-menu">
                                    <li><a href="#">Action1</a></li>
                                    <li><a href="#">Action2</a></li>
                                    <li><a href="#">Action3</a></li>
                                </ul>
                            </div>
                        </div>
                        <h4>Buttons With Icons</h4>
                        <button class="btn btn-primary">
                            <i class="fa fa-edit"></i>
                            Action
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">Simple Progress Bars</div>
                    <div class="panel-body">
                        <div class="progress">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%;">
                                <span class="sr-only">40% Complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">Simple Progress Bars</div>
                    <div class="panel-body">
                        <div class="progress progress-striped">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%;">
                                <span class="sr-only">40% Complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">Simple Progress Bars</div>
                    <div class="panel-body">
                        <div class="progress progress-striped active">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%;">
                                <span class="sr-only">40% Complete</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="panel panel-default">
                    <div class="panel-heading">Simple Progress Bars</div>
                    <div class="panel-body">
                        <div class="progress progress-striped active">
                            <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:40%;">
                                <span class="sr-only">40% Complete</span>
                            </div>
                            <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:20%;">
                                <span class="sr-only">40% Complete</span>
                            </div>
                            <div class="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:10%;">
                                <span class="sr-only">40% Complete</span>
                            </div>
                        </div>
                    </div>
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
