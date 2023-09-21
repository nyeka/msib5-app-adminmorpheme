<script setup lang="ts">
import type { VBreadcrumbItemProps } from "@morpheme/breadcrumbs";

const router = useRoute();

const items = computed<VBreadcrumbItemProps[]>(() => {
  return (router.meta.breadcrumbs ?? []) as VBreadcrumbItemProps[];
});

const activeClass = (to: any, length: number) => {
  if (to === "/" && length >= 2) {
    return false;
  }
  return router.path.includes(to);
};
</script>

<template>
  <div class="container mx-auto px-4 pt-6">
    <div class="flex gap-2">
      <div
        v-for="(item, index) in items"
        :key="item.title"
        class="flex gap-[12px]"
      >
        <div
          :class="
            activeClass(item.to, items.length)
              ? 'bg-[#6172f3] w-full text-[white] cursor-pointer p-[5px] rounded'
              : 'text-[black] w-full cursor-pointer p-[5px] rounded'
          "
          @click="$router.push(item.to as any)"
        >
          <div>
            {{ item.title }}
          </div>
        </div>
        <span
          class="h-[30px] w-[2px] bg-[#475467]"
          v-if="items.length - 1 !== index && items.length > 1"
        ></span>
      </div>
    </div>
  </div>
</template>
