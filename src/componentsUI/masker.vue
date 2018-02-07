<template>
 <div class="mi-masker">
         <slot>
         </slot>
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
        },
        // methods: {

        // },
        //  watch: {

        // }
    }
</script>
