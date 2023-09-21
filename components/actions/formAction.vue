<template>
  <VModal
    v-model="props.isOpen"
    title="Upload"
    confirm
    width="fit-content"
    confirm-text="Upload"
    confirm-color="error"
    footer-class="flex-row-reverse"
    @confirm=" (e: any) => {
      e.close(),
      state.addProducts({
        name: nameInput,
        price: Number(priceInput),
        category: categoryInput,
        id: props.id ?? state.Products.length + 1,
        images: 'https://picsum.photos/300/300?random=7',
      })
    }
      
    "
  >
    <VCard class="!flex !gap-2 !flex-col !w-fit">
      <VFileUpload label="file" theme="image" />
      <div class="flex gap-2 my-2">
        <VInput v-model="nameInput" shadow placeholder="name" label="Name" />
        <VInput
          v-model="priceInput"
          type="number"
          shadow
          placeholder="price"
          label="Price"
        />
      </div>

      <VInput
        v-model="categoryInput"
        shadow
        placeholder="category"
        label="Price"
      />
    </VCard>
  </VModal>
</template>

<script setup lang="ts">
import { useProductStore } from "~/stores/counter";

const state = useProductStore();
interface IProps {
  isOpen: boolean;
  id: number;
}
const props = defineProps<IProps>();
const nameInput = ref("");
const priceInput = ref("");
const categoryInput = ref("");
</script>
