<template>
<div>
 <h1>this is hiro</h1>
 <slot name="head">
   <p>スロットの中身だぜ</p>
   <p>何も書いてないぜ</p>
 </slot>
 <hr>
 <v-app>
 <v-select
  :items="items"
  item-text="state"
></v-select>
<v-row class="blue lighten-4" style="height: 450px;">
  <v-col cols=3>
    <v-card color="blue" outlined tile height=150></v-card>
  </v-col>
  <v-col cols=3>
    <v-card color="blue" outlined tile height=150></v-card>
  </v-col>
  <v-col cols=3>
    <v-card color="blue" outlined tile height=150></v-card>
  </v-col>
  <v-col cols=3>
    <v-card color="blue" outlined tile height=150></v-card>
  </v-col>
  <v-col cols=3>
    <v-card color="blue" outlined tile height=150></v-card>
  </v-col>
</v-row>
 </v-app>
</div>
</template>

<script>
export default {
  props: {
    title: String,
    aaa: Boolean
  },
  data: () => ({
      items: [
          { state: 'Florida', abbr: 'FL' },
          { state: 'Georgia', abbr: 'GA' },
          { state: 'Nebraska', abbr: 'NE' },
          { state: 'California', abbr: 'CA' },
          { state: 'New York', abbr: 'NY' },
        ],
    }),
}
</script>