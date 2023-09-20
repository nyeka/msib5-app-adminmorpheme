<script setup lang="ts">
import type { VBreadcrumbItemProps } from "@morpheme/breadcrumbs";
import { VBreadcrumbs } from "#build/components";

const router = useRoute();

const items = computed<VBreadcrumbItemProps[]>(() => {
  return (router.meta.breadcrumbs ?? []) as VBreadcrumbItemProps[];
});
</script>

<template>
  <div>
    <VBreadcrumbs :items="items" />
  </div>
</template>
