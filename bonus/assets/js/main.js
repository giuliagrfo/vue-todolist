
const {
    createApp
} = Vue

createApp({
    data(){
        return {
            addedTask: {text: '', done: false},
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
        
    }, 
    methods: {
        deleteTask(i) {
            // console.log(i);
            this.tasks.splice(i, 1)
        },
        addTask(){
            this.tasks.unshift(this.addedTask);
            console.log(this.addedTask);
            this.addedTask = {text: '', done: false}
        },
        disable(i){
            if(this.tasks[i].done === true){
                // console.log('sto cliccando sul testo');
                this.tasks[i].done = false
            } else {
                this.tasks[i].done = true

            }

        }

    }
}).mount('#app')


