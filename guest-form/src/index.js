const vm = new Vue({
  data: {
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    guests: []
  },
  methods: {
    addGuest() {
      this.guests.push('');
    },
    deleteGuest(index) {
      this.guests.splice(index, 1);
    }
  }
});

vm.$mount("#guest");
