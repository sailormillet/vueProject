<template>
    <div class="mi-toast">
    <masker :maskerClass="maskerClass" v-show="isShowMask && show"> </masker>
    <transition name="currentTransition" >  
    <div class="miui-tost" v-show="show">
         <slot>
        <div class="miui-tost_content" :class="toastClass">{{message}}</div>
         </slot>
    </div>
    </transition>
    </div>
</template>
<style lang="less">
.miui-tost {
    position: fixed;
    top: 180px;
    z-index: 101;
    text-align: center;
    width: 100%;
}
.miui-tost_top{
    top:56px
} 
.miui-tost_middle{
    top:50%
}  
.miui-tost_bottom{
    top: 80%;
} 
.miui-tost_content{
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
<script>
    import masker from './masker'
    export default{
        name: 'toast',
        created () {
            // console.log(this.value)
            // console.log(this.show)
         if (this.value) {
            this.show = true
          }
        },
        data(){
            return {
              show: false,
            }
        },
        components: {
            masker
        },
          props: {
                value: Boolean,
                message: String,
                maskerClass:{
                    type: String,
                },
                toastClass: {
                    type: String,
                    default: 'miui-tost_content'
                },
                position:String,
                isShowMask: {
                    type: Boolean,
                    default: false
                },

        },
        computed:{

        },
        // methods: {

        // },
        watch: {
            show (val) {
            console.log(val)
            },
            value (val) {
            console.log(val)
            }
        }
    }
</script>
