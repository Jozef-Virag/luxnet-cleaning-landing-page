<script setup>
import { themeColor } from "../data/items";
import mainPhoto from "/images/about.jpg";

const heading = "O nás";
const subHeading = "LuxNet – Profesionálne upratovacie služby";
const totalMembers = "20";
const totalTeam = "10";
</script>

<template>
  <div class="untree_co-section" id="o-nas">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-lg-8" data-aos="fade-up" data-aos-delay="100">
          <img :src="mainPhoto" alt="Image" class="img-fluid" />
        </div>
        <div class="col-lg-4">
          <div class="mb-4" data-aos="fade-up" data-aos-delay="0">
            <span class="caption" :style="[{ color: themeColor }]">{{ heading }}</span>
            <h2 class="heading">{{ subHeading }}</h2>
          </div>
          <div class="mb-4" data-aos="fade-up" data-aos-delay="100">
            <p>
              V našej firme LuxNet sa špecializujeme na poskytovanie profesionálnych upratovacích služieb
              pre domácnosti, kancelárie a komerčné priestory. Naša starostlivosť a pozornosť
              k detailom zaručujú čisté a príjemné prostredie pre všetkých našich zákazníkov.
            </p>
            <p>
              Naši špecialisti zabezpečujú kvalitné čistenie
              všetkých typov povrchov a priestorov, pričom používame účinné prostriedky.
              Sme hrdí na dôveru našich klientov a na partnerstvá, ktoré s nimi budujeme.
            </p>
          </div>
          <ul class="list-unstyled ul-check primary mb-4" data-aos="fade-up" data-aos-delay="200">
            <li>Profesionálny prístup a spoľahlivosť</li>
            <li>Široká škála upratovacích služieb</li>
            <li>Čistenie s dôrazom na kvalitu</li>
          </ul>
          <div class="row count-numbers">
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="0">
              <span class="counter d-block">
                <span :data-number="totalMembers">{{ totalMembers }}</span><span>+</span>
              </span>
              <span class="caption-2">Spokojných zákazníkov</span>
            </div>
            <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <span class="counter d-block">
                <span :data-number="totalTeam">{{ totalTeam }}</span>
              </span>
              <span class="caption-2">Členov tímu</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
