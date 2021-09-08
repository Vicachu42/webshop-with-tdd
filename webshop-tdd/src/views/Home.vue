<template>
  <div>
    <h1>Home</h1>
    <ShoppingCart />
    <ProductView />
    <CartView />
  </div>
</template>

<script>
import ShoppingCart from '../components/ShoppingCart.vue';
import ProductView from './ProductView.vue';
import CartView from './CartView.vue'

export default {
  name: 'Home',
  components: {
    ShoppingCart,
    ProductView,
    CartView
  }
}
</script>

<style>

</style>