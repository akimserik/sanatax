<template>
  <footer>
    <b-container fluid>
      <b-row cols="4" align-h="between">
        <b-col class="text-left"
          ><font-awesome-icon :icon="['far', 'copyright']" /> Inventas 2020
        </b-col>
        <b-col class="text-center">
          <router-link
            to="/about"
            class="text-light"
            style="text-decoration: none"
            >О проекте</router-link
          >
        </b-col>
        <b-col class="text-right">
          <font-awesome-icon :icon="['fab', 'facebook']" class="mr-2" />
          <font-awesome-icon :icon="['fab', 'twitter']" />
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
library.add(faFacebook, faTwitter, faCopyright);

export default {};
</script>

<style scoped>
footer {
  background-color: #37372b !important;
  color: #fff;
  padding: 2%;
}
</style>
