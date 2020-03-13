<template>
    <div id="app">
        <!--    <img alt="Vue logo" src="./assets/logo.png">-->
        <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
        <router-view></router-view>
    </div>
</template>

<script>
    import MainIndex from './components/MainIndex.vue'

    export default {
        name: 'App',
        components: {
            // eslint-disable-next-line vue/no-unused-components
            MainIndex
        }
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
        height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }

    body {
        margin: 0;
        padding: 0;
        border: 0;
    }
</style>
