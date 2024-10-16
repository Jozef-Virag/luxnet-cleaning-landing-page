<template>
  <div class="untree_co-section bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 :style="{ color: themeColor }" class="heading mt-5">Upratovanie Firiem</h1>
          <p class="sub-heading mt-4">
            Ponúkame profesionálne upratovacie služby pre firemné priestory. Naša práca zahŕňa komplexné čistenie, ktoré zaistí čistotu a pohodlie pre vašich zamestnancov a návštevníkov. Ceny služieb sú dohodnuté individuálne podľa rozsahu prác a špecifických potrieb klienta.
          </p>
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div class="card h-100">
            <div class="card-body text-center">
              <h5 class="card-title" :style="{ color: themeColor }">Bezplatná obhliadka miesta</h5>
              <p class="card-text">
                Ponúkame bezplatnú obhliadku priestorov, kde detailne zistíme vaše potreby a prispôsobíme naše služby vašim požiadavkám.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div class="card h-100">
            <div class="card-body text-center">
              <h5 class="card-title" :style="{ color: themeColor }">Flexibilné upratovanie</h5>
              <p class="card-text">
                Naše služby sú prispôsobené vašim časovým potrebám, aby sme nenarušili chod vašej firmy. Upratovanie vieme zabezpečiť v čase, ktorý vám vyhovuje.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
          <div class="card h-100">
            <div class="card-body text-center">
              <h5 class="card-title" :style="{ color: themeColor }">Zabezpečenie špeciálnych požiadaviek</h5>
              <p class="card-text">
                Vieme zabezpečiť aj špecifické požiadavky, ako napríklad upratovanie počas víkendov, mimo pracovných hodín, alebo používanie špeciálnych nástrojov podľa vašich potrieb.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-4">
        <div class="col-md-8">
          <p class="my-4 text-xl disclaimer">
            <em>Ceny služieb sú na základe dohody po obhliadke priestorov a definovaní vašich požiadaviek.</em>
          </p>

          <ul class="list-unstyled ul-check primary mb-4" data-aos="fade-up" data-aos-delay="400">
            <li>Utretie prachu na všetkých otvorených plochách do 2,4m výšky</li>
            <li>Odstránenie odtlačkov z matných a lesklých plôch nábytku</li>
            <li>Umytie kuchynky</li>
            <li>Leštenie lesklých častí (zrkadlá, sklenené plochy)</li>
            <li>Vysypanie smetných nádob a vloženie nových vriec</li>
            <li>Umytie pracovných stolov (na základe povolenia klienta)</li>
            <li>Kompletné čistenie toaliet a umývadiel</li>
            <li>Vysávanie podlahy</li>
            <li>Umytie podlahy</li>
          </ul>
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <div class="col-md-8 text-center">
          <h2 class="mb-4">Prečo si vybrať práve nás?</h2>
          <p>
            Naša firma sa vyznačuje spoľahlivosťou, profesionálnym prístupom a dôrazom na detail. Naše služby sú flexibilné a prispôsobené potrebám každého klienta. Používame len ekologické a kvalitné čistiace prostriedky, aby sme zaistili nielen čistotu, ale aj zdravé a bezpečné prostredie.
          </p>
          <p>
            Náš cieľ je zabezpečiť, aby vaše pracovisko bolo čisté a príjemné pre všetkých zamestnancov aj návštevníkov. Pri pravidelných upratovacích službách vieme nastaviť časový rozvrh tak, aby sme minimálne narušili chod vašej firmy.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {themeColor} from "../data/items";
</script>

<style scoped>
.heading {
  font-size: 2.5rem;
  font-weight: bold;
}

.sub-heading {
  font-size: 1.2rem;
  color: #555;
}

.card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.card-text {
  font-size: 1rem;
  color: #555;
}

.disclaimer {
  color: #777;
  font-size: 0.9rem;
}

.ul-check li {
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
}

h2 {
  color: #333;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #666;
}
</style>
