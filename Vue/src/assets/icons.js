import Vue from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserPlus,
  faUserEdit,
  faTrash,
  faFileCirclePlus,
  faFilePen,
  faPaw,
  faHouse,
  faCalendar,
  faUser,
  faRightFromBracket,
  faHeart,
  faDroplet,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
  faUserPlus,
  faUserEdit,
  faTrash,
  faFileCirclePlus,
  faFilePen,
  faPaw,
  faHouse,
  faCalendar,
  faUser,
  faRightFromBracket,
  faHeart,
  faDroplet,
  faLocationDot,
  faEnvelope,
);
Vue.component("font-awesome-icon", FontAwesomeIcon);
