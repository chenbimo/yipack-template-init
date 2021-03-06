export default {
    path: '/404',
    component: () => import('@src/layout/default/index.vue'),
    children: [
        {
            path: '/',
            component: () => import('@src/pages/404/index.vue')
        }
    ]
};
