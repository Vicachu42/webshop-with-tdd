<template>
  <div class="body-block">
    <section class="info-block">
      <article class="info-text">
        <h1>Rent a Rikishi</h1>
        <h3>Sumo wrestling for a good cause</h3>
        <p>Take the chance to wrestle your favourite rikishi - and all for a good cause. The price includes not only the match, but also a practice session in the wrestler's beya, as well as your very own cotton mawashi.</p>
        <p>All proceedings will go to Médecins Sans Frontiers in their effort to fight COVID-19.</p>
        <p class="hakkeyoi">はっけよい!</p>
        <p><b>Hak-ke-yo-i</b> - <i>"Put some spirit into it"</i></p>
      </article>
      <img src="../assets/tachiai.jpg" alt="tachiai" id="tachiai">
    </section>
    <section>
      <article class="wrestler-bar">
        <h2>Wrestlers</h2>
      </article>
      <article class="product-block">
        <h1>skksjf</h1>
        <!-- <div class="wrestler-card">
          <img class="wrestler-pic" src="../assets/hakuho.jpg" alt="placeholder">
          <div class="wrestler-info">
            <p>Hakuho</p>
            <p>"rank": "Yokozuna",
            "height": "192 cm",
            "weight": "151 kg",
            "price": "&#165;1 000 000"</p>
          </div>
        </div>
        </div> -->
      </article>
    </section>
    <ProductItem />
  </div>
</template>

<script>
import ProductItem from '../components/ProductItem.vue';

export default {
  name: 'ProductView',
  components: {
    ProductItem
  }
}
</script>

<style scoped>
.body-block {
  width: 1000px;
  margin: auto;
  margin-top: 1em;
  padding: 1rem;
  background-color: white;
}

.info-block {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}

.info-text {
  display: flex;
  flex-direction: column;
}

#tachiai {
  width: 45%;
  margin-left: 1rem;
}

.wrestler-bar {
  width: 100%;
  background-color: #E8E8E8;
}

.wrestler-bar h2 {
  margin-left: 1rem;
}

.product-block {
  width: 100%;
  background-color: black;
  border-radius: 2%;
  display: flex;
  flex-direction: row;
}

/* .wrestler-card {
  display: flex;
  flex-direction: row;
  color: white;
}

.wrestler-pic {
  height: 300px;
} */

/* .wrestler-info {
  display: flex;
  flex-direction: column;
} */
</style>