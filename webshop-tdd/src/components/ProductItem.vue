<template>
  <div>
    <!-- <p>Product item</p> -->
    <!-- <div v-for="(product, index) in products.products" :key="index"> -->
      <!-- <p>{{ product[0] }}</p> -->
      <!-- <p>{{ products }}</p> -->
      <!-- <p>{{ index }}</p> -->
      <!-- <p>{{ product }}</p> -->
    <!-- </div> -->

    <!-- <pre v-for="(product, index) in products.products" :key="index">{{ index }}</pre> -->
    <!-- <p v-for="(product, index) in products.products" :key="index">{{ product.shikona }}</p> -->

    <div v-for="(product, index) in products.products" :key="index">
      <p>{{ product.shikona }}</p>
      <p>{{ product.rank }}</p>
      </div>


    <!-- <p v-for="product in products" :key="product.id">{{ product }}</p> -->
    <!-- <div v-for="product in products" :key="product.id">
      <p>{{ products.products.id }}</p>
    </div> -->
    <!-- <article>
      <ul>
        <li>{{ products.rikishi.shikona }}</li>
      </ul>
    </article> -->
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  data() {
    return {
      products: [],
      // products: ['Kalle', 'Sven', 'Ida', 'Sara', 'Dag'],
    }
  },
  mounted() {
    fetch('http://localhost:3000/api/products')
      .then(res => res.json())
      .then(data => this.products = data)
      // .then(data => this.products = JSON.stringify(data))
  }

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