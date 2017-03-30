<template>
    <section class="content">
        <div class="content-inner">
            <slot></slot>
        </div>
    </section>
</template>
<style lang="scss">
.content {
    margin: 0 0 0 260px;
    padding: 15px 50px;
    .content-inner {
        width: 100%;
        margin: 10px 20px 10px 0px;
        background-color: #fff;
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
