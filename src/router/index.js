import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/video"
  },
  {
    path: "/video",
    name: "Video",
    component: () => import("../views/Video.vue"),
    meta: {
      title: "小爱视频解析"
    }
  },
  {
    path: "/music",
    name: "Music",
    component: () => import("../views/Music.vue"),
    meta: {
      title: "小爱音乐"
    }
  }
];

const router = new VueRouter({
  routes
});
router.beforeEach(function(req, res, next) {
  console.log(req);
  document.title = req.meta.title;
  next();
});
export default router;
