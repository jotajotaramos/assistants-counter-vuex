<template>
  <div id="app">
    <AssistantsTitle/>
    <AssistantsList/>
    <AssistantsCounter/>
  </div>
</template>

<script>
import AssistantsTitle from './components/AssistantsTitle.vue'
import AssistantsList from './components/AssistantsList.vue'
import AssistantsCounter from './components/AssistantsCounter.vue'

export default {
  name: 'App',
  components: {
    AssistantsTitle,
    AssistantsList,
    AssistantsCounter
  }
}
</script>