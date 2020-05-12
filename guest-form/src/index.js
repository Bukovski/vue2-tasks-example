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
    }
  }
});

vm.$mount("#guest");
