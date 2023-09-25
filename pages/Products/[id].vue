<template>
  <VContainer class="container mx-auto p-4">
    <h2 class="font-semibold text-center text-2xl">Details Product</h2>
    <VCard class="w-fit h-fit">
      <NuxtImg :src="findItem?.images" />
      <div class="flex justify-between mt-2">
        <h1>{{ findItem?.name }}</h1>
        <p>{{ findItem?.price }}</p>
      </div>
      <p class="mt-2">{{ findItem?.category }}</p>
      <div v-html="findItem?.description"></div>
    </VCard>
  </VContainer>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/counter";

const state = useProductStore();
const route = useRoute();
const id = route.params.id;

const findItem = computed(() => {
  return state.Products.find((item) => item.id === Number(id));
});
</script>
