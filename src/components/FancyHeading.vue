<template>
  <h1 class="heading">{{ title }}</h1>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

  @Component
export default class FancyHeading extends Vue {
    title: string;

    constructor() {
      super();
      this.title = 'Hello world';
    }
}
</script>

<style lang="scss" scoped>
  .heading {
    font-size: 34px;
    text-align: center;
    color: #2c3e50;
  }
</style>
