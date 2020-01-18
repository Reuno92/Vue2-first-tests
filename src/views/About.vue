<template>
  <div class="about">
    <h1>This is an about page</h1>
    <FancyHeading/>
  </div>
</template>

<script>
import FancyHeading from '@/components/FancyHeading.vue';

export default {
  name: 'about',
  components: { FancyHeading },
};
</script>
