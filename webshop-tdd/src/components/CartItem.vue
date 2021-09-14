<template>
  <div>
      <article v-for="(product, index) in products.carts" :key="index">
        <!-- <img :src="product.picture" alt="wrestler-pic"> -->
        <img src="../assets/tobizaru.jpg" alt="placeholder">
        <p>{{ product.shikona }}</p>
        <p>{{ product.price }}</p>
      </article>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  data() {
    return {
      products: [],
    }
  },
    mounted() {
    fetch('http://localhost:3000/api/products')
      .then(res => res.json())
      .then(data => this.products = data)
  }
}
</script>

<style scoped>

</style>