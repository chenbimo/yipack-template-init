<template>
    <div class="page-index">
        ddd22334455666777ddd222
        <div class="div-1" @click="goNewsSvNews1">去首页的二级路由页面index-1</div>
        <div @click="goNewsSpNews1">去首页的二级路由页面index-2</div>
        {{ abc | F1 }}
        <C1></C1>
    </div>
</template>

<script>
export default {
    name: 'Index',
    components: {},
    data() {
        return {
            abc: 456
        };
    },
    mounted() {
        // 获取用户信息接口
        // this.$Apis.index
        //     .test()
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        // 管理员登录接口
        // this.$Apis.admin
        //     .login()
        //     .then((res) => {
        //         console.log('登录成功');
        //         console.log(res);
        //     })
        //     .catch((err) => {
        //         console.log('登录失败');
        //     });
    },
    methods: {
        goNewsSvNews1() {
            this.$router.push({
                path: '/news/sv-news-1'
            });
        },
        goNewsSpNews1() {
            this.$router.push({
                path: '/news/sp-news-1'
            });
        }
    }
};
</script>

<style lang="scss" scoped>
// 组件作用域方案
// 所有样式不会影响组件和框架
.page-index {
    color: #000;
}
</style>
