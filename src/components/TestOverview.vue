v-<template>
  <div>
    <h1>{{ test.shortTitle }}</h1>
    <b-card border-variant="white">
      <b-card-title>Описание</b-card-title>
      <b-card-text class="mt-2">
        {{ test.description }}
      </b-card-text>
      <b-card-title>Методология</b-card-title>
      <b-card-text class="mt-2">
        {{ test.methodology }}
      </b-card-text>
      <b-button @click="startQuiz">Начать тест</b-button>
      <TestQuiz v-if="showQuiz" :test="test" @close="showQuiz = false" />
    </b-card>
  </div>
</template>

<script>
import TestQuiz from "@/components/TestQuiz.vue";

export default {
  name: "TestOverview",

  components: { TestQuiz },

  props: {
    test: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      showQuiz: false,
    };
  },

  methods: {
    startQuiz() {
      this.showQuiz = true;
    },
  },
};
</script>

<style>
.modal-dialog {
  max-width: 100%;
  margin: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100vh;
  display: flex;
}
</style>
