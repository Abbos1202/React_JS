import Home from "../components/Home";
import Pages from "../components/Pages";
import Templates from "../components/Templates";
import Elements from "../components/Elements";
import Single from "../components/Single";

export const navbar = [
    {
        id: 1,
        title: 'Home',
        path: '/home',
        element: <Home />,
        isActive: false,
    },
    {
        id: 2,
        title: 'Home',
        path: '/single/:id',
        element: <Single />,
        isActive: false,
    }, {
        id: 3,
        title: 'Templates',
        path: '/templates',
        element: <Templates />,
        isActive: false,
    }, {
        id: 4,
        title: 'Pages',
        path: '/pages',
        element: <Pages />,
        isActive: true,
    }, {
        id: 5,
        title: 'Login',
        path: '/elements',
        element: <Elements />,
        isActive: false,
    },
]