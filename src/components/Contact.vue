<script setup>
import {contactInfo, themeColor} from "../data/items";

const heading = "Kontaktujte nás";
const subHeading = "";
const contactInfoHeading = "Kontaktné informácie";
const buttonSendMessage = "Odoslať správu";
const labels = {
  firstName: "Meno",
  lastName: "Priezvisko",
  email: "Email",
  message: "Správa",
};
</script>

<template>
  <div id="kontakt" class="untree_co-section">
    <div class="container">
      <div class="row mb-4" data-aos="fade-up" data-aos-delay="0">
        <div class="col-12 text-center">
          <h2 class="heading">{{ heading }}</h2>
          <p>{{ subHeading }}</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-7">
          <form class="contact-form" data-aos="fade-up" data-aos-delay="100">
            <div class="row">
              <div class="col-6">
                <div class="form-group">
                  <label class="" for="fname">{{ labels.firstName }}</label>
                  <input id="fname" class="form-control" type="text"/>
                </div>
              </div>
              <div class="col-6">
                <div class="form-group">
                  <label class="" for="lname">{{ labels.lastName }}</label>
                  <input id="lname" class="form-control" type="text"/>
                </div>
              </div>
            </div>
            <div class="form-group">
              <label class="" for="email">{{ labels.email }}</label>
              <input id="email" class="form-control" type="email"/>
            </div>
            <div class="form-group">
              <label class="" for="message">{{ labels.message }}</label>
              <textarea
                  id="message"
                  class="form-control"
                  cols="30"
                  name=""
                  rows="5"
              ></textarea>
            </div>
            <button
                :style="[
                { backgroundColor: themeColor },
                { borderColor: themeColor },
              ]"
                class="btn btn-primary"
                type="submit"
            >
              {{ buttonSendMessage }}
            </button>
          </form>
        </div>
        <div class="col-lg-4 ml-auto" data-aos="fade-up" data-aos-delay="200">
          <h3 class="h5 mb-4">{{ contactInfoHeading }}</h3>
          <ul class="list-unstyled ul-links mb-4">
            <li>
              <a href="https://www.google.com/maps?q=1474/2+Coboriho,+Nitra,+949+01,+Slovakia" target="_blank" class="d-flex"
              ><span class="mt-1 icon-room mr-2"></span
              ><span>{{ contactInfo.address }}</span></a
              >
            </li>
            <li>
              <a :href="'tel://' + contactInfo.phone1" class="d-flex"
              ><span class="mt-1 icon-phone mr-2"></span
              ><span>{{ contactInfo.phone1 }}</span></a
              >
            </li>
            <li>
              <a :href="'mailto:' + contactInfo.email" class="d-flex"
              ><span class="mt-1 icon-envelope mr-2"></span
              ><span>{{ contactInfo.email }}</span></a
              >
            </li>
            <li>
              <a :href="[contactInfo.website]" class="d-flex" target="_blank"
              ><span class="mt-1 icon-globe mr-2"></span
              ><span>{{ contactInfo.website }}</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
