<script setup>
import {themeColor} from "../data/items.js";

const heading = "Naše služby a cenník";
const description = "Pozrite si našu ponuku služieb a aktuálny cenník, aby ste si vybrali to najlepšie pre Vás.";
const buttonLabel = "Prejsť na cenník";
const pricingLink = "/cennik";
</script>

<template>
  <div class="untree_co-section bg-light" id="cennik">
    <div class="container">
      <div class="row justify-content-center text-center">
        <div class="col-lg-8">
          <h2 class="heading">{{ heading }}</h2>
          <p class="mb-4">{{ description }}</p>
          <a
              :href="pricingLink"
              class="btn btn-primary smoothscroll"
              style="margin-right: 5px"
              :style="[{ background: themeColor }, { borderColor: themeColor }]"
          >
            {{ buttonLabel }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>
