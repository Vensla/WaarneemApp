<template>
  <b-sidebar id="sidebar" title="Shift" right shadow width="500px">
    <div class="px-3 py-2">
      <form>
        <label for="title">Title</label>
        <input id="title" v-model="shift.title" type="text" class="form-control" maxlength="100">

        <label for="description">Description</label>
        <textarea
          id="description"
          v-model="shift.description"
          name="description"
          class="form-control"
          cols="30"
          rows="10"
          maxlength="500"></textarea>

        <label for="dates">Dates</label><br>
        <date-picker id="dates" v-model="shift.datePicker" multiple class="w-100" @input="updateDates"></date-picker>
<!--        <input id="dates" v-model="shift.dates" type="date" class="form-control">-->
        <pre>{{shift.dates}}</pre>
        <div class="row">
          <div class="col-12 mt-3">
            <button class="btn btn-danger text-uppercase w-50" type="button" @click="deleteShift(shift.id)" v-b-toggle.sidebar>Delete</button>
            <button class="btn btn-primary text-uppercase w-50 float-right" type="button" @click="saveShiftClick" v-b-toggle.sidebar>Save</button>
          </div>
        </div>
      </form>
    </div>
  </b-sidebar>
</template>

<script>
import { mapMutations } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'

export default {
  name: 'Sidebar',
  components: {
    DatePicker
  },
  data: () => ({
    shift: {
      id: '',
      title: '',
      description: '',
      datePicker: [],
      dates: []
    }
  }),
  methods: {
    ...mapMutations({
      saveShift: 'saveShift',
      deleteShift: 'deleteShift'
    }),
    saveShiftClick () {
      if (!this.shift.id) {
        this.shift.id = uuidv4()
      }
      this.saveShift(JSON.parse(JSON.stringify(this.shift)))
    },
    updateDates (value) {
      const dates = []
      for (const date of value) {
        dates.push({
          date,
          startTime: '',
          endTime: '',
          type: '',
          price: ''
        })
      }
      this.shift.dates = dates
    }
  }
}
</script>
