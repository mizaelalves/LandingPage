<template>
  <div class="services">
    <Service
      title="Front-End"
      description="Desenvolvimento de interfaces modernas, responsivas e acessíveis, utilizando as melhores práticas e tecnologias do mercado para proporcionar a melhor experiência ao usuário."
    />
    <Service
      title="Back-End"
      description="Criação de APIs robustas, escaláveis e seguras, integração com bancos de dados e implementação de regras de negócio para garantir o funcionamento eficiente das aplicações."
    />
    <Service
      title="DevOps"
      description="Automatização de processos, integração e entrega contínua, monitoramento e infraestrutura como código para garantir agilidade, qualidade e confiabilidade no ciclo de vida do software."
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Service } from '@/components/molecules/'

export default defineComponent({
  components: { Service }
})
</script>

<style lang="scss" scoped>
.services {
  margin-top: 2.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5rem;
}
</style>
