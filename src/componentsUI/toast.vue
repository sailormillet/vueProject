<template>
    <div class="mi-toast">
    <masker :class="maskerClass" v-show="isShowMask && show"> </masker>
    <transition name="currentTransition" >  
    <div class="miui-tost" v-show="show" :class="toastClass">
         <slot>
          <div class="miui-tost_content" >
               <i class="miui-toast-check"></i>
              {{message}}
              </div>
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
.miui-toast-check{
    width: 50px;
    height: 50px;
    display: block;
    background: url(../img/right.png)no-repeat;
    background-size: cover;
    margin: auto;
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
                time: {
                    type: Number,
                    default: 2000
                },
                position:String,
                isShowMask: {
                    type: Boolean,
                    default: false
                },
                isShowIcon:{
                    type: Boolean,
                    default: false
                }

        },
        computed:{
            toastClass(){
                return {
                    'miui-tost_top': this.position === 'top',
                    'miui-tost_middle': this.position === 'middle',
                    'miui-tost_bottom': this.position === 'bottom',
                    

                }

            }

        },
        // methods: {

        // },
        watch: {
            show (val) {
                if(val){
                    this.$emit('on-show')
                    this.$emit('input', true)
                    clearTimeout( this.timeout)
                    this.timeout = setTimeout(()=>{
                        this.show=false
                        this.$emit('input', false)
                        this.$emit('on-hide')

                    },this.time)
                }
               
                // console.log(this.$emit)
            },
            value (val) {
            this.show=val
            }
        }
    }
</script>
