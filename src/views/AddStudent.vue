<template>
  <div>
    <img class="imgTop" alt="Chico logo" src="../assets/chitarre.jpg" />
    <div id="app">
      <h2 class="py-5 space text-center">
        Aggiungi un nuovo studente:
      </h2>
      <form class="row g-2 justify-content-center" @submit.prevent="onSubmit">
        <div class="col-md-3">
          <label for="nome" class="form-label"></label>
          <input
            id="nome"
            class="form-control"
            placeholder="Nome"
            v-model="student.nome"
            required
          />
        </div>
        <div class="col-md-3">
          <label for="cognome" class="form-label"></label>
          <input
            id="cognome"
            class="form-control"
            placeholder="Cognome"
            v-model="student.cognome"
            required
          />
        </div>
        <div class="col-md-2">
          <label class="form-label" for="date"></label>
          <input
            type="date"
            class="form-control"
            value="2017-06-01"
            v-model="student.date"
            required
          />
        </div>
        <div class="col-md-8">
          <label class="form-label" for="phone"></label>
          <input
            type="tel"
            id="phone"
            class="form-control"
            name="phone"
            placeholder="Telefono"
            pattern="[0-9]{10}"
            required
            v-model="student.telephone"
          />
        </div>
        <div class="col-md-8">
          <label class="form-label" for="email"></label>
          <input
            type="email"
            class="form-control"
            placeholder="E-mail"
            v-model="student.email"
          />
        </div>
        <div class="col-md-8">
          <p>Corso:</p>
          <select
            class="form-select"
            id="corso"
            v-model="student.corso"
            required
          >
            <option value="Chitarra Jazz" selected>Chitarra Jazz</option>
            <option value="Chitarra Classica">Chitarra Classica</option>
            <option value="Chitarra Blues">Chitarra Blues</option>
          </select>
        </div>
        <div class="col-md-8">
          <label for="description" class="form-label"></label>
          <textarea
            id="description"
            class="form-control"
            placeholder="Descrizione"
            v-model="student.description"
            required
          >
          </textarea>
        </div>
        <div class="col-md-8">
          <input type="submit" value="Aggiungi" class="btn button" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  data: function() {
    return {
      student: {}
    };
  },
  methods: {
    onSubmit: function() {
      this.$store.commit("AGGIUNGI_STUDENTE", this.student);
      this.$router.push({ name: "home" });
    }
  }
};
</script>
