<template>
  <b-nav vertical toggleable="lg">
    <b-nav-item v-b-toggle.collapse1>Юридические лица</b-nav-item>
    <b-collapse id="collapse1" class="ml-2">
      <b-nav-item to="/contents/tests">Тесты</b-nav-item>
      <b-nav-item>Законы</b-nav-item>
    </b-collapse>
    <b-nav-item>Физические лца</b-nav-item>
  </b-nav>
</template>

<script>
export default {
  name: "sidebar",
  data() {
    return {};
  },
};
</script>

<style></style>
