<script setup lang="ts">
import { ref } from 'vue'
import { test } from '../api/test/test';

type propsType = { msg: string }
const props = defineProps<propsType>()

const message = ref(props.msg)
const testApi = () => {
  test().then(res => {
    message.value = res.data
  })
}
</script>

<template>
  <h1>{{ message }}</h1>
  <q-btn color="primary" @click="testApi">获取测试数据</q-btn>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
