<template>
  <b-container fluid>
    <b-row flex style="height: 90vh">
      <b-col class="border-right border-gray overflow-auto">
        <b-form>
          <b-input class="my-2" placeholder="Search"></b-input>
        </b-form>
        <SideBar />
      </b-col>
      <b-col cols="8">
        <b-breadcrumb
          :items="brcItems"
          class="breadcrumb-style mb-0"
        ></b-breadcrumb>
        <b-container>
          <router-view></router-view>
        </b-container>
      </b-col>
      <b-col class="border-left border-gray overflow-auto"></b-col>
    </b-row>
  </b-container>
</template>

<script>
import SideBar from "@/components/SideBar.vue";

export default {
  name: "contents",
  components: { SideBar },
  data() {
    return {
      brcItems: [
        {
          text: "Юр.лица",
          href: "#",
        },
        {
          text: "НИВ",
          href: "#",
        },
        {
          text: "Определение ПУ",
          active: true,
        },
      ],
    };
  },
};
</script>

<style>
.border-gray {
  border-color: gray;
}
.breadcrumb-style {
  color: gray;
  background-color: white;
}
</style>
