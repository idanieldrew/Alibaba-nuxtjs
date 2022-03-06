const state = () => ({
  questions : [],
  answers : []
})

const getters ={
  questions: state => state.questions,
  answers: state => state.answers
}

const mutations = {
  GET_QUESTIONS(state,res){
    state.questions = res
  }
}

const actions = {
  async fetchQuestions({commit}){
    let res = await this.$axios.get('questions')
  }
}
