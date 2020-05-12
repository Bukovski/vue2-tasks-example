const vm = new Vue({
  data: {
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    guests: [],
    sendData: false
  },
  methods: {
    addGuest() {
      this.guests.push('');
    },
    deleteGuest(index) {
      this.guests.splice(index, 1);
    },
    clearGuests() {
      this.guests = this.guests.filter((str) => str.length);
    },
    sendForm() {
      this.clearGuests();
      
      this.sendData = true;
    }
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName
    }
  }
  });

vm.$mount("#guest");
