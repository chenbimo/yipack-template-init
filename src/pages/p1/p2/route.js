export default {
    path: '/p1/p2',
    component: () => import('@src/layout/default/index.vue'),
    children: [
        {
            path: '/',
            component: () => import('@src/pages/p1/p2/index.vue')
        }
    ]
};
