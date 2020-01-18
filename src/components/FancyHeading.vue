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
      this.title = 'Hello world';
    }
}
</script>

<style lang="scss" scoped>

</style>
