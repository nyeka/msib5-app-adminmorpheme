<script setup lang="ts">
import type { VDataTableHeader } from "@morpheme/table";
import { useProductStore } from "~/stores/counter";
const state = useProductStore();
import type { VBreadcrumbItemProps } from "@morpheme/breadcrumbs";

const headers = ref<VDataTableHeader[]>([
  {
    value: "images",
    text: "Image",
  },
  {
    value: "name",
    text: "Name",
  },
  {
    value: "price",
    text: "Price",
  },
  {
    value: "category",
    text: "Category",
  },
  {
    value: "action",
    text: "Action",
    freeze: true,
    positionFreeze: "right",
    sortable: false,
    align: "center",
  },
]);

definePageMeta({
  breadcrumbs: [
    {
      title: "Home",
      to: "/",
    },
    {
      title: "Products",
      to: "/products",
    },
  ] as VBreadcrumbItemProps[],
});

const route = useRouter();

const isOpen = ref(false);
const openEditor = ref(false);
const search = ref("");
const id = ref(0);
</script>

<template>
  <VContainer class="container mx-auto p-4 flex flex-col gap-4">
    <HeaderPageHeader title="Products" subs="Manage your products here" />
    <VCard class="!bg-white !mt-4">
      <div class="flex justify-between">
        <VInput
          v-model="search"
          placeholder="Search..."
          wrapper-class="mb-4"
          prepend-icon="ri:search-line"
        />
        <VBtn
          @click="route.push('/products/create')"
          class="!bg-[#6172f3] !text-[white]"
        >
          Tambah
        </VBtn>
      </div>
      <VDataTable
        v-model:search="search"
        :items="state.Products"
        :headers="headers"
        tdClass="!transparent"
        class="!bg-white"
      >
        <template #item.images="{ item }">
          <div class="overflow-hidden rounded-md w-12 h-12 object-cover">
            <NuxtImg :src="String(item.images)" />
          </div>
        </template>
        <template #item.action="{ item }">
          <VBtn
            prefix-icon="untitled:eye"
            @click="route.push(`/products/${item.id}`)"
          />
          <VBtn
            prefix-icon="untitled:edit-01"
            @click="(openEditor = !openEditor), (id = item.id)"
          />
          <VBtn
            prefix-icon="untitled:trash-01"
            @click="(isOpen = !isOpen), (id = item.id)"
          />
        </template>
      </VDataTable>
    </VCard>
    <ModalDeleteModal :id="id" :isOpen="isOpen" />
    <ActionsFormAction :isOpen="openEditor" :id="id" />
  </VContainer>
</template>
