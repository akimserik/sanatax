<template>
  <div class="d-flex flex-column">
    <NavBar />
    <router-view />
    <div class="wrapper flex-grow-1"></div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { NavBar, Footer },
};
</script>

<style></style>
