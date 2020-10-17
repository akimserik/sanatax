<template>
  <router-link
    class="event-link"
    :to="{ name: 'test-show', params: { id: testObj.id } }"
  >
    <b-card style="max-width: 15rem" class="m-2">
      <div style="height: 13rem">
        <b-card-title>
          <h5>{{ testObj.shortTitle }}</h5>
        </b-card-title>
        <b-card-sub-title class="mt-2">
          <h6>{{ testObj.tax }}</h6>
        </b-card-sub-title>
        <b-card-text class="my-3">
          {{ testObj.description }}
        </b-card-text>
      </div>
    </b-card>
  </router-link>
</template>

<script>
export default {
  name: "TestCard",
  props: {
    testObj: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.event-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
