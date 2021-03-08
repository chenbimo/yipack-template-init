export default {
    path: '/p1',
    component: () => import('@src/layout/default/index.vue'),
    children: [
        {
            path: '/',
            component: () => import('@src/pages/p1/index.vue')
        }
    ]
};
