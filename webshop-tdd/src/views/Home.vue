<template>
  <div class="wrapper">
    <Header />
    <ProductView />
    <CartView />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import ProductView from './ProductView.vue';
import CartView from './CartView.vue';

export default {
  name: 'Home',
  components: {
    Header,
    ProductView,
    CartView
  }
}
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>