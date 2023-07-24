<template>
  <div class="social-icons-footer">
    <a href="#" class="social-icon-link">
      <font-awesome-icon :icon="['fab', 'fa-instagram']" class="icon fa-2x" />
    </a>
    <a href="#" class="social-icon-link">
      <font-awesome-icon :icon="['fab', 'fa-facebook']" class="icon fa-2x" />
    </a>
    <a href="#" class="social-icon-link">
      <font-awesome-icon :icon="['fab', 'fa-whatsapp']" class="icon fa-2x" />
    </a>
    <a href="#" class="social-icon-link">
      <font-awesome-icon :icon="['fab', 'fa-youtube']" class="icon fa-2x" />
    </a>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "SocialIconsFooter",
  components: {
    FontAwesomeIcon,
  },
};
</script>

<style>
.social-icons-footer {
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: #1d2547;
  padding: 5px;
  z-index: 999;
}

.social-icon-link {
  margin-left: 10px;
}

.icon {
  color: #d6a248;
}
</style>
