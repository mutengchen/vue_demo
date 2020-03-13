<template>
    <div >
        <div class="top">
            <div class="item-avatar"></div>
            <div class="search_container">
                <input type="text" autocomplete="nope" class="search_input" placeholder="请输入数据">
                <a href="javascript:void(0)" class="search_icon"></a>
            </div>
        </div>
        <div>
            <p v-on:click="mClick">{{itemPwd}}</p>
        </div>
        <div class="container">
            <p>hahahh</p>
        </div>
<!--        <div>-->
<!--            <div>{{profile["wynnID"]}}</div>-->
<!--            <div>{{profile["chineseName"]}}</div>-->
<!--            <div>{{profile["birthday"]}}</div>-->
<!--            <div>{{profile["name"]}}</div>-->
<!--            <div v-for="item in itemList" :key="item.id">-->
<!--                <p>索引值：{{item["itemPwd"]}} &#45;&#45; 每一项:{{item["itemName"]}}</p>-->
<!--                <div>-->
<!--                    <button @click="gotoPage(1)">go to page A</button>-->
<!--                    <button @click="gotoPage(2)">go to page B</button>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

    </div>

</template>

<script>
    import '../css/main.css'
    // import {getListData} from '../js/data_api'
    export default {
        name: "MainIndex",
        data() {
            return {
                itemName: "click me",
                itemPwd: "click me",
                itemList: [],
                profile: ""
            }
        },
        computed: {},
        created: function () {
            console.log("created")
        },
        mounted() {
            console.log("mounted")
            this.getList()
        },
        updated() {
            console.log("updated")
        },
        destroyed() {
            console.log("destroyed")
        },
        methods: {
            mClick() {
                this.itemName = "click it"
                this.itemPwd = "click it too"
            },
            gotoPage(type) {
                console.log(type)
                switch (type) {
                    case 1:
                        this.$router.replace('/PageA')
                        break;
                    case 2:
                        this.$router.replace('/PageB')
                        break

                }
            },
            getList() {
                // let data ={"aa":"123"}
                // getListData(data,success,failed);
                // var that = this;
                // function success(res) {
                //     console.log(res["data"])
                //     that.profile = res["data"]
                // }
                // function failed(err) {
                //     console.log("error"+err)
                // }
                // var itemStr = "[{\"itemName\":\"name1\",\"itemPwd\":\"pwd1\"},{\"itemName\":\"name2\",\"itemPwd\":\"pwd2\"},{\"itemName\":\"name3\",\"itemPwd\":\"pwd3\"},{\"itemName\":\"name4\",\"itemPwd\":\"pwd4\"}]";
                // this.itemList = JSON.parse(itemStr)

            }
        }
    }
</script>

<style scoped>

</style>