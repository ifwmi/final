<template>
  <div>
    <div v-if="inquiry.length" class="pos-f">
      <div>
        <h2 v-if="numCorrect">Correct answers: {{numCorrect}}</h2>
        <h2 v-if="numWrong">Wrong answers: {{numWrong}}</h2>
      </div>
      <router-link to="/Examination" class="Send" v-if="inquiry.length===10" @click="this.counterStore.rightL = this.numCorrect">Send</router-link>

    </div>
    <div class="mt100 pos-r" v-for="question in questions" :key="question.id">
      <div class="flex">
        <h2 class="mx10">{{ question.question }}</h2>
      </div>
      <div class="flex ">
        <div class="flex m20 " v-for="item in question.variants" :key="item">
          <input type="radio" :id="item" :name="question.id" :value="item" @change="handleSelection(question.id, item,counterStore.answers[question.id-1].answer)">
          <label  :for="item" class="mx10">{{ item }}</label>
        </div>
      </div>
      <p class="pos-a" v-if = "question.checked"> {{ question.correct ? 'right' : 'wrong'}}</p>
    </div>
  </div>
</template>

<script>
import { mapStores } from 'pinia';
import { useCounterStore } from "@/stores/counter";

export default {
  methods: {
    async handleSelection(questionId, selectedVariant, ll) {
      this.examination = selectedVariant===ll;
      this.questions[questionId-1].correct = this.examination;
      this.questions[questionId-1].checked = true;
      this.inquiry.push(this.examination ? 'correct' : 'wrong')
      let radios = document.getElementsByName(questionId);
      for (let i = 0; i < radios.length; i++) {
        if (radios[i].value !== selectedVariant) {
          radios[i].disabled = true;
        }
      }
    }
  },
  computed: {
    numCorrect() {
      return this.inquiry.filter(answer => answer === 'correct').length
    },
    numWrong() {
      return this.inquiry.filter(answer => answer === 'wrong').length
    },
    ...mapStores(useCounterStore)
  },

  async mounted() {
    await this.counterStore.getQuestions().then(data => {
      this.questions = data;
    });
    await this.counterStore.getAnswers()
    this.counterStore.rightL = this.numCorrect
  },
  data() {

    return {
      questions: [],
      examination: [],
      initialColor: "black",
      inquiry:[],
    };
  },

};

</script>
