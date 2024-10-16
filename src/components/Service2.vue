<script setup>
import cleaningPhoto from "/images/cistenie.jpg";
import windowsPhoto from "/images/okna.jpeg";
import afterBuilder from "/images/postavebne.jpg";
import officePhoto from "/images/kancelaria.jpg";

import constructionIcon from "/images/icon/construction.png";
import windowIcon from "/images/icon/window.png";
import cleaningIcon from "/images/icon/cleaning.png";
import officeIcon from "/images/icon/office.png";
import {themeColor} from "../data/items.js";

const items = [
  {
    id: 1,
    name: "Profesionálne čistenie",
    des: "Zabezpečujeme dôkladné čistenie všetkých typov priestorov vrátane kancelárií a domácností.",
    photo: cleaningPhoto,
    icon: cleaningIcon
  },
  {
    id: 2,
    name: "Umývanie okien",
    des: "Umytie okien na profesionálnej úrovni, zaručujeme dokonalú čistotu.",
    photo: windowsPhoto,
    icon: windowIcon
  },
  {
    id: 3,
    name: "Postavebné upratovanie",
    des: "Kompletné upratovanie priestorov po stavebných prácach, rýchlo a kvalitne.",
    photo: afterBuilder,
    icon: constructionIcon
  },
  {
    id: 4,
    name: "Upratovanie firiem",
    des: "Profesionálne a dôkladné upratovanie firemných priestorov.",
    photo: officePhoto,
    icon: officeIcon
  },
];
</script>

<template>
  <div class="untree_co-section bg-light" id="sluzby">
    <div class="container mx-10">
      <div class="row justify-content-between">
        <div class="col-lg-5 order-lg-2 js-custom-dots">
          <a
              href="#"
              class="service link horizontal d-flex active"
              data-aos="fade-left"
              data-aos-delay="0"
          >
            <div class="service-icon color-1 mb-4">
              <img :src="items[0].icon" alt="Icon" class="icon-centered" />
            </div>
            <div class="service-contents">
              <h3>{{ items[0].name }}</h3>
              <p>{{ items[0].des }}</p>
            </div>
          </a>
          <a
              href="#"
              class="service link horizontal d-flex"
              data-aos="fade-left"
              data-aos-delay="100"
          >
            <div class="service-icon color-2 mb-4">
              <img :src="items[1].icon" alt="Icon" class="icon-centered" />
            </div>
            <div class="service-contents">
              <h3>{{ items[1].name }}</h3>
              <p>{{ items[1].des }}</p>
            </div>
          </a>
          <a
              href="#"
              class="service link horizontal d-flex"
              data-aos="fade-left"
              data-aos-delay="200"
          >
            <div class="service-icon color-3 mb-4">
              <img :src="items[2].icon" alt="Icon" class="icon-centered" />
            </div>
            <div class="service-contents">
              <h3>{{ items[2].name }}</h3>
              <p>{{ items[2].des }}</p>
            </div>
          </a>
          <a
              href="#"
              class="service link horizontal d-flex"
              data-aos="fade-left"
              data-aos-delay="300"
          >
            <div class="service-icon color-4 mb-4">
              <img :src="items[3].icon" alt="Icon" class="icon-centered" />
            </div>
            <div class="service-contents">
              <h3>{{ items[3].name }}</h3>
              <p>{{ items[3].des }}</p>
            </div>
          </a>
        </div>
        <div class="col-lg-7">
          <div class="img-shadow">
            <div class="owl-single no-dots owl-carousel">
              <div class="item max-h-70" v-for="item in items" :key="item.id">
                <img :src="item.photo" alt="Image" class="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-centered {
  display: block;
  margin: 0 auto;
  filter: brightness(0) invert(1);
  width:30px;
  height: 30px;
}

.service-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;

}
</style>
