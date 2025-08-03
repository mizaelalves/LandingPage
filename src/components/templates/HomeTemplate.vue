<template>
  <Container class="home-template">
    <Header />
    <Presentation />
    <Services />
    <Credits />
  </Container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Container } from '@/components/bosons'
import { Credits } from '@/components/atoms'
import { Header, Presentation, Services } from '@/components/organisms'

export default defineComponent({
  components: { Credits, Container, Header, Presentation, Services }
})
</script>

<style lang="scss" scoped>
.home-template {
  margin: 3rem auto 0 auto;
  display: grid;
  grid-gap: 5rem;
}
</style>
