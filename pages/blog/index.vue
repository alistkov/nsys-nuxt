<script setup lang="ts">
  useSeoMeta({
    title:
      'NSYS Group Blog | Latest Insights and Expertise on Mobile Device Testing',
    description:
      'NSYS Group Blog publishes content about the Mobile Industry, Pre-owned phones Diagnostics tools, and Mobile Trade-In business.',
    author: 'NSYS',
    ogSiteName: 'NSYS Group',
    ogUrl: 'https://nsysgroup.co',
    ogTitle:
      'NSYS Group Blog | Latest Insights and Expertise on Mobile Device Testing',
    ogType: 'website',
    ogImage: 'https://nsysgroup.com/media/xhlcdbn4/nsys-group-snippet.jpg',
    ogDescription:
      'NSYS Group Blog publishes content about the Mobile Industry, Pre-owned phones Diagnostics tools, and Mobile Trade-In business.',
  });

  interface Post {
    title: string;
    publishedDate: string;
    author: string;
    announce: string;
    length: string;
    preview: string;
    alias: string;
  }

  const posts: Post[] = [
    {
      title: 'Certified Pre-Owned Phones: Boost Your Stock',
      publishedDate: 'Thursday 18 July 2024',
      author: 'NSYS Group Team',
      announce:
        'Higher prices and lower return rate — certified phones are winning the game.',
      length: '3 min read',
      preview: 'https://nsysgroup.com/media/geekirtl/cover-42.webp',
      alias: 'certified-pre-owned-phones-boost-your-stock',
    },
    {
      title: 'Digest: Data Erasure. Key Market Figures',
      publishedDate: 'Thursday 11 July 2024',
      author: 'NSYS Group Team',
      announce:
        'Download our free digest on the data erasure market to improve your decision-making!',
      length: '1 min read',
      preview:
        'https://nsysgroup.com/media/clbh0d0p/digest-data-erasure-cover.jpg',
      alias: 'key-figures-erasure-market',
    },
    {
      title:
        'NEW RELEASE: Apple Watch Testing is Now a Part of NSYS Diagnostics',
      publishedDate: 'Tuesday 09 July 2024',
      author: 'NSYS Group Team',
      announce:
        'Explore our new feature: Apple Watch testing in less than 2 minutes!',
      length: '1 min read',
      preview: 'https://nsysgroup.com/media/qdwfnpfb/cover-43-1.webp',
      alias: 'new-release-apple-watch-testing',
    },
    {
      title: 'Certified Pre-Owned Phones: Boost Your Stock',
      publishedDate: 'Thursday 18 July 2024',
      author: 'NSYS Group Team',
      announce:
        'Higher prices and lower return rate — certified phones are winning the game.',
      length: '3 min read',
      preview: 'https://nsysgroup.com/media/geekirtl/cover-42.webp',
      alias: 'certified-pre-owned-phones-boost-your-stock',
    },
    {
      title: 'Digest: Data Erasure. Key Market Figures',
      publishedDate: 'Thursday 11 July 2024',
      author: 'NSYS Group Team',
      announce:
        'Download our free digest on the data erasure market to improve your decision-making!',
      length: '1 min read',
      preview:
        'https://nsysgroup.com/media/clbh0d0p/digest-data-erasure-cover.jpg',
      alias: 'key-figures-erasure-market',
    },
    {
      title:
        'NEW RELEASE: Apple Watch Testing is Now a Part of NSYS Diagnostics',
      publishedDate: 'Tuesday 09 July 2024',
      author: 'NSYS Group Team',
      announce:
        'Explore our new feature: Apple Watch testing in less than 2 minutes!',
      length: '1 min read',
      preview: 'https://nsysgroup.com/media/qdwfnpfb/cover-43-1.webp',
      alias: 'new-release-apple-watch-testing',
    },
  ];
</script>

<template>
  <div class="w-full max-w-7xl mx-auto px-20 py-10">
    <h1 class="text-center text-4xl font-medium mb-5">Blog</h1>
    <Breadcrumbs
      :breadcrumbs="[
        {
          label: 'Home',
          pageLink: '/',
        },
        {
          label: 'Blog',
        },
      ]"
    />

    <div
      class="grid grid-cols-3 gap-14"
      itemscope
      itemtype="https://schema.org/ItemList"
    >
      <div
        v-for="(post, index) in posts"
        class="relative"
        itemprop="itemListElement"
        itemscope
        itemtype="https://schema.org/ListItem"
      >
        <meta itemprop="position" :content="`${index + 1}`" />
        <img
          :src="post.preview"
          :alt="post.title"
          class="mb-7"
          itemprop="image"
        />
        <h2 class="text-2xl font-extrabold mb-4" itemprop="name">
          {{ post.title }}
        </h2>
        <div
          class="flex text-base text-[#c4c4c4] items-center justify-between mb-4"
        >
          <meta
            itemprop="datePublished"
            :content="new Date(post.publishedDate).toISOString().split('T')[0]"
          />
          <div class="">{{ post.publishedDate }}</div>
          <div class="font-bold" itemprop="author">{{ post.author }}</div>
        </div>
        <div class="text-xl mb-4" itemprop="description">
          {{ post.announce }}
        </div>
        <div class="text-base text-[#c4c4c4]">{{ post.length }}</div>
        <NuxtLink
          :href="`/blog/${post.alias}`"
          class="absolute top-0 right-0 w-full h-full z-1"
          itemprop="url"
        ></NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
