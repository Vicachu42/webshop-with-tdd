<template>
  <div>
    <article v-for="(product, index) in products.products" :key="index" class="wrestler-card">
      <!-- <img :src="product.picture" alt="wrestler-pic"> -->
      <img src="../assets/hakuho.jpg" alt="placeholder" class="wrestler-pic">
      <div class="wrestler-info">
        <h4>{{ product.shikona }}</h4>
        <p><b>Rank:</b> {{ product.rank }}</p>
        <p><b>Height:</b> {{ product.height }}</p>
        <p><b>Weight:</b> {{ product.weight }}</p>
        <p><b>Price:</b> {{ product.price }}</p>
        <button class="add-product">Add to cart</button>
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
      picture: Image
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

  //     this.products = await data;
  //   }
  // }
}
</script>

<style scoped>
.wrestler-card {
  display: flex;
  flex-direction: row;
  color: white;
  width: 100%;
  /* border: dashed white; */
}

.wrestler-pic {
  height: 300px;
  margin-right: 1rem;
}

.wrestler-info p {
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}

button {
  background-color: #27386E;
  color: white;
  text-align: center;
  cursor: pointer;
  border-radius: 0.5em;
  font-size: 1rem;
  padding: 5px 10px 5px 10px;
  margin-top: 0.4rem;
  border: none;
}

button:hover {
  background-color: #302332;
}

button:active {
  transform: translateY(3px);
  background-color: #302332;
}
</style>