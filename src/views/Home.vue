<template>
  <div class="home">
    <h1>this is home page</h1>
    <good>
      <template v-slot:hello>
        <p>こんにちは</p>
      </template>
      <template v-slot:bye>
        <p>さようなら</p>
      </template>
    </good>
  </div>
</template>

<script>

import good from './Good'
export default {
  components: {
    'good': good,
  }
}
</script>
