<template>
  <div class="body-block">
    <h2>Product view</h2>
    <ProductItem />
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';

export default {
  name: 'ProductView',
  components: {
    ProductItem
  }
}
</script>

<style scoped>
.body-block {
  background-color: white;
}
</style>