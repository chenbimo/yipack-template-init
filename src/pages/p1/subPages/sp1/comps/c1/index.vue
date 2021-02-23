<template>
    <div class="comp-p-1_sp-1_c-1">
        page-p-1 sub-page-sp-1 comp-c-1
    </div>
</template>

<script>
export default {
    name: "C1",
    data(){
        return {};
    },
    created(){
        this.on_init();
    },
    mounted(){},
    methods:{
        // 页面初始化操作
        on_init(){

        }
    }
};
</script>

<style lang="scss" scoped>
.comp-p-1_sp-1_c-1 {
}
</style>
