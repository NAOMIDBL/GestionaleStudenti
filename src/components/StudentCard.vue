<template>
  <div class="card w-95 mx-auto">
    <div class="card-body">
      <h4 class="card-title">
        <b>{{
          student.nome + " " + student.cognome + " " + " (" + student.date + ")"
        }}</b>
      </h4>
      <h5 class="card-text">
        {{ student.corso }}
        <router-link
          v-bind:to="{ name: 'student-details', params: { id: student.id } }"
        >
          <i class=" float-left fas fa-angle-double-right fa iconColor"></i>
        </router-link>
      </h5>
    </div>
  </div>
</template>

<script>
export default {
  props: ["student"],
  data: function() {
    return {};
  },
  methods: {}
};
</script>
