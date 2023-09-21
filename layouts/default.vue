<script setup lang="ts">
import { breakpointsTailwind } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const isMobile = breakpoints.smaller("sm"); // only smaller than lg
const isAsideOpen = ref(true);

watchEffect(() => {
  isAsideOpen.value = !isMobile.value;
});
const isMini = ref(false);
</script>

<template>
  <VAppShell padded-content fluid>
    <!-- header -->

    <template v-if="isMobile" #header>
      <VBtn @click="isAsideOpen = !isAsideOpen"> Click here </VBtn>
    </template>

    <template #navigation>
      <HeaderCrumbs />
    </template>

    <!-- aside -->
    <template #aside>
      <VNavDrawer
        v-model="isAsideOpen"
        v-model:mini="isMini"
        :fixed="isMobile"
        :overlay="isMobile"
        :close-on-overlay-click="isMobile"
        :class="{ 'z-20 !w-10/12  sidebar': isMobile }"
        bordered
      >
        <div class="flex p-2 justify-between items-center text-center">
          <p v-if="!isMini">E-commerce</p>
          <VBtn
            v-if="!isMobile"
            color="indigo"
            prefix-icon="ic:round-menu"
            @click="isMini = !isMini"
          />
        </div>
        <MenuListMenu :is-mini="isMini" />
      </VNavDrawer>
    </template>
    <slot />
  </VAppShell>
</template>
