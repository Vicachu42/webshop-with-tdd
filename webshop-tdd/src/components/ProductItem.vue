<template>
  <div>
    <article v-for="(product, index) in products.products" :key="index">
      <img :src="product.picture" alt="wrestler-pic">
      <!-- <v-img :src="product.picture"></v-img> -->
      <!-- <figure v-bind:src="product.picture" alt="wrestler-pic"></figure> -->
      <!-- <div v-bind:src="product.picture" alt="wrestler-pic" /> -->
      <p>{{ product.shikona }}</p>
      <!-- <p>{{ product.price }}</p> -->
      <!-- <p>{{ product.rank }}</p> -->
    </article>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
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

  // methods: {
  //   async getRikishi() {
  //     const response = await fetch('http://localhost:3000/api/products');
  //     const data = await response.json();
  //     console.log(data);

  //     this.rikishi = await data;
  //   }
  // }
}
</script>

<style scoped>
/* .wrestler-pic {
  height: 300px;
} */
</style>