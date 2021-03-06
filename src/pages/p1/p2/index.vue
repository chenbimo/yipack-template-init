<template>
    <div class="page-p2">p-2</div>
</template>

<script>
export default {
    name: 'P2',
    data() {
        return {};
    },
    created() {
        this.on_init();
    },
    mounted() {},
    methods: {
        // 页面初始化操作
        on_init() {},
        // 接口-增加
        api_insert() {
            return new Promise((resolve, reject) => {
                this.$Apis.p1.p2
                    .insert()
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
                this.$Apis.p1.p2
                    .delete()
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
                this.$Apis.p1.p2
                    .update()
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
                this.$Apis.p1.p2
                    .select()
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
.page-p2 {
}
</style>
