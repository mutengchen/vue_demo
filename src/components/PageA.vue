<template>
    <div>PageA{{refreshMessage}}</div>
</template>

<script>
    export default {
        name: "PageA",
        data() {
            return{
                message:"this.message",
            }
        },
        created(){

        },
        mounted(){

        },
        //属性变化的时候，进行复杂表达式的运算。不在模板里面处理，代码清晰
        computed: {
            refreshMessage: function() {
                return this.message.split('.')[0]
            }
        }
    }
</script>

<style scoped>

</style>