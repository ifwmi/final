import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        choice: [],
        rightL: [],
        answers: [],
    }),
    actions: {
        async getQuestions() {
            try {
                const response = await fetch('http://localhost:3000/questions');
                const data = await response.json();
                return data;
            } catch (error) {
                console.error(error);
            }
        },
        async getAnswers() {
            try {
                const response = await fetch('http://localhost:3000/answers');
                const data = await response.json();
                this.answers= data
            } catch (error) {
                console.error(error);
            }
        },

    }
})
