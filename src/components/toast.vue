<template>
    <div>
         <button @click="showPosition('top')">top toast</button>
         <toast   v-model='showPositionValue' message='hello world top' :position='position' is-show-mask></toast>
         <button @click="showPosition('middle')">middle toast</button>
         <toast   v-model='showPositionValue' message='hello world middle' :position='position' is-show-mask></toast>
            <button @click="showPosition('bottom')">bottom toast</button>
         <toast   v-model='showPositionValue' message='hello world bottom' :position='position' is-show-mask></toast>
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
                     

            },
            onHide(){
                console.log('on hide')

            },
            onShow(){
                console.log('on show')
            }
        }
//        components:{
            
//        }
    }
</script>
