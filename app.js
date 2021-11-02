const app = Vue.createApp({
    data() {
        return {
            boxASelected: false,
            boxBSelected: false,
            boxCSelected: false
        };
    },
    methods: {
        boxSelected(box) {
            switch(box) {
                case 'A':
                    this.boxASelected = !this.boxASelected;
                    return;
                case 'B':
                    this.boxBSelected = !this.boxBSelected;
                    return;
                case 'C':
                    this.boxCSelected = !this.boxCSelected;
                    return;
            }
        }
    },
    computed: {
        boxAClasses() {
            return { active: this.boxASelected };
        }
    }
});

app.mount('#styling');