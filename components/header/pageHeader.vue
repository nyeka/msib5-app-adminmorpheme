<script setup lang="ts">
interface IProps {
  title: string;
  subs: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <div>
    <h1 class="font-semibold text-lg">{{ props.title }}</h1>
    <p class="text-[#737373]">{{ props.subs }}</p>
  </div>
</template>
