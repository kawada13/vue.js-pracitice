<template>
<div>
 <h1>this is hiro</h1>
 <slot name="head">
   <p>スロットの中身だぜ</p>
   <p>何も書いてないぜ</p>
 </slot>
</div>
</template>

<script>
export default {
  props: {
    title: String,
    aaa: Boolean
  }
}
</script>