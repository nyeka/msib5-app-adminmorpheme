<script setup lang="ts">
import { useProductStore } from "~/stores/counter";
const loading = ref(false);

const state = useProductStore();

interface IProps {
  isOpen: boolean;
  id: number;
}

const props = defineProps<IProps>();
</script>

<template>
  <VModal
    v-model="props.isOpen"
    title="Delete Item"
    confirm
    confirm-text="Delete"
    confirm-color="error"
    :loading="loading"
    centered
    footer-class="flex-row-reverse"
    close-text="Cancel"
    @confirm="
      (e: any) => {
        e.close(), state.removeProduct(Number(props.id));
      }
    "
  >
    <p>Are you sure want to delete this item?</p>
  </VModal>
</template>
