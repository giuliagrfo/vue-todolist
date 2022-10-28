const {
    createApp
} = Vue

createApp({
    data(){
        return {
            tasks:[
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare esercizio Boolean',
                    done: false
                },
                {
                    text: 'Preparare il pranzo',
                    done: true
                },
                {
                    text: 'Portare il cane al parco',
                    done: false
                },
            ]
        }
    }
}).mount('#app')

