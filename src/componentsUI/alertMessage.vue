<template>
    <mi-alert>
         <slot>
        <div>{{message}}</div>
         </slot>
    </mi-alert>
</template>
<style>
    body {
        background-color: #ff0000;
    }
</style>
<script>
    export default{
        created () {
         
        },
        data(){
            return {
                msg: 'hello vue'
            }
        },
          props: {
                message: String,
        },
        methods: {

        },
         watch: {

        }
    }
</script>
