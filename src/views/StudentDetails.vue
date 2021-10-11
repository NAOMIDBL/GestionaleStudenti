<template>
  <div id="app">
    <img class="imgTop" alt="chitarre" src="../assets/chitarre.jpg" />
    <div class="card cardStyle">
      <h5 class="card-header">
        <b>{{ student.nome }} {{ student.cognome }} | {{ student.date }}</b>
      </h5>
      <div class="card-body">
        <h5 class="card-title">{{ student.corso }}</h5>
        <p class="card-text">{{ student.description }}</p>
        <div class="accordion py-4 " id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Contatti
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <ul>
                  <li>
                    <i class="fas fa-phone-alt"></i>&nbsp;
                    <a :href="'tel:' + student.telephone">
                      {{ student.telephone }}
                    </a>
                  </li>
                  <li>
                    <i class="fas fa-envelope"></i>&nbsp;
                    <a :href="'mailto:' + student.email">
                      {{ student.email }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <br />
          <router-link
            v-bind:to="{ name: 'home' }"
            class="btn btn-primary button"
            >Torna alla lista</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ["id"],
  data: function() {
    return {
      student: {}
    };
  },
  created: function() {
    this.student = this.$store.getters.getStudentById(Number(this.id));
  }
};
</script>
