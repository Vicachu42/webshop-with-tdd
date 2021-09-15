<template>
  <div class="product-item-wrapper">
    <article v-for="(product, index) in products" :key="index" class="wrestler-card">
      <img :src="product.picture" alt="wrestler-pic" class="wrestler-pic">
      <div class="wrestler-info">
        <h4>{{ product.shikona }}</h4>
        <p><b>Rank:</b> {{ product.rank }}</p>
        <p><b>Height:</b> {{ product.height }}</p>
        <p><b>Weight:</b> {{ product.weight }}</p>
        <p><b>Price:</b> {{ product.price }}</p>
        <button @click="addToCart(product.id)" class="add-product">Add To Cart</button>
      </div>
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
    this.init()
  },
  methods: {
    init() {
      fetch('http://localhost:3000/api/products')
      .then(res => res.json())
      .then(data => this.products = data)
    },
    async addToCart(data) {
      const res = await fetch('http://localhost:3000/api/carts/' + data, {method: 'POST'} );
      const result = await res.json();
      console.log(result);
    }
  }
  // methods: {
  //   async getRikishi() {
  //     const response = await fetch('http://localhost:3000/api/products');
  //     const data = await response.json();
  //     console.log(data);

  //     this.products = await data;
  //   }
  // }
}
</script>

<style scoped>
.product-item-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.wrestler-card {
  display: flex;
  flex-direction: row;
  color: white;
  margin-bottom: 1rem;
  margin-right: 1rem;
  width: 300px;
}

.wrestler-pic {
  height: 220px;
  margin-right: 1rem;
}

.wrestler-info p {
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}
</style>