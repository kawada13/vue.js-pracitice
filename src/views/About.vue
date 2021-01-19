<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ title | toApper }}</p>
    <hr>
    <p>{{first}}</p>
    <p>{{oosakaTitle}}</p>
  </div>
</template>

<script>
import oosaka from '@/oosaka'

export default {
  data() {
    return {
      title: 'welcome',
    }
  },
  mixins:[oosaka],
}
</script>
