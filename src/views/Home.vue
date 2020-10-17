<template>
  <b-jumbotron class="text-left mb-0 vh-100">
    <template v-slot:header
      ><h1>Путеводитель по налогам Казахстана</h1></template
    >
    <template v-slot:lead>
      Поиск решений в формате "вопрос-ответ"
    </template>

    <hr class="my-4" />

    <p>
      Меня интересует вопрос налогообложения:
    </p>

    <b-button variant="info" to="/contents" class="mr-2"
      >Юридических лиц</b-button
    >
    <b-button variant="info" to="/contents" class="mr-2"
      >Физических лиц</b-button
    >
  </b-jumbotron>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>
