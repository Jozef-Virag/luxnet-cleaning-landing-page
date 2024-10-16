<template>
  <div class="untree_co-section bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center mt-4">
          <h1 :style="{ color: themeColor }" class="heading mt-5">Strojové Čistenie Podláh</h1>
          <p class="sub-heading mt-4">
            Naša spoločnosť ponúka jednorazové alebo pravidelné strojové čistenie podláh pre rôzne druhy priestorov. Používame profesionálnu techniku a čistiace prostriedky Kärcher, ktoré zaistia dokonalú čistotu aj v tých najnáročnejších podmienkach. Ceny sú dohodnuté individuálne po obhliadke.
          </p>
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div class="card h-100">
            <div class="card-body text-center">
              <h5 class="card-title" :style="{ color: themeColor }">Rôzne druhy podláh</h5>
              <p class="card-text">
                Čistíme PVC podlahy, keramické dlažby, drevené a laminátové podlahy, priemyselné a garážové podlahy, a dokonca aj schodiská.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div class="card h-100">
            <div class="card-body text-center">
              <h5 class="card-title" :style="{ color: themeColor }">Profesionálna technológia</h5>
              <p class="card-text">
                Používame modernú čistiacu techniku, ktorá zabezpečuje efektívne odstránenie aj tej najzažratejšej špiny vrátane vodného kameňa, syntetických olejov a ropných látok.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
          <div class="card h-100">
            <div class="card-body text-center">
              <h5 class="card-title" :style="{ color: themeColor }">Výhody strojového čistenia</h5>
              <p class="card-text">
                Vďaka technológii odsávania sú nečistoty ihneď odstránené z povrchu, čím sa zabráni ich opätovnému zatláčaniu do podlahy.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="row justify-content-center mt-4 d-flex align-items-center">
        <div class="col-md-6 d-flex justify-content-center">
          <img :src="ScrubberPhoto" alt="Stroj na čistenie podlahy" class="img-fluid w-72" />
        </div>

        <div class="col-md-6 d-flex align-items-center">
          <ul class="list-unstyled ul-check primary mb-4">
            <li>Čistenie PVC podláh</li>
            <li>Čistenie keramických dlažieb</li>
            <li>Čistenie drevených a laminátových podláh</li>
            <li>Čistenie priemyselných a garážových podláh</li>
            <li>Čistenie schodiska</li>
            <li>Odstraňovanie vodného kameňa, ropných látok a syntetických olejov</li>
          </ul>
        </div>
      </div>


      <div class="row justify-content-center mt-5">
        <div class="col-md-8 text-center">
          <h2 class="mb-4">Prečo si vybrať naše strojové čistenie podláh?</h2>
          <p>
            Ponúkame profesionálne riešenia na čistenie podláh pre široké spektrum priestorov ako obchodné centrá, sklady, novostavby, výrobné haly a mnoho ďalších. Naši zaškolení zamestnanci sú vybavení špičkovou technikou, čo nám umožňuje dosiahnuť vynikajúce výsledky na malých aj veľkých plochách.
          </p>
          <p>
            S individuálnym prístupom a dôkladným čistením každého typu podlahy, vrátane zažratých nečistôt, garantujeme perfektné výsledky a spokojnosť našich klientov.
          </p>
        </div>
      </div>
      <div class="text-center mt-4">
        <a href="/cennik" class="btn btn-primary" :style="{ background: themeColor, borderColor: themeColor }">
          Späť na ponuku služieb
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {themeColor} from "../data/items";
import ScrubberPhoto from "/images/scrubber.png"
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
