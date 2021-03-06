<template>
    <div class="comp-c-1">c-1</div>
</template>

<script>
export default {
    name: 'C1',
    data() {
        return {};
    },
    created() {
        this.on_init();
    },
    mounted() {},
    methods: {
        // 页面初始化操作
        on_init() {}
    }
};
</script>

<style lang="scss" scoped>
.comp-c-1 {
}
</style>
