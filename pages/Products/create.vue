<template>
  <ClientOnly>
    <VCard
      class="!flex !h-full !bg-[white] !gap-4 !flex-col !w-full !text-[black]"
    >
      <form :onSubmit="(e) => onSubmit(e)">
        <VFileUpload label="Image" theme="image" />
        <div class="flex gap-2 my-2 !text-[black] !w-full">
          <VInput
            v-model="nameInput"
            class="!bg-[white] !text-[black] !w-full"
            shadow
            placeholder="name"
            label="Name"
          />
          <VInput
            v-model="priceInput"
            type="number"
            class="!bg-[white] !text-[black] !w-full"
            shadow
            placeholder="price"
            label="Price"
          />
        </div>
        <VInput
          v-model="category"
          type="text"
          class="!bg-[white] !text-[black]"
          shadow
          placeholder="category"
          label="category"
        />
        <VEditor
          class="!mt-[15px]"
          v-model="desc"
          label="Description"
          toolbar="full"
          :value="desc"
          @change="(e) => console.log(e)"
        />
        <VBtn class="!mt-[24px] !bg-[#6172f3] !text-white" type="submit"
          >Submit</VBtn
        >
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
const category = ref("");
const desc = ref("");
const route = useRouter();
import * as yup from "yup";
import { useField, useForm } from "vee-validate";

const schema = yup.object({
  nameInput: yup.string().required("Name is required"),
  priceInput: yup
    .number()
    .required("Price is required")
    .min(0, "Price must be greater than or equal to 0"),
  category: yup.string().required("Category is required"),
  desc: yup.string().required("Description is required"),
});

// Create vee-validate form and fields

const onSubmit = async (e: any) => {
  try {
    e.preventDefault();
    state.addProducts({
      id: state.Products.length + 1,
      name: nameInput as any,
      price: priceInput as any,
      images: "https://picsum.photos/300/300?random=9",
      category: category as any,
    });
    route.push("/products");
  } catch (error) {
    console.log(error);
  }
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
