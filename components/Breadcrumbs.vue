<script setup lang="ts">
  interface Breadcrumbs {
    label: string;
    pageLink?: string;
  }

  interface PropTypes {
    breadcrumbs: Breadcrumbs[];
  }
  const props = defineProps<PropTypes>();
</script>

<template>
  <div>
    <nav class="mb-5">
      <ul
        class="flex items-center"
        itemscope
        itemtype="https://schema.org/BreadcrumbList"
      >
        <li
          v-for="(breadcrumbsItem, index) in breadcrumbs"
          class="mr-5"
          itemprop="itemListElement"
          itemscope
          itemtype="https://schema.org/ListItem"
        >
          <template v-if="breadcrumbsItem?.pageLink">
            <NuxtLink
              :to="breadcrumbsItem.pageLink"
              class="text-[#99a5ab] hover:text-azure"
              itemprop="item"
            >
              <span itemprop="name">{{ breadcrumbsItem.label }}</span>
              <meta itemprop="position" :content="`${index + 1}`" />
            </NuxtLink>
            <span class="pl-5">|</span>
          </template>
          <span v-else>{{ breadcrumbsItem.label }}</span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped></style>
