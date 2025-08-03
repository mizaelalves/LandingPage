<template>
  <div class="credits">
    <h4>Desenvolvido por <a href="https://mizaeldev.com" target="_blank">MizaelDev</a></h4>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style lang="scss" scoped>
.credits {
  color: #935e92d8;
  font-size: 14px;
  display: grid;
  position: relative;
  justify-items: center;
  align-items: center;
  margin-top: 2rem; 
  margin-bottom: 1rem;
}

a {
  color: #935e92d8;
  text-decoration: underline;
  font-weight: 600;
}
</style>
