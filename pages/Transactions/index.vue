<template>
  <VContainer class="container mx-auto p-4">
    <HeaderPageHeader
      title="Transactions"
      subs="Monitor your transaction here"
    />
    <VCard class="!bg-[#fff] !mt-4">
      <VTabs :items="items" v-model="selectedTab" />
      <div class="mt-4">
        <div v-if="selectedTab === 0">
          <h1 class="text-[black]">Pending</h1>
          <VDataTable :headers="headers" :items="[]" />
        </div>
        <div v-if="selectedTab === 1">
          <h1 class="text-black">sending</h1>
          <VDataTable :headers="headers" :items="[]" />
        </div>
        <div v-if="selectedTab === 2">
          <h1 class="text-[black]">Complete</h1>
          <VDataTable :headers="headers" :items="[]" />
        </div>
      </div>
    </VCard>
  </VContainer>
</template>

<script setup lang="ts">
import type { VDataTableHeader } from "@morpheme/table";
import type { VBreadcrumbItemProps } from "@morpheme/breadcrumbs";

const items = ref([
  {
    text: "Tab Item 1",
  },
  {
    text: "Tab Item 2",
  },
  {
    text: "Tab Item 3",
  },
  // ...
]);

const selectedTab = ref(0);

definePageMeta({
  breadcrumbs: [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "transactions",
      to: "/transactions",
    },
  ] as VBreadcrumbItemProps[],
});

const headers = ref<VDataTableHeader[]>([
  {
    value: "order-number",
    text: "Order Number",
  },
  {
    value: "product-name",
    text: "Product Name",
  },
  {
    value: "quantity",
    text: "Quantity",
  },
  {
    value: "Phone-number",
    text: "Phone Number",
  },
  {
    value: "address",
    text: "Address",
  },
]);
</script>

<style scoped>
h1 {
  margin-bottom: 12px;
}
</style>
