<template>
  <div>
    <p>Product item</p>
    <!-- <div v-for="product in products" :key="product.id">
      <p>{{ products.products.id }}</p>
    </div> -->
    <!-- <p v-for="product in products" :key="product.id">
      {{ product.shikona }}
    </p> -->
    <!-- <article>
      <ul>
        <li>Chiyonokuni</li>
        <li>{{ products.rikishi.shikona }}</li>
      </ul>
    </article> -->
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  // data() {
  //   return {
  //     product: '',
  //     products: [],
  //   }
  // },
  // mounted() {
  //   fetch('http://localhost:3000/api/products')
  //     .then(res => res.json())
  //     .then(data => this.products = data)
  // }
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

<style>

</style>