<template>
    <el-submenu :index="`${data.id}+''`">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">{{ data.text }}</span>
            </template>
            <div v-for="(item, index) in data.children" :key="index">
                <el-menu-item v-if="item.type == 'link'" :index="`${item.id}+''`">
                    <span slot="title">{{ item.text }}</span>
                </el-menu-item>
                <Submenu v-else-if="item.hasChildren" :data="item"></Submenu>
            </div>
    </el-submenu>
</template>

<script>
export default {
    name: "Submenu",
    props: {
        data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    components: {},
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {},
    methods: {

    }
};
</script>



<style lang="scss">

</style>
