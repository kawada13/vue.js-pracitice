<template>
    <div>
        <h1>this is poyo</h1>
        <p>{{tokyoTitle}}</p>
        <p>{{name | toApper}}</p>
        <hr>
        <p>{{$root.nagoyaTitle}}</p>
        <hr>
        <router-view />
    </div>
</template>


<script>
export default {
  created() {
    console.log(this.tokyoTitle)
  },
  data() {
    return {
      name: 'poyo'
    }
  },
}
</script>

