<template>
  <div>
    <p>Cart item</p>
    <article>
      <ul>
        <li></li>
      </ul>
    </article>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  data() {
    return {
      rikishi: '',
    }
  },
  methods: {
    async getRikishi() {
      const response = await fetch('http://localhost/api/products');
      const data = await response.json();
      console.log(data);

      this.rikishi = await data;
    }
  }
}
</script>

<style>

</style>