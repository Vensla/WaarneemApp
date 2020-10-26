<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Filter</h1>
        <b-form-input id="range-1" v-model="filter" type="range" min="0" max="500"></b-form-input>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-6">
        <h1>Shifts</h1>
      </div>
      <div class="col-6">
        <button class="btn btn-primary float-right mt-2 text-uppercase" v-b-toggle.sidebar>Add shift</button>
      </div>
    </div>

    <Shift v-for="shift in shifts" :key="shift.title" :shift="shift" class="mb-3"/>

    <Sidebar />
  </div>
</template>

<script>
// import { mapMutations } from 'vuex'
import Sidebar from '~/components/Sidebar'
import Shift from '~/components/Shift'

export default {
  components: { Shift, Sidebar },
  data: () => ({
    filter: 0,
    workTypes: ['Consultation', 'Telephone', 'Ambulance']
  }),
  computed: {
    shifts () {
      return this.$store.state.shifts
    }
  },
  methods: {
    // ...mapMutations({
    //   newShift: 'newShift'
    // }),
  }
}
</script>

<style></style>
