<template>
    <div class="page-index">page-index</div>
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
    created() {
        this.init();
    },
    mounted() {},
    methods: {
        // 页面初始化操作
        init() {},
        // 简单事件中心
        on() {},
        // 接口-增加
        api_insert() {
            return new Promise((resolve, reject) => {
                this.$Apis.Index.insert()
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        // 接口-删除
        api_delete() {
            return new Promise((resolve, reject) => {
                this.$Apis.Index.delete()
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        // 接口-修改
        api_update() {
            return new Promise((resolve, reject) => {
                this.$Apis.Index.update()
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        },
        // 接口-查询
        api_select() {
            return new Promise((resolve, reject) => {
                this.$Apis.Index.select()
                    .then((res) => {
                        resolve(res);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            });
        }
    }
};
</script>

<style lang="scss" scoped>
// 组件作用域方案
// 所有样式不会影响组件和框架
.page-index {
    color: #000777;
    font-size: 10rpx;
    .uploader-example {
        width: 880px;
        padding: 15px;
        margin: 40px auto 0;
        font-size: 12px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
    }
    .uploader-example .uploader-btn {
        margin-right: 4px;
    }
    .uploader-example .uploader-list {
        max-height: 440px;
        overflow: auto;
        overflow-x: hidden;
        overflow-y: auto;
    }
}
</style>
