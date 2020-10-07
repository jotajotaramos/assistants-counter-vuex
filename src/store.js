import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({

    state:{

        counter: 5

    },
    mutations:{
        ADD_PERSON: function(state){

            state.counter++;

        },
        DELETE_PERSON: function(state){

            state.counter--;

        },
    }

})