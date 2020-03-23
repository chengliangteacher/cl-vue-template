<template>
    <div class="v1-layout">
        <div class="d-flex">
            <v1-menu :is-collapse="isCollapse"></v1-menu>
            <div class="v1-layout-content">
                <v1-header @handleIscollapse="handleIscollapse" :is-collapse="isCollapse"></v1-header>
                <v1-tab-nav></v1-tab-nav>
                <el-scrollbar class="v1-content">
                   <transition name="fade" mode="out-in" appea>
                        <router-view></router-view>
                   </transition> 
                </el-scrollbar>
            </div>
        </div>
    </div>
</template>

<script>
import header from "./header"
import menu from "./menu"
import tabNav from "./tab-nav"
export default {
    components: {
        "v1-header": header,
        "v1-menu": menu,
        "v1-tab-nav": tabNav
    },
    data() {
        return {
            isCollapse: false,
        };
    },
    created() {

    },
    mounted() {},
    methods: {
        //=====================================折叠====================================//
        handleIscollapse(val) {
            this.isCollapse = val;
        }
    }
};
</script>



<style lang="scss">
    .v1-layout-content{
        flex: 1;
    }
    .v1-content{
        min-width: 390px;
        width: 100%;
        width: calc(100vw - 240px);
        min-height: 400px;
        margin: 10px 0 0 10px;
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        height: calc(100vh - 140px);
        width: calc(100% - 20px);
    }
    .el-scrollbar__wrap{
        overflow-x: hidden !important;
    }
</style>
