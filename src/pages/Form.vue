<template>
    <div class="container ui">
        <div class="row">
            <div class="col-md-12">
                <h4 class="header-line">Form Pages</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        Basic Form
                    </div>
                    <div class="panel-body">
                        <form role="form">
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" />
                                <p class="help-block">Help text here.</p>
                            </div>
                            <div class="form-group has-success">
                                <label>Success</label>
                                <input type="text" class="form-control" />
                                <p class="help-block">Help text here.</p>
                            </div>
                            <div class="form-group has-error">
                                <label>Error</label>
                                <input type="text" class="form-control" />
                                <p class="help-block">Help text here.</p>
                            </div>
                        </form>
                    </div>
                    <div class="panel-footer">
                        <button class="btn btn-info">submit</button>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="panel panel-warning">
                    <div class="panel-heading">
                        Select Form
                    </div>
                    <div class="panel-body">
                        <form role="form">
                            <div class="form-group">
                                <label>Select one</label>
                                <select class="form-control">
                                    <option>one value</option>
                                    <option>two value</option>
                                    <option>three value</option>
                                    <option>four value</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Select one</label>
                                <select multiple="" class="form-control">
                                    <option>one value</option>
                                    <option>two value</option>
                                    <option>three value</option>
                                    <option>four value</option>
                                </select>
                            </div>
                            <div class="form-group has-error">
                                <label>checkbox</label>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" value=""/>checkbox one
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" value=""/>checkbox two
                                    </label>
                                </div>
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" value=""/>checkbox three
                                    </label>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="panel-footer">
                        <button class="btn btn-warning">submit</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        Select Form
                    </div>
                    <div class="panel-body">
                        <form role="form">
                            <div class="input-group">
                                <span class="form-group input-group-btn">
                                    <button class="btn btn-default">Go!</button>
                                </span>
                                <input type="text" class="form-control" />
                            </div>

                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" disabled=""/>
                                <p class="help-block">Help text here.</p>
                            </div>
                        </form>
                    </div>
                    <div class="panel-footer">
                        <button class="btn btn-default">submit</button>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="panel panel-success">
                    <div class="panel-heading">
                        Select Form
                    </div>
                    <div class="panel-body">
                        <form role="form">

                            <div class="input-group">
                                <input type="text" class="form-control" />
                                <span class="form-group input-group-btn">
                                    <button class="btn btn-default">Go!</button>
                                </span>
                            </div>
                            <div class="form-group">
                                <label>Name</label>
                                <input type="text" class="form-control" disabled=""/>
                                <p class="help-block">Help text here.</p>
                            </div>
                        </form>
                    </div>
                    <div class="panel-footer">
                        <button class="btn btn-success btn-lg" data-toggle="modal" data-target="#myModal">click launch Modal</button>
                        <div id="myModal" class="modal fade" tabindex="-1" role="dialog" area-labelledby="myModal" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                                        <h4 class="modal-title" id="myModalLabel">title here</h4>
                                    </div>
                                    <div class="modal-body">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-primary" data-dismiss="modal">close</button>
                                    </div>
                                </div>
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
