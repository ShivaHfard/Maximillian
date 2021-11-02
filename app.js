const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            lastName: '',
        };
    },
    methods: {
        add(step) {
            this.counter += step;
        },
        reduce(step) {
            this.counter -= step;
        },
        resetInput() {
            this.name= '';
        }
    },
    computed: {
        fullname() {
            if(this.name === '' || this.lastName === '')
                return '';
            return this.name + ' ' + this.lastName;
        }
    },
    watch: {
        counter(value) {
            if(value > 50)
                this.counter = 0;
        }
    }
});

app.mount("#events");