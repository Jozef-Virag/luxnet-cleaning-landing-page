<script setup>
import { themeColor } from "../data/items";

const heroHeading = "Profesionálne upratovacie služby pre váš domov a firmu";
const buttonSeeFeature = "Naše služby";
const buttonPricing = "Cenník";
</script>

<template>
  <div class="untree_co-hero" id="domov">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12">
          <div class="dots max-sm:hidden"></div>
          <div class="row align-items-center">
            <div
                class="col-lg-7 ml-auto order-lg-2"
                data-aos="fade-right"
                data-aos-delay="400"
            >
              <img
                  src="/images/hero.png"
                  height="325"
                  width="175"
                  alt="Upratovacie služby"
                  class="img-fluid align-middle mx-auto lg:ml-32"
              />
            </div>
            <div class="col-lg-5">
              <h1 class="heading" data-aos="fade-up" data-aos-delay="0">
                {{ heroHeading }}
              </h1>
              <div class="excerpt" data-aos="fade-up" data-aos-delay="100">
                <p>
                  Spoľahlivé a efektívne upratovanie pre domy, kancelárie aj
                  komerčné priestory. Naše služby sú prispôsobené vašim
                  potrebám a zaručia dokonalú čistotu.
                </p>
              </div>
              <div class="d-flex justify-content-start" data-aos="fade-up" data-aos-delay="100">
                <a
                    href="#sluzby"
                    class="btn btn-primary smoothscroll"
                    style="margin-right: 5px"
                    :style="[{ background: themeColor }, { borderColor: themeColor }]"
                >
                  {{ buttonSeeFeature }}
                </a>
                <a
                    href="#cennik"
                    class="btn btn-outline-primary smoothscroll pricing"
                    :style="[{ color: themeColor }, { borderColor: themeColor }]"
                >
                  {{ buttonPricing }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pricing:hover {
  color: #fff !important;
}

.btn-primary,
.btn-outline-primary {
  height: 50px;
}
</style>
