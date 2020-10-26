// import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
  shift: {
    id: '',
    title: '',
    description: '',
    dates: [
      { date: '', type: '', startTime: '', endTime: '', price: '' }
    ]
  },
  shifts: []
})

// const emptyShift = {
//   id: '',
//   title: '',
//   description: '',
//   dates: [
//     { date: '', type: '', startTime: '', endTime: '', price: '' }
//   ]
// }

export const mutations = {
  // newShift (state) {
  //   const shiftCopy = JSON.parse(JSON.stringify(emptyShift))
  //   shiftCopy.id = uuidv4()
  //   state.shift = shiftCopy
  // },
  saveShift (state, payload) {
    if (state.shifts.some(shift => shift.id === state.shift.id)) {
      // state.shifts
    } else {
      state.shifts.push(payload)
    }
  },
  deleteShift (state, payload) {
    //
    state.shifts.splice(payload, 1)
  }
}
