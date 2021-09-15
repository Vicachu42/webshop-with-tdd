<template>
  <div class="body-block">
    <article class="cart-bar">
      <h2>Shopping Cart</h2>
    </article>
    <article class="cart-block">
      <CartItem />
      <h4>Total: ¥1 500 000</h4>
    </article>
    <article class="button-container">
      <button @click="$emit('toggle')" class="go-back-button">Go Back</button>
      <button>Checkout</button>
    </article>
  </div>
</template>

<script>
import CartItem from '../components/CartItem.vue';

export default {
  name: 'CartView',
  components: {
    CartItem
  },
  methods: {
    emitToggle() {
      this.$emit('toggle')
    }
  }
}
</script>

<style scoped>
.body-block {
  width: 1000px;
  margin: auto;
  margin-top: 1em;
  margin-bottom: 1em;
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

.cart-block {
  width: 100%;
  background-color: black;
  border-radius: 1em;
  padding: 1rem;
  margin-bottom: 0.5rem;
  box-sizing: border-box;
}

.cart-block h4 {
  text-align: right;
}

.button-container {
  display: flex;
  justify-content: space-between;
}
</style>