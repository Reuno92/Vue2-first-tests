<template>
  <div class="about">
    <h1>This is an about page</h1>
    <FancyHeading v-bind:title="title"/>
  </div>
</template>

<script>
import FancyHeading from '@/components/FancyHeading.vue';

export default {
  data() {
    return {
      title: 'Hello world',
    };
  },
  name: 'about',
  components: { FancyHeading },
};
</script>
