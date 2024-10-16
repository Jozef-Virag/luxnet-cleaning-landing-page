<template>
  <div class="untree_co-section bg-light">
    <div class="container ">
      <div class="row">
        <div class="col-12 text-center">
          <h1 :style="{ color: themeColor }" class="heading mt-5">Čistenie</h1>
          <p class="sub-heading mt-4">
            Naša profesionálna služba čistenia je určená na dokonalé vyčistenie priestorov od prachu, nečistôt a
            nečistotných škvŕn. Zameriavame sa na poskytovanie vysokej kvality a spokojných zákazníkov. Naše čistenie
            pokrýva domáce aj komerčné priestory, kde používame ekologické a bezpečné čistiace prostriedky.
          </p>
        </div>
      </div>

      <div class="row justify-content-center mt-4">
        <div class="col-md-8">
          <p class="my-4 text-center disclaimer">
            <em>Uvedené ceny sú orientačné. Presná cena bude stanovená na základe obhliadky priestoru a konkrétnych požiadaviek. Pre viac informácií nás neváhajte kontaktovať.</em>
          </p>

          <table class="table table-bordered table-auto">
            <thead>
            <tr>
              <th>Úkon</th>
              <th>Cena jednorázovo</th>
              <th>Cena pravidelne</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td></td>
              <td :style="{ color: themeColor }" class="text-center"><strong>Byty</strong></td>
              <td></td>
            </tr>
            <tr>
              <td>Garsonka</td>
              <td>od 40€</td>
              <td>na základe obhliadky</td>
            </tr>
            <tr>
              <td>1 izbový byt</td>
              <td>od 60€</td>
              <td>na základe obhliadky</td>
            </tr>
            <tr>
              <td>2 izbový byt</td>
              <td>od 80€</td>
              <td>na základe obhliadky</td>
            </tr>
            <tr>
              <td>3 izbový byt</td>
              <td>od 100€</td>
              <td>na základe obhliadky</td>
            </tr>
            <tr>
              <td>4 izbový byt</td>
              <td>od 150€</td>
              <td>na základe obhliadky</td>
            </tr>
            </tbody>
            <tbody>
            <tr>
              <td></td>
              <td :style="{ color: themeColor }" class="text-center"><strong>Domy</strong></td>
              <td></td>
            </tr>
            <tr>
              <td>do 70m2</td>
              <td>na základe obhliadky</td>
              <td>na základe obhliadky</td>
            </tr>
            <tr>
              <td>do 100m2</td>
              <td>na základe obhliadky</td>
              <td>na základe obhliadky</td>
            </tr>
            <tr>
              <td>do 130m2</td>
              <td>na základe obhliadky</td>
              <td>na základe obhliadky</td>
            </tr>
            <tr>
              <td></td>
              <td :style="{ color: themeColor }" class="text-center"><strong>Garáže, sklady, pivnice</strong></td>
              <td></td>
            </tr>
            <tr>
              <td>Garáž</td>
              <td>na základe obhliadky</td>
              <td>na základe obhliadky</td>
            </tr>
            <tr>
              <td>Sklad</td>
              <td>na základe obhliadky</td>
              <td>na základe obhliadky</td>
            </tr>
            <tr>
              <td>Pivnica</td>
              <td>na základe obhliadky</td>
              <td>na základe obhliadky</td>
            </tr>
            </tbody>
          </table>

          <div class="text-center mt-4">
            <a href="/cennik" class="btn btn-primary" :style="{ background: themeColor, borderColor: themeColor }">
              Späť na ponuku služieb
            </a>
          </div>
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

.table {
  width: 100%;
  text-align: left;
}

.table th,
.table td {
  padding: 1rem;
  text-align: center;
}

.table th {
  background-color: #f8f9fa;
}

.table-bordered {
  border: 1px solid #dee2e6;
}

.table tr:hover {
  background-color: #f1f1f1;
  transition: background-color 0.3s ease;
}

.disclaimer {
  color: #777;
  font-size: 0.9rem;
}
</style>
