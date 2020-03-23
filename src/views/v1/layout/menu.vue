<template>
    <el-scrollbar class="v1-menu">
        <el-menu class="el-menu-vertical-demo" :collapse="isCollapse">
            <template v-for="(item, index) in banner">
                <el-menu-item
                    :key="index"
                    v-if="item.type == 'link'"
                    :index="`${item.id}+''`"
                >
                    <i class="el-icon-location"></i>
                    <span slot="title">{{ item.text }}</span>
                </el-menu-item>
                <Submenu :key="index" v-else-if="item.hasChildren" :data="item"></Submenu>
            </template>
        </el-menu>
    </el-scrollbar>
</template>

<script>
import submenu from "./com/submenu";
export default {
    props: {
        isCollapse: {
            type: Boolean,
            default: false
        }
    },
    components: {
        Submenu: submenu
    },
    data() {
        return {
            banner: []
        };
    },
    created() {
        this.getMenuData();
    },
    mounted() {},
    methods: {
        //=====================================请求菜单数据====================================//
        getMenuData() {
            this.axios
                .get("/users/info")
                .then(res => {
                    this.banner = JSON.parse(res[0].menu).children;
                    console.log(this.banner);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>

<style lang="scss">
.v1-menu {
    height: calc(100vh - 40px);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
}
</style>
