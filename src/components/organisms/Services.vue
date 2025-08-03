<template>
  <div class="services">
    <Service
      title="Front-End"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit saepe cumque placeat blanditiis corporis unde, voluptates maiores obcaecati ducimus reiciendis soluta nam itaque, ratione ipsum in veniam quibusdam eveniet."
    />
    <Service
      title="Back-End"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit saepe cumque placeat blanditiis corporis unde, voluptates maiores obcaecati ducimus reiciendis soluta nam itaque, ratione ipsum in veniam quibusdam eveniet."
    />
    <Service
      title="DevOps"
      description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae velit saepe cumque placeat blanditiis corporis unde, voluptates maiores obcaecati ducimus reiciendis soluta nam itaque, ratione ipsum in veniam quibusdam eveniet."
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
