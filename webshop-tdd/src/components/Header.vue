<template>
  <div>
    <section class="header-bar">
      <article class=header-content>
        <h2 class="header-text">Step into the dohyo</h2>
        <ShoppingCart />
      </article>
    </section>
  </div>
</template>

<script>
import ShoppingCart from '../components/ShoppingCart.vue';

export default {
  name: 'Header',
  components: {
    ShoppingCart
  }
}
</script>

<style scoped>
.header-bar {
  background-color: black;
  width: 100%;
  height: 50px;
  overflow: hidden;
}

.header-content {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 1000px;
}

.header-text {
  font-family: 'Bungee', cursive;
  color: white;
  font-size: 1.3rem;
  margin-top: 0;
}
</style>