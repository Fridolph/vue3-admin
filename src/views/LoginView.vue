<template>
  <div class="login-page">Login page</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { login } from '@/api/login'

const handleLogin = async () => {
  let data = await login('username', 'password')
  console.log('data: ', data)
}

onMounted(() => {
  handleLogin()
})
</script>

<style scoped></style>
