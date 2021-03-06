export default {
    path: '/p-1',
    component: () => import('@src/layout/default/index.vue'),
    children: [
        {
            path: '/',
            component: () => import('@src/pages/p-1/index.vue')
        }
    ]
};
