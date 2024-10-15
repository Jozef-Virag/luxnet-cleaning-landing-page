<script setup>
import { themeColor } from "../data/items";
import mainPhoto from "/images/cleaning_service.png";

const service1Heading = "Upratovacie služby";
const service1SubHeading = "Profesionálne a spoľahlivé";
const service1Quote =
    '"Služby tejto firmy mi ušetrili množstvo času a starostí. Upratovanie bolo rýchle, kvalitné a výsledok prekonal moje očakávania."';
const personName = "Mária Nováková";
const designation = "Zákazníčka";
</script>

<template>
  <div class="untree_co-section">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-4">
          <span
              class="caption"
              data-aos="fade-up"
              data-aos-delay="0"
              :style="[{ color: themeColor }]"
          >{{ service1Heading }}</span
          >
          <h3 class="heading mb-4" data-aos="fade-up" data-aos-delay="100">
            {{ service1SubHeading }}
          </h3>
          <div class="mb-4" data-aos="fade-up" data-aos-delay="200">
            <p>
              Ponúkame kompletné upratovanie pre domácnosti a firmy. Naše
              skúsenosti a dôraz na detail zabezpečia dokonalý výsledok pri
              každej objednávke.
            </p>
            <ul class="list-unstyled ul-check primary mt-3">
              <li>Efektívne čistenie priestorov</li>
              <li>Individuálne prispôsobené služby</li>
              <li>Pravidelné aj jednorazové upratovanie</li>
              <li>Profesionálny a diskrétny personál</li>
              <li>Rýchla a flexibilná dostupnosť</li>
              <li>Upratovanie domácností aj kancelárií</li>
            </ul>
          </div>
          <div class="mb-4" data-aos="fade-up" data-aos-delay="300">
            <div class="untree_co-testimonial d-flex">
              <div class="text">
                <blockquote>
                  {{ service1Quote }}
                </blockquote>
                <div class="author d-flex mt-3">
                  <div class="pic mr-3">
                    <img src="https://ui-avatars.com/api/?name=Maria" alt="Image" class="img-fluid" />
                  </div>
                  <div>
                    <strong class="d-block">{{ personName }}</strong
                    ><span class="d-block">{{ designation }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-7" data-aos="fade-up" data-aos-delay="400">
          <img :src="mainPhoto" alt="Upratovacie služby" class="img-fluid img-shadow" />
        </div>
      </div>
    </div>
  </div>
</template>
