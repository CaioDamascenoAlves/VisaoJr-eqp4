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
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
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
  faPhone,
  faInstagram,
  faFacebook,
  faWhatsapp,
  faYoutube
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
