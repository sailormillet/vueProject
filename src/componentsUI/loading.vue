<template>
<transition>
    <div>
    <masker :class="maskerClass" > </masker>
    <div class="miui-loading">
        <i class="miui-loading_icon"></i>
         
          {{text}}
    </div>
    </div>


</transition>    
</template>
<style lang="less">
.miui-loading{
        background: rgba(0,0,0,0.8);
    width: 80px;
    text-align: center;
    border-radius: 4px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -112px -50px;
    color: #fff;
    padding: 10px;
    font-size: 16px;
        z-index: 101;
}
 .miui-loading_icon{
     width: 50px;
     height: 50px;
     background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=)no-repeat;
     background-size: contain;
     display: block;
     margin: 10px auto;
     animation: miuiloading 1s steps(12,end) infinite;
    -moz-animation: miuiloading 1s steps(12,end) infinite;	/* Firefox */
    -webkit-animation: miuiloading 1s steps(12,end) infinite;	/* Safari 和 Chrome */
    -o-animation: miuiloading 1s steps(12,end) infinite;	/* Opera */
 }
 @keyframes miuiloading
{
0% {
    transform: rotate3d(0,0,1,0deg);
    -webkit-transform: rotate3d(0,0,1,0deg);	/* Safari 和 Chrome */
    -moz-transform: rotate3d(0,0,1,0deg);
    
}
100% {
    transform: rotate3d(0,0,1,360deg);
    -webkit-transform: rotate3d(0,0,1,360deg);	/* Safari 和 Chrome */
    -moz-transform: rotate3d(0,0,1,360deg);
}
}

@-moz-keyframes miuiloading /* Firefox */
{
0% {
    transform: rotate3d(0,0,1,0deg);
    -webkit-transform: rotate3d(0,0,1,0deg);	/* Safari 和 Chrome */
    -moz-transform: rotate3d(0,0,1,0deg);
    
}
100% {
    transform: rotate3d(0,0,1,360deg);
    -webkit-transform: rotate3d(0,0,1,360deg);	/* Safari 和 Chrome */
    -moz-transform: rotate3d(0,0,1,360deg);
}
}

@-webkit-keyframes miuiloading /* Safari 和 Chrome */
{
0% {
    transform: rotate3d(0,0,1,0deg);
    -webkit-transform: rotate3d(0,0,1,0deg);	/* Safari 和 Chrome */
    -moz-transform: rotate3d(0,0,1,0deg);
    
}
100% {
    transform: rotate3d(0,0,1,360deg);
    -webkit-transform: rotate3d(0,0,1,360deg);	/* Safari 和 Chrome */
    -moz-transform: rotate3d(0,0,1,360deg);
}
}

@-o-keyframes miuiloading /* Opera */
{
0% {
    transform: rotate3d(0,0,1,0deg);
    -webkit-transform: rotate3d(0,0,1,0deg);	/* Safari 和 Chrome */
    -moz-transform: rotate3d(0,0,1,0deg);
    
}
100% {
    transform: rotate3d(0,0,1,360deg);
    -webkit-transform: rotate3d(0,0,1,360deg);	/* Safari 和 Chrome */
    -moz-transform: rotate3d(0,0,1,360deg);
}
}
</style>

<script>
import masker from './masker'
export default {
    data(){
        return{
            text:'加载中'
        }
    },
    components: {
            masker
    },
    props:{
        maskerClass:{
            type: String,
        },
        // text:{
        //     type: String,
        //     default:加载中
        // },
    }
  
}
</script>

