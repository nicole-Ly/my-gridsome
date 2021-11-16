const c1 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "G:\\trainCampus\\demo\\my-gridsome\\src\\templates\\Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "G:\\trainCampus\\demo\\my-gridsome\\src\\pages\\Contact.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "G:\\trainCampus\\demo\\my-gridsome\\src\\pages\\About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "G:\\trainCampus\\demo\\my-gridsome\\node_modules\\gridsome\\app\\pages\\404.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "G:\\trainCampus\\demo\\my-gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/posts/:id/",
    component: c1
  },
  {
    path: "/contact/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
