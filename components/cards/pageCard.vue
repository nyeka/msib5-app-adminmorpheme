<script setup lang="ts">
interface ICard {
  title: string;
  usd: string;
  up: string;
  icons?: string;
}

const card = ref<ICard[]>([
  {
    title: "Total Revenue",
    icons: "tdesign:undertake-transaction",
    usd: "45,231.89",
    up: "+20.1% from last month",
  },
  {
    title: "Transactions",
    icons: "ph:currency-circle-dollar-bold",
    usd: "+2350",
    up: "+180.1% from last month",
  },
  {
    title: "Categories",
    icons: "iconamoon:category-light",
    usd: "142",
    up: "+19% from last month",
  },
  {
    title: "Cancelled",
    icons: "mdi:cancel-bold",
    usd: "2",
    up: "+0,0002% since last hour",
  },
]);
</script>

<template>
  <VContainer class="flex gap-4 flex-col md:flex-row md:flex-wrap">
    <VCard
      v-for="item in card"
      :key="item.title"
      bodyless
      class="p-4 md:w-[224px]"
    >
      <div class="flex justify-between">
        <p>{{ item.title }}</p>
        <VIcon :name="item.icons" size="sm" />
      </div>
      <div class="mt-[24px]">
        <h1 class="font-semibold text-2xl">{{ item.usd }}</h1>
        <p>{{ item.up }}</p>
      </div>
    </VCard>
  </VContainer>
</template>
