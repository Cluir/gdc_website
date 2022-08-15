import VueRouter from "vue-router";

// 引入组件
import Subject from '../components/heads/subject'
import Zz from '../components/heads/zz'
import Hy from '../components/heads/hy'
import Rc from '../components/heads/rc'
import Ty from '../components/heads/ty'

import Hq from '../components/heads/hq'
import Js from '../components/heads/js'
import Ztlt from '../components/heads/ztlt'
import Zzqy from '../components/heads/zzqy'
import Chzc from '../components/heads/chzc'

import Hyjt from '../components/tails/hyjt'
import Jdyd from '../components/tails/jdyd'
import Yqfk from '../components/tails/yqfk'
import Jdjt from '../components/tails/jdjt'



export default new VueRouter({
    routes:[
        {
			path:'/subject',
			component:Subject
		},
                
        {
			path:'/chzc',
			component:Chzc
		},
        {
			path:'/hq',
			component:Hq
		},
        {
			path:'/js',
			component:Js
		},
        {
			path:'/ztlt',
			component:Ztlt
		},
        {
			path:'/zzqy',
			component:Zzqy
		},
        {
            path:'/zz',
            component:Zz
        },        {
            path:'/ty',
            component:Ty
        },
        {
            path:'/hy',
            component:Hy
        },
        {
            path:'/rc',
            component:Rc
        },
        {
            path:'/jdyd',
            component:Jdyd
        },
        {
            path:'/hyjt',
            component:Hyjt
        },
        {
            path:'/yqfk',
            component:Yqfk
        },
        {
            path:'/',
            redirect:'/subject'
        },
        {
            path:'/jdjt',
            component:Jdjt
        }
    ]
})
