<script setup lang="ts">
import type { VBreadcrumbItemProps } from "@morpheme/breadcrumbs";
definePageMeta({
  breadcrumbs: [
    {
      title: "Home",
      to: "/",
    },
  ] as VBreadcrumbItemProps[],
});
</script>

<template>
  <VContainer class="bg-dark-500 flex flex-col gap-4 container mx-auto p-4">
    <HeaderPageHeader
      title="dashboard"
      subs="Monitor your metrics for shipping, transactions, product and many more in here"
    />

    <CardsPageCard />
  </VContainer>
</template>
