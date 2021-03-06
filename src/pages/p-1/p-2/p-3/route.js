export default {
    path: '/p-1/p-2/p-3',
    component: () => import('@src/layout/default/index.vue'),
    children: [
        {
            path: '/',
            component: () => import('@src/pages/p-1/p-2/p-3/index.vue')
        }
    ]
};
