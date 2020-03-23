<template>
    <div class="v1-tab-nav w-100 d-flex align-center">
        <!-- <el-tag v-for="(item, index) in routeNav" :key="index" @click="handleTag(item)" closable>{{ item.name }}</el-tag> -->
        <div v-for="(item, index) in routeNav" :key="index" :class="{'bg-white': handleDugeNav(item.fullPath)}" @click="handleTag(item)">
            <div>
                {{ item.name }}
                <i v-if="!handleDugeNav(item.fullPath)" @click.stop="handleclseTag(item)" class="iconfont iconziyuanldpi nav-close"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from "vuex"
export default {
    components: {},
    data() {
        return {

        };
    },
    watch: {
        $route(val) {
            this.setaddrouteNav(val)
        }
    },
    created() {
        this.setaddrouteNav(this.$route)
    },
    mounted() {},
    methods: {
        ...mapMutations(["setaddrouteNav", "closerouteNav"]),
        //=====================================标签跳转====================================//
        handleTag(item) {
            if (item.fullPath == this.$route.fullPath) return
            this.$router.push(item.fullPath)
        },
        //=====================================判断是否为当前路由====================================//
        handleDugeNav(path) {
            return this.$route.fullPath === path;
        },
        //=====================================关闭标签====================================//
        handleclseTag(item) {
            this.closerouteNav(item)
        }
    },
    computed: {
        ...mapState(["routeNav"])
    }
};
</script>



<style lang="scss">
.v1-tab-nav{
    height: 40px;
    background: #eeee;
    >div{
        width: 200px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: .3s;
        >div{
            width: 100%;
            // border-right: 1px solid rgb(160, 160, 160);
            text-align: center;
            height: 30px;
            line-height: 30px;
            position: relative;
        }
        &:hover{
            background: rgb(218, 218, 218);
            >div{
                border-right: none;
            }
        }
    }
}
.nav-close{
    font-size: 12px;
    position: absolute;
    right: 10px;
} 
</style>
