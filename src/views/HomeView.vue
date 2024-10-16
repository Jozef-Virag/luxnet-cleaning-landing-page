<template>
  <div class="mx-10">
    <Hero/>
    <Service1/>
  </div>
    <Service2/>
  <div class="mx-10">
    <Pricing/>
    <Advantage/>
    <!--  <Testimonial />-->
    <About/>
    <Contact/>
  </div>
</template>

<script setup>

import Pricing from "../components/Pricing.vue";
import Service1 from "../components/Service1.vue";
import Hero from "../components/Hero.vue";
import Service2 from "../components/Service2.vue";
import Contact from "../components/Contact.vue";
import Advantage from "../components/Advantage.vue";
import About from "../components/About.vue";
</script>

<style scoped>

</style>
