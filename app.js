const app = Vue.createApp({
    data() {
        return {
            min: null,
            max: null,
            randomNumber: null
        };
    },
    methods: {
        generateRandomNumber() {
            const min = parseInt(this.min);
            const max = parseInt(this.max);
            if (!isNaN(min) && !isNaN(max) && min < max) {
                this.randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            } else {
                this.randomNumber = null;
            }
        }
    }
});

app.mount('#app');  