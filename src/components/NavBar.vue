<template>
  <div>
    <nav class="navbar navbar-expand-lg  fixed-top nav justify-content-center">
      <a class="nav-link">
        <router-link v-bind:to="{ name: 'home' }">
          <img
            class="navbar-brand fixed-top logoTop"
            alt="Chico logo"
            src="../assets/logo.png"
          />
        </router-link>
      </a>
      <div id="nav" class="navbarNav">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link">
              <router-link v-bind:to="{ name: 'corsi' }">
                <i class="fas fa-list-ul fa-3x iconColor"></i>
              </router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link v-bind:to="{ name: 'home' }">
                <i class="far fa-address-book fa-3x iconColor"></i>
              </router-link>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link">
              <router-link v-bind:to="{ name: 'add-student' }">
                <i class=" fas fa-plus-circle fa-3x iconColor"></i>
              </router-link>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
