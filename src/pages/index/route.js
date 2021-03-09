export default {
    path: '/',
    component: () => import('@src/layout/default/index.vue'),
    children: [
        {
            path: '/',
            component: () => import('@src/pages/index/index.vue')
        }
    ]
};
