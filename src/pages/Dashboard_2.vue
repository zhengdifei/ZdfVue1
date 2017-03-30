<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="widget">
                    <i class="fa fa-mail-forward green"></i>
                    <div class="stats">
                        <h5>45%</h5>
                        <div class="grow bg-green">
                            <p>growth</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="widget">
                    <i class="fa fa-users blue"></i>
                    <div class="stats">
                        <h5>50%</h5>
                        <div class="grow bg-blue">
                            <p>New Users</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="widget">
                    <i class="fa fa-eye red"></i>
                    <div class="stats">
                        <h5>70%</h5>
                        <div class="grow bg-red">
                            <p>Vistors</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3">
                <div class="widget">
                    <i class="fa fa-usd yellow"></i>
                    <div class="stats">
                        <h5>70%</h5>
                        <div class="grow bg-yellow">
                            <p>Profit</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
    .widget{
        $blue :  #8bc34a;
        $green :  #00bcd4;
        $red :  #f44336;
        $yellow :  #ffca28;
        text-align: center;
        ms-box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2);
        -o-box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2);
        -moz-box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2);
        -webkit-box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2);
        box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.2);
        .fa {
            margin-right: 0px;
            width: 66px;
            height: 130px;
            text-align: center;
            line-height: 105px;
            font-size: 3.5em;
        }
        .blue {
            color: $blue
        }
        .green {
            color: $green;
        }
        .red {
            color: $red;
        }
        .yellow {
            color: $yellow;
        }
        .stats {
            overflow: hidden;
            border-top: 1px solid #ddd;
            padding: 1.5em;
            h5 {
                margin: 10px 0;
                color: #575757;
                font-size: 2.5em;
            }
            .grow {
                position: absolute;
                top: 47%;
                left: 35%;
                background: #8bc34a;
                width: 95px;
                height: 30px;
                padding: .4em 0 0;
                p {
                    color: #fff;
                    margin: 0;
                    font-size: 11px;
                    text-transform: uppercase;
                }
            }
            .bg-blue {
                background: $blue
            }
            .bg-green {
                background: $green;
            }
            .bg-red {
                background: $red;
            }
            .bg-yellow {
                background: $yellow;
            }
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
