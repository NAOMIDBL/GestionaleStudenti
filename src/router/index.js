import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import StudentDetails from "../views/StudentDetails.vue";
import AddStudent from "../views/AddStudent.vue";
import Corsi from "../views/Corsi.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/student/:id",
    name: "student-details",
    component: StudentDetails,
    props: true
  },
  {
    path: "/add",
    name: "add-student",
    component: AddStudent
  },
  {
    path: "/corsi",
    name: "corsi",
    component: Corsi
  }
];

const router = new VueRouter({
  routes
});

export default router;
