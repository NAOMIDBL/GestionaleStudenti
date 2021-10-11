<template>
  <div>
    <img class="imgTop" alt="chitarre" src="../assets/chitarre.jpg" />
    <div class="tot justify-content-center">
      <h3 class="py-5 d-inline">Ore di lavoro:&emsp;</h3>
      <i
        v-on:click="decrementaOre"
        class="d-inline fas fa-minus-circle fa-1x iconColor"
      >
      </i>
      <h3 class="py-5 d-inline">&emsp;{{ contatoreVal }}&emsp;</h3>
      <i
        v-on:click="incrementaOre"
        class="fas fa-plus-circle fa-1x d-inline iconColor"
      >
      </i>
    </div>
    <div id="app" class="container-fluid pad">
      <div class="row">
        <div class="col">
          <div class="col justify-content-center py-1 column">
            <h3 class="py-5">Studenti: {{ numeroStud }}</h3>
            <StudentCard
              v-for="elem in students"
              :key="elem.id"
              :student="elem"
            >
            </StudentCard>
          </div>
        </div>
        <div class="col ">
          <h3 class="py-5">Ultimi Brani</h3>
          <div
            id="carouselExampleCaptions"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="@/assets/giorgiaonmymind.jpeg"
                  class="d-block w-100 column"
                  alt="1"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="@/assets/St-Louis-Blues.png"
                  class="d-block w-100 column"
                  alt="2"
                />
              </div>
              <div class="carousel-item">
                <img
                  src="@/assets/All-Of-Me.jpeg"
                  class="d-block w-100 column"
                  alt="3"
                />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span class="carousel-control-prev-icon" aria-hidden="true">
              </span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span class="carousel-control-next-icon" aria-hidden="true">
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StudentCard from "@/components/StudentCard.vue";
export default {
  components: {
    StudentCard
  },
  data: function() {
    return {};
  },
  methods: {
    incrementaOre: function() {
      console.log("incrementa ore");
      this.$store.commit("INCREMENTA");
    },
    decrementaOre: function() {
      console.log("decrementa ore");
      this.$store.commit("DECREMENTA");
    }
  },
  computed: {
    students: function() {
      return this.$store.state.students;
    },
    numeroStud: function() {
      return this.$store.getters.numeroStud;
    },
    contatoreVal: function() {
      return this.$store.state.ore;
    }
  }
};
</script>
