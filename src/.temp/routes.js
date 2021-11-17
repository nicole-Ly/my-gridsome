const c1 = () => import(/* webpackChunkName: "page--src-templates-tag-vue" */ "G:\\trainCampus\\demo\\my-gridsome\\src\\templates\\Tag.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "G:\\trainCampus\\demo\\my-gridsome\\src\\templates\\Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "G:\\trainCampus\\demo\\my-gridsome\\src\\pages\\Contact.vue")
const c4 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "G:\\trainCampus\\demo\\my-gridsome\\src\\pages\\About.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "G:\\trainCampus\\demo\\my-gridsome\\node_modules\\gridsome\\app\\pages\\404.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "G:\\trainCampus\\demo\\my-gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/tags/:id/",
    component: c1
  },
  {
    path: "/posts/:id/",
    component: c2
  },
  {
    path: "/contact/",
    component: c3
  },
  {
    path: "/about/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
