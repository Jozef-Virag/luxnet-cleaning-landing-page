<template>
  <div class="untree_co-section bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 :style="{ color: themeColor }" class="heading mt-5">Tepovanie</h1>
          <p class="sub-heading mt-4">
            Naša profesionálna služba tepovania je určená na dokonalé vyčistenie nábytku a kobercov. Zameriavame sa na poskytovanie vysokej kvality a spokojných zákazníkov. Naše služby sú prispôsobené vašim potrebám.
          </p>
        </div>
      </div>

      <div class="row justify-content-center mt-4">
        <div class="col-md-10">
          <p class="my-4 text-center disclaimer">
            <em>Uvedené ceny sú orientačné. Presná cena bude stanovená na základe obhliadky priestoru a konkrétnych požiadaviek. Pre viac informácií nás neváhajte kontaktovať.</em>
          </p>

          <table class="table table-bordered table-auto">
            <thead>
            <tr>
              <th>Typ služby</th>
              <th>Jednotková Cena</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Trojsedačka</td>
              <td>50€</td>
            </tr>
            <tr>
              <td>Rohová sedačka</td>
              <td>55€</td>
            </tr>
            <tr>
              <td>Dvojsedačka</td>
              <td>40€</td>
            </tr>
            <tr>
              <td>Účková sedačka</td>
              <td>75€</td>
            </tr>
            <tr>
              <td>Kreslo</td>
              <td>20€</td>
            </tr>
            <tr>
              <td>Taburetka</td>
              <td>15€</td>
            </tr>
            <tr>
              <td>Stolička</td>
              <td>3,50€</td>
            </tr>
            <tr>
              <td>Vankúš</td>
              <td>6€</td>
            </tr>
            <tr>
              <td>Matrac 90cm x 220cm</td>
              <td>25€</td>
            </tr>
            <tr>
              <td>Koberec - krátky vlas</td>
              <td>od 15€</td>
            </tr>
            <tr>
              <td>Koberec - dlhý vlas</td>
              <td>od 25€</td>
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
import { themeColor } from "../data/items";
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
