<template>
  <ClientOnly>
    <VCard
      class="!flex !h-full !bg-[white] !gap-4 !flex-col !w-full !text-[black]"
    >
      <form :onSubmit="(e) => onSubmit(e)">
        <VFileUpload label="Image" theme="image" />
        <div class="flex gap-2 my-2 !text-[black]">
          <VInput
            v-model="nameInput"
            class="!bg-[white] !text-[black]"
            shadow
            placeholder="name"
            label="Name"
          />
          <VInput
            v-model="priceInput"
            type="number"
            class="!bg-[white] !text-[black]"
            shadow
            placeholder="price"
            label="Price"
          />
        </div>
        <VEditor
          class="!mt-[65px]"
          v-model="desc"
          label="Description"
          toolbar="full"
        />
        <VBtn class="!mt-[24px]" type="submit">Submit</VBtn>
      </form>
    </VCard>
  </ClientOnly>
</template>

<script setup lang="ts">
import VEditor from "@morpheme/editor";
import { useProductStore } from "~/stores/counter";
const state = useProductStore();
const nameInput = ref("");
const priceInput = ref("");
const desc = ref("");

const route = useRouter();

const onSubmit = (e: any) => {
  e.preventDefault();
  state.addProducts({
    id: state.Products.length + 1,
    name: nameInput as any,
    price: priceInput as any,
    images: "https://picsum.photos/300/300?random=9",
    category: desc as any,
  });
  route.push("/products");
};
</script>

<style scoped lang="scss">
:root {
  --v-editor-height: 300px !important;
}

.ck-editor {
  height: 200px !important;
}
</style>
