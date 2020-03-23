<template>
    <el-card class="box-card mb-1 h-100">
        <div slot="header" class="clearfix">
            <span>{{ title }}</span>
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
        </div>
        <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
        </div>
    </el-card>
</template>

<script>
export default {
    components: {},
    props: {
        title: {
            type: String,
            default: "标题"
        }
    },
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
