<script setup lang="ts">
import { ref } from "vue";
import {
  Grid01Icon,
  PackageIcon,
  Wallet01Icon,
} from "@morphemeicons/vue/untitled";

interface IMenus {
  title: string;
  to: string;
  icons?: Component;
  items?: IMenus[];
}

interface Imini {
  isMini: boolean;
}

const props = defineProps<Imini>();

const router = useRoute();

const menus = ref<IMenus[]>([
  {
    title: "Home",
    to: "/",
    icons: Grid01Icon,
  },
  {
    title: "Products",
    to: "/products",
    icons: PackageIcon,
  },
  {
    title: "Transactions",
    to: "/transactions",
    icons: Wallet01Icon,
  },
]);
</script>

<template>
  <div>
    <VList>
      <template v-for="menu in menus" :key="menu.title">
        <VListCollapse v-if="menu.items">
          <template #activator="{ isOpen, toggle }">
            <VListItem
              v-bind="menu"
              :class="isMini ? 'justify-center' : ''"
              :hide-text="props.isMini"
              :hide-append="props.isMini"
              append-icon="ri:arrow-down-s-line"
              :append-icon-class="isOpen ? 'rotate-180' : ''"
              @click="toggle"
            >
              {{ menu.title }}
            </VListItem>
          </template>
          <VList>
            <VListItem
              v-for="child in menu.items"
              :key="child.title"
              v-bind="child"
              :class="isMini ? 'justify-center' : ''"
              :hide-text="props.isMini"
              :hide-append="props.isMini"
            >
              {{ child.title }}
            </VListItem>
          </VList>
        </VListCollapse>
        <VListItem
          v-else
          v-bind="menu"
          :hide-text="props.isMini"
          :hide-append="props.isMini"
          :to="menu.to"
          nuxt
          exact-active-class="active"
        >
          <template #prepend>
            <component :is="menu.icons" class="w-7 h-7 text-current" />
          </template>
          {{ menu.title }}
        </VListItem>
      </template>
    </VList>
  </div>
</template>

<style scoped lang="scss">
.active {
  background-color: var(--color-indigo-500);
  color: var(--color-white);
  --v-list-item-icon-color: var(--color-white);
}
</style>
