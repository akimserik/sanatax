<template>
  <b-container class="my-5">
    <b-card-group deck>
      <TestCard v-for="test in tests" :key="test.id" :testObj="test" />
    </b-card-group>
  </b-container>
</template>

<script>
import TestCard from "@/components/TestCard.vue";
import testData from "@/data/tests.json";

export default {
  name: "TestList",
  components: { TestCard },
  data() {
    return {
      tests: [],
    };
  },
  mounted() {
    this.tests = testData;
  },
};
</script>

<style lang="scss" scoped></style>
