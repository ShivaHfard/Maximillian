const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            confirmedName: ''
        };
    },
    methods: {
        add(step) {
            this.counter += step;
        },
        reduce(step) {
            this.counter -= step;
        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName;
        },
        submitForm() {
            alert('Form Submitted!');
        },
        confirmedInput() {
            this.confirmedName = this.name;
        }
    }
});

app.mount("#events");