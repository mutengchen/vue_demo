import PageA from "@/components/PageA";
import PageB from "@/components/PageB";
import MainIndex from "@/components/MainIndex";



export default [
            {
                path: '/PageA',
                name: "PageA",
                component: PageA
            },
            {
                path: '/PageB',
                name: "PageB",
                component: PageB
            },
            {
                path: '/',
                name: 'home',
                component: MainIndex
            }
]


