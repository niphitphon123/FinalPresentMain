import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue"
import Order from "../pages/Order.vue"
import Products from "../pages/Products.vue"
import Presenter from "../pages/Presenter.vue"
import Service from "../pages/Service.vue"

const routes = [{
    path: "/",
    component: Home,
    name: "Home",
},{
  path: "/Order",
  component: Order,
  name: "Order",
},{
  path: "/Products",
  component: Products,
  name: "Products",

},{
  path: "/Presenter",
  component: Presenter,
  name: "Presenter",
},{
  path: "/Service",
  component: Service,
  name: "Service",
}]

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: "active",
    scrollBehavior(to, from, savedPosition) {
      if (to.hash) {
        return {
          selector: to.hash,
          behavior: 'smooth'
        };
      }
      return { x: 0, y: 0 };  // Go to the top of the page if no hash
    },
    routes,
  });
  
  export default router;

  