<template>
  <h1 class="heading">{{ title }}</h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component
export default class FancyHeading extends Vue {
    @Prop() title: string;
}
</script>

<style lang="scss" scoped>
  .heading {
    font-size: 34px;
    text-align: center;
    color: #2c3e50;
  }
</style>
