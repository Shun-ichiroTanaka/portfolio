<template>
	<vue-simple-suggest
  v-model="selected"
	:list="simpleSuggestionList"
	:filter-by-query="true">
	</vue-simple-suggest>
</template>

<script>
import VueSimpleSuggest from 'vue-simple-suggest'
import 'vue-simple-suggest/dist/styles.css' // Using a css-loader

export default {
  name: 'suggest',
  components: {
  VueSimpleSuggest
  },
  data() {
    return {
      selected: null,
      simpleSuggestionList: [
        'ハンバーガー',
        'てりやきバーガー',
        'ポテト',
        'ありがとう',
        'airbnb',
        'よろしく',
        'aaa',
        'banana',
        'culture'

      ]
    }
  }
}
</script>