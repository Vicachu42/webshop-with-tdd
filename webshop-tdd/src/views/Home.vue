<template>
  <div class="wrapper">
    <Header 
      v-on:toggle="toggleViews"
    />
    <span class="product-view" v-show="isRendered">
      <ProductView />
    </span>
    <span class="cart-view" v-show="!isRendered">
      <CartView 
        v-on:toggle="toggleViews"
      />
    </span>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import ProductView from './ProductView.vue';
import CartView from './CartView.vue';
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    ProductView,
    CartView,
    Footer
  },
  data() {
    return {
      isRendered: true
    }
  },
  methods: {
    toggleViews() {
      this.isRendered = !this.isRendered
    }
  }
}
</script>

<style>
.wrapper {
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

img {
  border-radius: 2%;
}

button {
  background-color: #27386E;
  color: white;
  text-align: center;
  cursor: pointer;
  height: 2rem;
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

h1 {
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 2rem;
  margin-top: 0;
  padding-bottom: 0;
  margin-bottom: 0;
}

h2 {
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 1.rem;
}

h3 {
  color: black;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 1.4rem;
  line-height: 100%;
  margin-top: 1rem;
  margin-bottom: 0;
}

h4 {
  color: white;
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 1.4rem;
  margin-bottom: 0.1rem;
}

p {
  font-family: 'M PLUS 1p', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 0;
}

.hakkeyoi {
  color: #302332;
  font-family:'M PLUS 1p', sans-serif;
  font-size: 2rem;
  font-weight: 900;
  margin-top: 1rem;
}
</style>