<template>
  <ClientOnly>
    <VCard
      class="!flex !h-full !bg-[white] !gap-4 !flex-col !w-full !text-[black]"
    >
      <form @submit.prevent="onSubmit">
        <VFileUpload label="Image" theme="image" name="image" />
        <div class="flex gap-2 my-2 !text-[black] !w-full">
          <VInput
            v-model="nameInput"
            class="!bg-[white] !text-[black] !w-full"
            shadow
            placeholder="name"
            name="name"
            label="Name"
          />
          <VInput
            v-model="priceInput"
            type="number"
            class="!bg-[white] !text-[black] !w-full"
            shadow
            name="price"
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
          name="category"
          label="category"
        />
        <VEditor
          class="!mt-[15px]"
          name="description"
          v-model="desc"
          label="Description"
          toolbar="full"
          :value="desc"
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
const nameInput = ref<string>("");
const priceInput = ref<string>("");
const category = ref<string>("");
const desc = ref<string>("");
const route = useRouter();
// import * as yup from "yup";
// import { useField, useForm } from "vee-validate";

// const schema = yup.object({
//   nameInput: yup.string().required("Name is required"),
//   priceInput: yup
//     .number()
//     .required("Price is required")
//     .min(0, "Price must be greater than or equal to 0"),
//   category: yup.string().required("Category is required"),
//   desc: yup.string().required("Description is required"),
// });

import { number, object, string } from "yup";
import { useForm } from "vee-validate";

const schema = object({
  price: number().required().label("price"),
  category: string().required().label("category"),
  name: string().required().label("name"),
  description: string().label("description"),
});

const { handleSubmit } = useForm({
  validationSchema: schema,
});

const onSubmit = handleSubmit((values) => {
  state.addProducts({
    id: state.Products.length + 1,
    name: values.name as any,
    price: values.price as any,
    images: "https://picsum.photos/300/300?random=9",
    category: values.category as any,
    description: values.description as any,
  });
  route.push("/products");
});

// const name = useField("nameInput", yup.string().required("Name is required"));
// const price = useField(
//   "priceInput",
//   yup
//     .number()
//     .required("Price is required")
//     .min(0, "Price must be greater than or equal to 0")
// );
// const Category = useField(
//   "category",
//   yup.string().required("Category is required")
// );

// const onSubmit = async () => {
//   try {
//     const valid = await Promise.all([
//       name.validate(),
//       price.validate(),
//       Category.validate(),
//     ]);

//     console.log(valid);
//     state.addProducts({
//       id: state.Products.length + 1,
//       name: nameInput as any,
//       price: priceInput as any,
//       images: "https://picsum.photos/300/300?random=9",
//       category: category as any,
//     });
//     // route.push("/products");
//   } catch (error) {
//     console.log(error);
//   }
// };
</script>

<style scoped lang="scss">
:root {
  --v-editor-height: 300px !important;
}

.ck-editor {
  height: 200px !important;
}
</style>
