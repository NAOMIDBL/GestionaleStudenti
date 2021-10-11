<template>
  <div>
    <img class="imgTop" alt="chitarre" src="../assets/chitarre.jpg" />
    <h2 class="text-center py-4">Corsi:</h2>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col column">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title" id="ChitarraJazz">Chitarra Jazz</h5>
            <ul>
              <li
                v-for="student in jazz"
                :key="student.student"
                :corso="student.corso"
              >
                {{ student.nome }}
                {{ student.cognome }}
                <router-link
                  v-bind:to="{
                    name: 'student-details',
                    params: { id: student.id }
                  }"
                >
                  <i class="float-left fas fa-angle-double-right fa iconColor">
                  </i>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col column">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title" id="ChitarraClassica">Chitarra Classica</h5>
            <ul>
              <li
                v-for="student in classica"
                :key="student.student"
                :corso="student.corso"
              >
                {{ student.nome }}
                {{ student.cognome }}
                <router-link
                  v-bind:to="{
                    name: 'student-details',
                    params: { id: student.id }
                  }"
                >
                  <i class=" float-left fas fa-angle-double-right fa iconColor">
                  </i>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col column">
        <div class="card h-100">
          <div class="card-body">
            <h5 class="card-title" id="ChitarraBlues">Chitarra Blues</h5>
            <ul>
              <li
                v-for="student in blues"
                :key="student.student"
                :corso="student.corso"
              >
                {{ student.nome }}
                {{ student.cognome }}
                <router-link
                  v-bind:to="{
                    name: 'student-details',
                    params: { id: student.id }
                  }"
                >
                  <i class="float-left fas fa-angle-double-right fa iconColor">
                  </i>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data: function() {
    return {
      student: {}
    };
  },
  methods: {},
  computed: {
    blues() {
      return this.$store.state.students.filter(
        student => student.corso == "Chitarra Blues"
      );
    },
    classica() {
      return this.$store.state.students.filter(
        student => student.corso == "Chitarra Classica"
      );
    },
    jazz() {
      return this.$store.state.students.filter(
        student => student.corso == "Chitarra Jazz"
      );
    }
  }
};
</script>
