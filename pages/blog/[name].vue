<script setup lang="ts">
  const route = useRoute();

  interface News {
    title: string;
    date: string;
    author: string;
    readTiming: string;
    imageUrl: string;
    content: string[];
  }
  const news: News = {
    title: 'Certified Pre-Owned Phones: Boost Your Stock',
    date: 'Thursday 18 July 2024',
    author: 'NSYS Group Team',
    readTiming: '3 min read',
    imageUrl: 'https://nsysgroup.com/media/geekirtl/cover-42.webp',
    content: [
      '<p dir="ltr">Some people are biased toward second-hand phones, thinking they have defects and perform poorly. While it might be true for some pre-owned devices, numerous options work perfectly and look just like new. It might be difficult for customers to find a reliable store and the exact pre-owned device they trust, so sellers need to address this prejudice. In this blog post, we will explore phone certificates and the role they play in enhancing your sales.</p>',
      '<img src="https://nsysgroup.com/media/u04ccd0f/illustration-67.jpg" alt="Certified Pre-Owned Phones: Boost Your Stock" title="Certified Pre-Owned Phones: Boost Your Stock"/>',
      `
        <h2 dir="ltr">What is the Difference Between Refurbished Phones and Certified Pre-Owned Devices?</h2>
        <p dir="ltr">Second-hand phones vary a lot by their condition and, for that reason, price. Basically, even a brand-new device, just taken out of the box, is already considered pre-owned. Three main terms are used in the industry to describe second-hand devices:</p>
        <h3 dir="ltr">Used Phones</h3>
        <p dir="ltr">The biggest category on the list is used phones. These are second-hand devices that are usually resold by private sellers.</p>
        <p dir="ltr">The main problem with a used phone is that its condition is not verified. The customer has to trust the seller on whether the parts of the device are original, the personal data of the previous owner has been irrecoverably deleted, the battery health is decent, etc. Besides, used phones don't have warranties, so if the device has defects, you will not be able to get it repaired.</p>
        <p dir="ltr">However, with these problems come two advantages: low price and easy accessibility. There are always numerous used phone options available on the market.&nbsp;</p>
        <h3 dir="ltr">Refurbished Phones</h3>
        <p dir="ltr">A refurbished device is a used device that has been returned to the vendor or manufacturer and undergone repair. During refurbishing, the technician checks all functions, restores factory settings, safely erases data left on the device, and cleans and packages it. After that, the phone looks brand-new and has a warranty.</p>
        <p dir="ltr">Although the user experience with refurbished phones isn't much different from using new ones, the prices for such devices are lower. Due to appealing prices and sustainability reasons, the demand for refurbished phones is growing.</p>
        <p dir="ltr">Despite the advantages, refurbished devices have issues that are concerning for customers. Since devices can be refurbished by third-party vendors, the warranty period might be shorter, and the quality is not always guaranteed.&nbsp;</p>
        <p dir="ltr">But how can refurbishers confirm the quality of a phone? The answer is certificates. These reports, with testing, grading, and wiping results, prove the quality of the device before and after repair. <a href="/products/nsys-diagnostics/">Diagnostic certificates</a> are a huge competitive advantage that helps sellers raise prices and lower returns.</p>
        <h3 dir="ltr">Certified Pre-Owned Phone (CPO)</h3>
        <p dir="ltr">The last category has much in common with refurbished devices. A certified pre-owned device is a second-hand device that has been thoroughly tested and repaired, has a warranty, and looks like a brand-new device.</p>
        <p dir="ltr">Compared to refurbished phones, CPO phones are certified by the original manufacturer or authorized refurbisher. This ensures high-quality repairs and allows sellers to provide extended warranties. For the same reason, prices on CPO phones are higher.</p>
        `,
      '<img src="https://nsysgroup.com//media/te1hfw05/illustration-68.jpg" alt="Where Do Used, Refurbished, and Certified Pre-Owned Phones Come From?" title="Certified Pre-Owned Phones: Boost Your Stock" />',
      `
        <h2 dir="ltr">Where Do Used, Refurbished, and Certified Pre-Owned Phones Come From?</h2>
        <p dir="ltr">The common misconception is that all second-hand devices are returned to sellers due to defects and poor performance. However, that is not the case in multiple situations. Usually, people just want to upgrade their old device to a newer model or a phone of a different color. These second-hand phones are still working, although they often show signs of wear and tear.</p>
        <p dir="ltr">Previously owned phones appear on the market via the following channels:</p>
        <ul>
          <li> Trade-ins. These services are provided by both manufacturers and third parties, presenting numerous options for end users to trade in their devices. For businesses, offering buyback options is a competitive advantage and an additional income channel.</li>
          <li> Leasing and rental programs. Providers, such as AT&amp;T and Verizon, offer leasing programs that also contribute to large volumes of pre-owned devices appearing on the market.</li>
          <li> Direct sales. People often sell their devices directly, both online and offline. Multiple marketplaces like eBay and Amazon offer options for later reselling used devices in bulk to refurbishing companies.</li>
          <li> Returns. Indeed, some of the devices are returned for various reasons. They also enter a used device market and are later resold.</li>
          <li> Corporate upgrades. Businesses that have corporate devices need to manage them carefully. This implies ensuring the quality of their assets provides secure data protection and fits their business needs. From time to time, corporate devices require an upgrade, leading to bulks of devices being resold.</li>
        </ul>
        <h2 dir="ltr">Are Certified Pre-Owned Phones Worth It?</h2>
        <p dir="ltr">Creating a stock of used device business as a private seller requires a lot of analytics and adaptation to your regional market needs. For example, the Northern American market is the most developed one, fueled with various technologies. To compete with manufacturers on this market and fulfill the growing customer demand for sustainable smartphone options, you need to offer diagnostic certificates and extended warranties.</p>
        <p dir="ltr">Conversely, in emerging markets like Latin America, the Middle East, and Africa, rapid growth leads to demand for affordable electronics. Certificates are unnecessary here to win your competitors as lower prices rule the game.</p>
        <p dir="ltr">However, certified devices are always an advantage. They increase the reliability of your business and show your thoughtful approach to your stock.&nbsp;</p>
        <h2 dir="ltr">How Can Businesses Provide Phone Certificates?</h2>
        <p dir="ltr">To certify your stock, you need to use testing software that performs complete diagnostics and provides detailed reports with the results.</p>
        <p dir="ltr">Try NSYS Diagnostics, the solution that detects over 100 hardware defects! Its tests include IMEI checks, non-original parts detection, battery health and camera checks, and more. For each device, NSYS Diagnostics generates a report with the results of every test and data wipe. These certificates will increase customer trust, allow you to provide extended warranties, and raise prices.</p>
        <p dir="ltr">Click the button below to get more details about NSYS Diagnostics!&nbsp;</p>`,
    ],
  };

  useSeoMeta({
    title: news.title,
    description:
      'Discover the differences between certified pre-owned and refurbished phones. Learn how diagnostic certificates enhance sales by proving device quality and reliability. Explore the benefits of NSYS Diagnostics for your business.',
    author: 'NSYS',
    ogSiteName: 'NSYS Group',
    ogUrl:
      'https://nsysgroup.com/blog/certified-pre-owned-phones-boost-your-stock/',
    ogTitle: news.title,
    ogType: 'website',
    ogImage: news.imageUrl,
    ogDescription:
      'Discover the differences between certified pre-owned and refurbished phones. Learn how diagnostic certificates enhance sales by proving device quality and reliability. Explore the benefits of NSYS Diagnostics for your business.',
  });
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
          pageLink: '/blog',
        },
        {
          label: news.title,
        },
      ]"
    />
    <article class="max-w-3xl mx-auto w-full">
      <h2 class="text-4xl leading-tight font-bold mb-4">{{ news.title }}</h2>
      <div class="flex items-center text-lg mb-10">
        <div class="text-[#c4c4c4]">{{ news.date }}</div>
        <span class="w-[5px] h-[5px] bg-azure mx-2 rounded-full block"></span>
        <div class="text-[#c4c4c4] font-bold">{{ news.author }}</div>
        <span class="w-[5px] h-[5px] bg-azure mx-2 rounded-full block"></span>
        <div class="text-[#c4c4c4]">{{ news.readTiming }}</div>
      </div>
      <img :src="news.imageUrl" :alt="news.title" class="mb-10" />
      <template v-for="content in news.content">
        <div v-html="content" class="content"></div>
      </template>
    </article>
  </div>
</template>

<style lang="scss">
  .content {
    font-size: 20px;
    h2 {
      font-weight: 800;
      font-size: 26px;
      line-height: 34px;
      margin: 30px 0 20px 0;
    }
    h3 {
      font-weight: 500;
      font-size: 26px;
      line-height: 34px;
      margin: 30px 0 20px 0;
    }
    p {
      margin: 0 0 20px;
    }
    img {
      margin: 50px auto;
    }
  }
</style>
