<script setup>
import {contactInfo} from "../data/items";

const copyrightText = "Copyright 2024 LuxNet, All rights reserved.";
const column1Heading = "O nás";
const column1Text =
    "LuxNet poskytuje komplexné upratovacie služby, vrátane postavebného upratovania, čistenia a pravidelnej údržby priestorov. Kvalita a spoľahlivosť sú našou prioritou.";
const column2Heading = "Služby";
const column3Heading = "Projekty";
const column4Heading = "Kontakt";

const connectHeading = "Sledujte nás";

const socialItems = [
  {
    link: "https://www.instagram.com/",
    icon: "icon-instagram",
  },
  {
    link: "https://www.twitter.com/",
    icon: "icon-twitter",
  },
  {
    link: "https://www.facebook.com/",
    icon: "icon-facebook",
  },
  {
    link: "https://www.linkedin.com/",
    icon: "icon-linkedin",
  },
  {
    link: "https://www.pinterest.com/",
    icon: "icon-pinterest",
  },
];
</script>

<template>
  <div class="site-footer">
    <div class="mx-10">
      <div class="footer-dots"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="widget">
              <h3>{{ column1Heading }}</h3>
              <p>{{ column1Text }}</p>
            </div>
            <div class="widget">
              <h3>{{ connectHeading }}</h3>
              <ul class="list-unstyled social">
                <li style="margin-right: 4px">
                  <a :href="socialItems[0].link"
                  ><span :class="socialItems[0].icon"></span
                  ></a>
                </li>
                <li style="margin-right: 4px">
                  <a :href="socialItems[1].link"
                  ><span :class="socialItems[1].icon"></span
                  ></a>
                </li>
                <li style="margin-right: 4px">
                  <a :href="socialItems[2].link"
                  ><span :class="socialItems[2].icon"></span
                  ></a>
                </li>
                <li style="margin-right: 4px">
                  <a :href="socialItems[3].link"
                  ><span :class="socialItems[3].icon"></span
                  ></a>
                </li>
                <li>
                  <a :href="socialItems[4].link"
                  ><span :class="socialItems[4].icon"></span
                  ></a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2 ml-auto">
            <div class="widget">
              <h3>{{ column2Heading }}</h3>
              <ul class="list-unstyled float-left links">
                <li><a href="#">Postavebné upratovanie</a></li>
                <li><a href="#">Čistenie okien</a></li>
                <li><a href="#">Hĺbkové čistenie</a></li>
                <li><a href="#">Pravidelné upratovanie</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="widget">
              <h3>{{ column3Heading }}</h3>
              <ul class="list-unstyled float-left links">
                <li><a href="#">Upratovanie kancelárií</a></li>
                <li><a href="#">Upratovanie domácností</a></li>
                <li><a href="#">Špeciálne upratovacie projekty</a></li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3">
            <div class="widget">
              <h3>{{ column4Heading }}</h3>
              <address>{{ contactInfo.address }}</address>
              <ul class="list-unstyled links mb-4">
                <li>
                  <a :href="'tel://' + contactInfo.phone1">{{
                      contactInfo.phone1
                    }}</a>
                </li>
                <li>
                  <a :href="'mailto:' + contactInfo.email"
                  ><span>{{ contactInfo.email }}</span></a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="row mt-5">
          <div class="col-12 text-center">
            <p>
              {{ copyrightText }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
