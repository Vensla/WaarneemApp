<template>
  <div class="shadow p-3">
    <h1>{{ shift.title }}</h1> <span class="float-right edit-icon">&#9998;</span>
    <h3>{{ shift.description }}</h3>
    <h1>Dates</h1>
    <table class="table">
      <tr v-for="date in shift.dates" :key="date.date + date.startTime">
        <td>{{ date.date }}</td>
        <td>{{ date.startTime }}</td>
        <td>{{ date.endTime }}</td>
        <td>{{ date.type }}</td>
        <td>&euro; {{ date.price }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Shift',
  props: { shift: Object }
}
</script>

<style scoped>
  .edit-icon {
    font-size: 20px;
    cursor: pointer;
    position: relative;
    top: -50px;
  }
</style>
