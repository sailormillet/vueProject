<template>
 <div :class="maskerClass" class="miui-masker">
         <slot>
         </slot>
 </div>

</template>
<style lang="less">
.miui-masker{
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 100;
}
.miui-masker_grey{
    background: rgba(0,0,0,0.6)
}
</style>
<script>
    export default{
         name: 'masker',
        // created () {
         
        // },
        data(){
            return {
            //   show: false
            }
        },
          props: {
                message: String,
                maskerClass: {
                    type: String,
                    default:'miui-masker'
                },
        },
        // methods: {

        // },
        //  watch: {

        // }
    }
</script>
