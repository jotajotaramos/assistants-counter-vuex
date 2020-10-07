<template>
  <p>El número de asistentes a la sala es: {{counter}}</p>
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed:{
        ...mapState(['counter'])
    }
}
</script>