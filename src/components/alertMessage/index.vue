<template>
    <div>
        <!--<header-component/>-->
        <div>this is template body</div>
        <div>{{msg}}</div>
        <!--<other-component/>-->
    </div>
</template>
<style>
    body{
        background-color:#fff;
    }
</style>
<script>
//    import HeaderComponent from './components/header.vue'
//    import OtherComponent from './components/other.vue'
    export default{
      name: 'helloworld',
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
