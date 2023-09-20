<script setup lang="ts">
interface IProps {
  title: string;
  subs: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <div>
    <h1 class="font-semibold text-2xl">{{ props.title }}</h1>
    <p>{{ props.subs }}</p>
  </div>
</template>
