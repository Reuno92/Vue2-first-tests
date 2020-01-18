<template>
  <h1>{{ title }}</h1>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

  @Component
export default class FancyHeading extends Vue {
    title: string;

    constructor() {
      super();
      this.title = 'Hello World';
    }
}
</script>

<style lang="scss" scoped>

</style>
