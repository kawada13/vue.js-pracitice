<template>
    <div>
        <h1>this is taka</h1>
        <p>ここからしたがhiro</p>
        <hr>
        <hiro title="one ok" aaa>
          <template v-slot:head>
            <p>書き込みました</p>
          </template>
        </hiro>
      </div>
</template>



<script>
import hiro from '@/views/Hiro'
export default {
    components: {
        'hiro': hiro,
    },
}
</script>