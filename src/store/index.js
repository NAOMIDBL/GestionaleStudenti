import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    prossimoId: 5,
    students: [
      {
        id: 1,
        nome: "Giovanni",
        cognome: "Fiero",
        date: "2015-06-01",
        telephone: "3315246384",
        email: "Fiero.2015@outlook.com",
        description:
          "Abita a Buttigliera d'Asti con i nonni, attento, ama suonare ma non fare gli eserci, solitamente 1 lezione a settimana da 1 ora",
        corso: "Chitarra Jazz"
      },
      {
        id: 2,
        nome: "Viola",
        cognome: "Ragusa",
        date: "1980-09-11",
        telephone: "3336548921",
        email: "ragusa.viola@outlook.com",
        description:
          "Vive a Carmagnola ha due figli e le piace ascolatre le orchestre, solitamente 2 lezioni al mese da 1 ora.",
        corso: "Chitarra Classica"
      },
      {
        id: 3,
        nome: "Alessio",
        cognome: "Pigna",
        date: "2005-12-30",
        telephone: "3483583829",
        email: "alessio.05@hotmail.com",
        description:
          "Vive a Baldissero, ha un gruppo i -RadiFridi- e adora la pallavolo,solitamente 2 lezioni al mese da 2 ore. ",
        corso: "Chitarra Blues"
      },
      {
        id: 4,
        nome: "Lara",
        cognome: "Allea",
        date: "2001-04-16",
        telephone: "3489573825",
        email: "laraallea@yahoo.com",
        description:
          "Vive a Santena, ha un talento innato suona arpa, piano e chitarra, iperattiva, solitamente 1 lezione a settimana da 30 min ",
        corso: "Chitarra Jazz"
      }
    ],
    ore: 0
  },
  mutations: {
    AGGIUNGI_STUDENTE: function(state, student) {
      student.id = state.prossimoId;
      state.prossimoId++;
      state.students.push(student);
    },
    INCREMENTA: function(state) {
      state.ore++;
    },
    DECREMENTA: function(state) {
      state.ore--;
    }
  },
  actions: {},
  modules: {},
  getters: {
    getStudentById: state => id => {
      return state.students[id - 1];
    },
    numeroStud: function(state) {
      return state.students.length;
    }
  }
});
