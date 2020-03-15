<template>
  <div>
    {{text}}
    <fieldset>
      <legend>Event Details</legend>
      <b>Title:</b>
      {{event.title}}
      <br />
      <b>Start:</b>
      {{event.start}}
      <br />
      <b>End:</b>
      {{event.emd}}
      <br />
      <b>Id:</b>
      {{event.id}}
      <br />
    </fieldset>
    <fieldset>
        <legend>Edit</legend>
        <input type="text" v-model="title">
        <input type="text" v-model="start">
        <input type="text" v-model="end">
    </fieldset>
  </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
  data: () => ({
    title: "",
    start: {},
    end: {}
  }),
  props: {
    text: String,
    event: Object
  },
  mounted() {
      this.title = this.event.title;
      this.start = this.event.start;
      this.end = this.event.end;
  }
};
</script>

<style>
</style>