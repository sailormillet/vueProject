<template>
<div class="mi-masker mi-masker_grey">
    <div class="mi-toast mi-toast_bottom" >
         <slot>
        <div class="mi-toast_content " :toastStyle="styleObj">{{message}}</div>
         </slot>
    </div>
</div>

</template>
<style lang="less">
.mi-masker{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
}
.mi-masker_grey{
    background: rgba(0,0,0,0.6)
}
.mi-toast {
    position: fixed;
    top: 180px;
    z-index: 101;
    text-align: center;
    width: 100%;
}
.mi-toast_top{
    top:56px
} 
.mi-toast_middle{
    top:50%
}  
.mi-toast_bottom{
    top: 80%;
} 
.mi-toast_content{
    background: #000;
    opacity: 0.75;
    color: #fff;
    padding: 10px 15px;
    display: inline-block;
    border-radius: 4px;
    font-size: 16px;
    text-align: center;
    max-width: 50%;
}  
</style>
<script>
    export default{
        // created () {
         
        // },
        // data(){
        //     return {
        //       message: '1234'
        //     }
        // },
          props: {
                message: String,
                styleObj: Object
        },
        // methods: {

        // },
        //  watch: {

        // }
    }
</script>
