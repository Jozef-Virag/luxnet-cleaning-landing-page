<template>
  <div class="untree_co-section bg-light">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h1 :style="{ color: themeColor }" class="heading mt-5">Umývanie okien</h1>
          <p class="sub-heading mt-4">
            Cenník našich služieb umývania okien. Vyberte si službu a zistite viac o možnostiach umývania a čistenia
            sklenených plôch.
          </p>
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <div class="col-md-8">
          <p class="my-4 text-center disclaimer">
            <em>Uvedené ceny sú orientačné. Presná cena bude stanovená na základe obhliadky priestoru a konkrétnych požiadaviek. Pre viac informácií nás neváhajte kontaktovať.</em>
          </p>
          <table class="table table-bordered table-auto">
            <thead>
            <tr>
              <th>Úkon</th>
              <th>Cena</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Žalúzie vnútorné</td>
              <td>2,00 € / ks</td>
            </tr>
            <tr>
              <td>Žalúzie vonkajšie</td>
              <td>5,00 € / ks</td>
            </tr>
            <tr>
              <td>Jednokrídlové okno</td>
              <td>7,00 € / ks</td>
            </tr>
            <tr>
              <td>Dvojkrídlové okno</td>
              <td>11,00 € / ks</td>
            </tr>
            <tr>
              <td>Trojkrídlové okno</td>
              <td>15,00 € / ks</td>
            </tr>
            <tr>
              <td>Štvorkrídlové okno</td>
              <td>18,00 € / ks</td>
            </tr>
            <tr>
              <td>Balkónové okno</td>
              <td>20,00 € / ks</td>
            </tr>
            <tr>
              <td>Francúzske okno</td>
              <td>20,00 € / ks</td>
            </tr>
            <tr>
              <td>Ostatné (výklady, sklené tabule, atď.)</td>
              <td>Na základe dohody</td>
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

</style>
