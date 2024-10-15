<script setup>
import { siteName } from "../data/items";
</script>
<template>
  <nav class="site-nav dark js-site-navbar mb-5 site-navbar-target">
    <div class="container">
      <div class="site-navigation">
        <a class="logo m-0 float-left text-3xl" href="/#home">{{ siteName }}</a>
        <div class="flex justify-center">
          <ul class="js-clone-nav d-none d-lg-inline-block site-menu float-left ml-10 text-2xl">
            <li class="active">
              <a class="nav-link" href="#home-section">Domov</a>
            </li>
            <li><a class="nav-link" href="/#sluzby">Služby</a></li>
            <li><a class="nav-link" href="/#cennik">Cenník</a></li>
            <li><a class="nav-link" href="/#o-nas">O nás</a></li>
            <li><a class="nav-link" href="/#kontakt">Kontakt</a></li>
          </ul>
          <a
              class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block dark d-lg-none"
              data-target="#main-navbar"
              data-toggle="collapse"
              href="#"
          >
            <span></span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>
