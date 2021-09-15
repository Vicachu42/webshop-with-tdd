<template>
  <div>
      <article v-for="(product, index) in products.carts" :key="index">
        <div class="item-listing">
          <!-- <img :src="product.picture" alt="wrestler-pic"> -->
          <img src="../assets/tobizaru.jpg" alt="placeholder" class="product-pic">
          <article class="item-info">
            <h4>{{ product.shikona }}</h4>
            <p><b>Rank:</b> {{ product.rank }}</p>
            <p><b>Price:</b> {{ product.price }}</p>
          </article>
          <button class="delete-product">Delete Item</button>
        </div>
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
.item-listing {
  display: flex;
  flex-direction: row;
  color: white;
  border-bottom: 3px solid white;
  margin-bottom: 1rem;
}

.product-pic {
  height: 200px;
  margin-right: 1rem;
  margin-bottom: 1rem;
}

.item-info p {
  width: 735px;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}

.delete-product {
  background-color: red;
  height: 2rem;
  margin-top: 2rem;
}

.delete-product:hover {
  background-color: darkred;
}

.delete-product:active {
  background-color: darkred;
}
</style>