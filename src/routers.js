import Home from './components/Home.vue'
import Signin from './components/Signin.vue'
import ProjectPageOne from './components/ProjectPageOne.vue'
import ProjectPageTwo from './components/ProjectPageTwo.vue'
import ProjectPageThree from './components/ProjectPageThree.vue'
import Projectone from './components/Projectone'
import Projecttwo from './components/Projecttwo'
import Projectthree from './components/Projectthree'
import Projectfour from './components/Projectfour'
import Projectfive from './components/Projectfive'
import Projectsix from './components/Projectsix'
import Projectseven from './components/Projectseven'
import Projecteight from './components/Projecteight'
import Projectnine from './components/Projectnine'
import Projectten from './components/Projectten'
import Projecteleven from './components/Projecteleven'
import Projecttwelve from './components/Projecttwelve'
import Projectthirteen from './components/Projectthirteen'
import Projectfourteen from './components/Projectfourteen'
import Projectfifteen from './components/Projectfifteen'

import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
        name: 'Home',
        component: Home,
        path: '/home'
    },
    {
        name: 'Signin',
        component: Signin,
        path: '/'
    },
    {
        name: 'ProjectPageOne',
        component: ProjectPageOne,
        path: '/projectpageone'
    },
    {
        name: 'ProjectPageTwo',
        component: ProjectPageTwo,
        path: '/projectpagetwo'
    },
    {
        name: 'ProjectPageThree',
        component: ProjectPageThree,
        path: '/projectpagethree'
    },
    {
        name: 'Projectone',
        component: Projectone,
        path: '/projectone'
    },
    {
        name: 'Projecttwo',
        component: Projecttwo,
        path: '/projecttwo'
    },
    {
        name: 'Projectthree',
        component: Projectthree,
        path: '/projectthree'
    },
    {
        name: 'Projectfour',
        component: Projectfour,
        path: '/projectfour'
    },
    {
        name: 'Projectfive',
        component: Projectfive,
        path: '/Projectfive'
    },
    {
        name: 'Projectsix',
        component: Projectsix,
        path: '/Projectsix'
    },
    {
        name: 'Projectseven',
        component: Projectseven,
        path: '/Projectseven'
    },
    {
        name: 'Projecteight',
        component: Projecteight,
        path: '/Projecteight'
    },
    {
        name: 'Projectnine',
        component: Projectnine,
        path: '/Projectnine'
    },
    {
        name: 'Projectten',
        component: Projectten,
        path: '/Projectten'
    },
    {
        name: 'Projecteleven',
        component: Projecteleven,
        path: '/Projecteleven'
    },
    {
        name: 'Projecttwelve',
        component: Projecttwelve,
        path: '/Projecttwelve'
    },
    {
        name: 'Projectthirteen',
        component: Projectthirteen,
        path: '/Projectthirteen'
    },
    {
        name: 'Projectfourteen',
        component: Projectfourteen,
        path: '/Projectfourteen'
    },
    {
        name: 'Projectfifteen',
        component: Projectfifteen,
        path: '/Projectfifteen'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;