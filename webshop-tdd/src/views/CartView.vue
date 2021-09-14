<template>
  <div class="body-block">
    <article class="cart-bar">
      <h2>Shopping Cart</h2>
    </article>
    <CartItem />
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue';

export default {
  name: 'CartView',
  components: {
    CartItem
  }
}
</script>

<style scoped>
.body-block {
  width: 1000px;
  margin: auto;
  margin-top: 1em;
  padding: 1rem;
  background-color: white;
}

.cart-bar {
  width: 100%;
  background-color: #E8E8E8;
}

.cart-bar h2 {
  margin-left: 1rem;
}
</style>