<template>
    <div>
        <p>Toast提示:默认时间是2秒</p>
         <button @click="showPosition('top')">top toast</button>
         <button @click="showPosition('middle')">middle toast</button>
         <button @click="showPosition('bottom')">bottom toast</button>
         <toast   v-model='showPositionValue' message='hello world ' :position='position' is-show-mask masker-class="mi-masker_grey" :time='5000'></toast>
         <hr>
         <!-- <button @click.native="$emit.toast.text('How are you~', 'top')" >lodding</button> -->
         <!-- <toast   v-model='showPositionValue' message='hello world hello world hello worldhello world ' :position='position' is-show-mask  :time='1000'></toast> -->
         <!-- <toast  message='loading' :position='position' is-show-mask  :time='1000'></toast> -->
       
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
        created(){
            console.log(this.$data)
             console.log(this.$props)
             console.log(this.$el)
             console.log(this)
             

        },
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
