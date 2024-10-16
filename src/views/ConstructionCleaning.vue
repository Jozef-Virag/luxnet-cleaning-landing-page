<template>
  <div class="untree_co-section bg-light">
    <div class="container">
      <!-- Úvodný nadpis a popis -->
      <div class="row">
        <div class="col-12 text-center">
          <h1 :style="{ color: themeColor }" class="heading mt-5">Postavebné Upratovanie</h1>
          <p class="sub-heading mt-4">
            Naša služba postavebného upratovania je zameraná na dôkladné a hlboké čistenie priestorov po stavebných prácach. Používame profesionálne pomôcky a chémiu, aby sme zaistili čistotu a hygienu vašich nových alebo zrekonštruovaných priestorov. Ceny sú individuálne a dohodnuté po obhliadke.
          </p>
        </div>
      </div>

      <!-- Karty s výhodami -->
      <div class="row justify-content-center mt-5">
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
          <div class="card h-100">
            <div class="card-body text-center">
              <h5 class="card-title" :style="{ color: themeColor }">Bezplatná obhliadka</h5>
              <p class="card-text">
                Ponúkame bezplatnú obhliadku priestorov, na základe ktorej prispôsobíme služby vašim potrebám a požiadavkám.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
          <div class="card h-100">
            <div class="card-body text-center">
              <h5 class="card-title" :style="{ color: themeColor }">Profesionálna chémia a nástroje</h5>
              <p class="card-text">
                Používame špičkovú profesionálnu chémiu a vybavenie, vrátane vysávačov a mopov, aby sme dosiahli najlepšie výsledky.
              </p>
            </div>
          </div>
        </div>

        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
          <div class="card h-100">
            <div class="card-body text-center">
              <h5 class="card-title" :style="{ color: themeColor }">Hygienické postupy</h5>
              <p class="card-text">
                Dodržujeme prísne hygienické normy vrátane používania jednorazových pomôcok ako utierky, rukavice a čistiace prostriedky.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Zoznam ponúkaných služieb -->
      <div class="row justify-content-center mt-4">
        <div class="col-md-8">
          <p class="my-4 text-center disclaimer">
            <em>Ceny služieb sú dohodnuté individuálne na základe obhliadky a rozsahu upratovania.</em>
          </p>

          <ul class="list-unstyled ul-check primary mb-4" data-aos="fade-up" data-aos-delay="400">
            <li>Kuchyňa: utretie prachu, čistenie spotrebičov, odstraňovanie mastnoty, čistenie drezu a kuchynskej linky</li>
            <li>Kúpeľňa: čistenie obkladu, čistenie sprchy, vane, umývadla a WC, odstránenie plesní a vodného kameňa</li>
            <li>Obývacia izba: utretie prachu, vysávanie sedacej súpravy, čistenie povrchov</li>
            <li>Spálňa: vysávanie postele a čistenie nábytku</li>
            <li>Celý priestor: čistenie nábytkov zvnútra aj zvonku, čistenie dverí, zárubní, okenných parapetov a podláh</li>
          </ul>
        </div>
      </div>

      <!-- Sekcia Prečo si vybrať nás -->
      <div class="row justify-content-center mt-5">
        <div class="col-md-8 text-center">
          <h2 class="mb-4">Prečo si vybrať práve nás?</h2>
          <p>
            Naša spoločnosť ponúka profesionálne a spoľahlivé služby postavebného upratovania. Používame len najkvalitnejšie čistiace prostriedky a nástroje, aby sme zabezpečili 100% čistotu. Dôraz kladieme na dodržiavanie hygienických štandardov a precíznosť v každom detaile.
          </p>
          <p>
            Či už potrebujete upratať novostavbu alebo zrekonštruovaný priestor, naši odborníci sa postarajú o to, aby váš nový priestor bol pripravený na používanie bez akejkoľvek stopy po stavebných prácach.
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
