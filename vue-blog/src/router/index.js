import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

import Article from "@/components/article/Article";
import Catalog from "@/components/catalog/Catalog";

export default new Router({
  mode: "history",
    routes: [
    {
        name: "article",
        path: "/article/:id",
        component: Article
    },
    {
        name: "Catalog",
        path: "/",
        component: Catalog
    }
  ]
});