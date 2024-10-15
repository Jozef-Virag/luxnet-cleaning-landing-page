<script setup>

import constructionIcon from "/images/icon/construction.png";
import windowIcon from "/images/icon/window.png";
import cleaningIcon from "/images/icon/cleaning.png";
import officeIcon from "/images/icon/office.png";
import scrubberIcon from "/images/icon/scrubber.png"
import carpetIcon from "/images/icon/carpet.png"

import { themeColor } from "../data/items";
const heading = "Služby";
const subHeading = "Vyberte si niektorú z našich služieb a zistite cenu";
const startButtonName = "Zistiť viac";
const services = [
  {
    name: "Čistenie",
    image: cleaningIcon,
    link: "/cistenie",
  },
  {
    name: "Umývanie okien",
    image: windowIcon,
    link: "/umyvanie-okien",
  },
  {
    name: "Firemné upratovanie",
    image: officeIcon,
    link: "/firemne-upratovanie",
  },
  {
    name: "Postavebné upratovanie",
    image: constructionIcon,
    link: "/postavebne-upratovanie",
  },
  {
    name: "Strojové čistenie podláh",
    image: scrubberIcon,
    link: "/strojove-cistenie",
  },
  {
    name: "Tepovanie",
    image: carpetIcon,
    link: "/tepovanie",
  },
];
</script>

<template>
  <div class="untree_co-section bg-light">
    <div class="container">
      <div class="row pricing-title">
        <div class="col-12 text-center" data-aos="fade-up" data-aos-delay="0">
          <h2 class="heading">{{ heading }}</h2>
          <p>{{ subHeading }}</p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-10">
          <div class="row">
            <div
                class="col-lg-4 mt-4"
                v-for="(service, index) in services"
                :key="index"
                data-aos="fade-up"
                :data-aos-delay="(index + 1) * 100"
            >
              <div class="pricing">
                <div class="body text-center">
                  <div class="icon-container flex justify-center">
                    <img :src="service.image" :alt="service.name" :style="{ fill: themeColor }" />
                  </div>
                  <div class="service-details">
                    <span class="d-block plan" style="color: black">{{ service.name }}</span>
                  </div>
                  <p class="text-center mb-0">
                    <a
                        :href="service.link"
                        class="btn btn-outline-primary"
                        :style="[{ color: themeColor }, { borderColor: themeColor }]"
                    >{{ startButtonName }}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn:hover{
  color: white !important;
}

.icon-container {
  text-align: center;
  margin-bottom: 1rem;
}
.icon-container img {
  width: 80px;
  height: auto;
  fill: var(--primary-color);
}
.service-details {
  text-align: center;
  margin-bottom: 1rem;
  font-size: 1.25rem;
}
.plan {
  font-weight: bold;
}
</style>
