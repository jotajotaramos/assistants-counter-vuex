<template>
  <div id="app">
    <AssistantsTitle/>
    <AssistantsList/>
  </div>
</template>

<script>
import AssistantsTitle from './components/AssistantsTitle.vue'
import AssistantsList from './components/AssistantsList.vue'

export default {
  name: 'App',
  components: {
    AssistantsTitle,
    AssistantsList
  }
}
</script>