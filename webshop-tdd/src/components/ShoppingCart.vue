<template>
  <div>
    <img src="../assets/basket.png" alt="basket" class="shopping-basket">
    <!-- <button @click="isVisible = !isVisible">Press me</button> -->
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart'
}
</script>

<style scoped>
.shopping-basket {
  background-color: black;
  border: none;
  width: 35px;
  margin-top: 11px;
}
</style>