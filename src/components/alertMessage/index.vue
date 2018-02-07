<template>
    <div>
        <!--<header-component/>-->
        <div>this is template body</div>
        <div>{{msg}}</div>
        <masker>
         <toast message='hello world hello world hello world' ></toast>
        </masker>
       
        <!--<other-component/>-->
    </div>
</template>
<style lang='less'>
    body{
        background-color:#fff;
    }
</style>
<script>
//    import HeaderComponent from './components/header.vue'
//    import OtherComponent from './components/other.vue'
    export default{
    //   name: 'alertMessage',
        data(){
            return{
                msg:'hello vue'
            }
        },
//        components:{
//            'other-component':OtherComponent,
//            HeaderComponent,
//        }
    }
</script>
