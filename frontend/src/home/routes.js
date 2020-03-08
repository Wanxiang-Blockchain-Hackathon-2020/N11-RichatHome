import Dashboard from '@/home/components/Dashboard';
const Task = () => import('@/admin/components/task')

const routes = [{
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/newtask',
        name: 'NewTask',
        component: Task
    }
];

export default routes;