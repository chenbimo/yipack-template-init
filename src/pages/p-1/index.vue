<template>
    <div class="page-p-1">
        p-1
        <yi-c2></yi-c2>
        {{ name | F1 }}
    </div>
</template>

<script>
export default {
    name: 'P1',
    data() {
        return {
            name: 'chensuiyi'
        };
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
                this.$Apis.p1
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
                this.$Apis.p1
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
                this.$Apis.p1
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
                this.$Apis.p1
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
.page-p-1 {
}
</style>
