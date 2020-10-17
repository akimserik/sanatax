<template>
  <b-modal
    v-model="showDialog"
    id="modal-1"
    class="modal-dialog"
    :title="test.shortTitle"
    no-close-on-esc
    @close="cancelQuiz"
  >
    <b-container style="width: 70%">
      <b-card>
        <b-card-title>Вопрос {{ currentQuestion.id }}</b-card-title>
        <b-card-text>
          <p class="mb-1">{{ currentQuestion.question }}</p>
          <div v-if="currentQuestion.options.length">
            <ul>
              <li v-for="queOpt in currentQuestion.options" :key="queOpt">
                {{ queOpt }}
              </li>
            </ul>
          </div>
        </b-card-text>
        <b-form>
          <b-form-group>
            <b-form-radio-group
              v-model="selected"
              :options="options"
              value-field="goto"
              text-field="value"
              size="lg"
              class="ml-3"
            >
            </b-form-radio-group>
          </b-form-group>
        </b-form>
      </b-card>
    </b-container>
    <template v-slot:modal-footer>
      <b-button-group size="sm">
        <b-button class="mr-2" variant="primary" v-if="queNum" @click="prevQue">
          <b-icon-arrow-bar-left /> Назад
        </b-button>

        <b-button
          class="mr-2"
          variant="primary"
          v-if="queNum < test.questions.length - 1"
          @click="nextQue"
        >
          <b-icon-arrow-bar-right /> Далее
        </b-button>

        <b-button variant="secondary" @click="cancelQuiz">
          Прервать
        </b-button>
      </b-button-group>
    </template>
  </b-modal>
</template>

<script>
export default {
  name: "TestQuiz",

  props: {
    test: Object,
  },

  data() {
    return {
      showDialog: true,
      selected: "",
      queNum: 0,
    };
  },

  computed: {
    currentQuestion() {
      return this.test.questions[this.queNum];
    },
    options() {
      return this.currentQuestion.answers;
    },
  },

  methods: {
    prevQue() {
      if (this.queNum) this.queNum = this.queNum - 1;
    },
    nextQue() {
      if (!this.selected) {
        alert("Не выбран вариант ответа!");
        return;
      }
      if (this.queNum < this.test.questions.length - 1) {
        this.queNum = this.queNum + 1;
        this.selected = "";
      }
    },
    cancelQuiz(event) {
      let res = confirm("Прервать тест?");
      if (res) {
        this.close();
      } else event.preventDefault();
    },
    close() {
      this.showDialog = false;
      this.$emit("close");
    },
  },
};
</script>

<style></style>
