<template>
    <div>
         <button @click="showPosition('top')">hello</button>
         <toast   v-model='showPositionValue' message='hello world hello world hello world' :position='position' is-show-mask></toast>
    </div>
</template>
<style lang='less'>
    button{
        background-color:rgb(202, 23, 23);
        color:#fff;
        border: 0px;
        padding: 10px 30px;
        width: 100%;
        display: block;
        margin: 30px 0;
    }
</style>
<script>
    export default{
        data(){
            return{
                showPositionValue: false,
                position: 'default',
            }
            
        },
        methods:{
            showPosition(position){
                this.position=position
                this.showPositionValue=true
                // console.log(this.showPositionValue)
                //      console.log(this.position)
                     console.log(this)
                     

            }
        }
//        components:{
            
//        }
    }
</script>
