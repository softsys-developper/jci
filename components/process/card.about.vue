<template>
   <div class=" grid lg:grid-cols-2 grid-cols-1 gap-16 w-11/12 m-auto" v-if="useDataStore().users">
      <!--  -->
      <div class="">
         <div class="w-full relative">
            <div class="bg-gray-700 lg:h-[550px] h-[300px] lg:w-9/12 rounded-md w-11/12">
               <NuxtImg sizes="100vw sm:50vw md:400px " :placeholder="[50, 25, 75, 5]"
                  :src="useDataStore().users?.about_image_1" class="h-full rounded-md w-full object-cover object-top" />
            </div>

            <div class="bg-red-700 lg:h-[250px] h-[175px] lg:w-8/12 w-8/12 absolute rounded-md -bottom-16 right-0">
               <NuxtImg sizes="100vw sm:50vw md:400px rounded-md" :placeholder="[50, 25, 75, 5]"
                  :src="useDataStore().users?.about_image_2" class="h-full rounded-md w-full object-cover" />
            </div>
         </div>
      </div>

      <!--  -->
      <div class="flex flex-col gap-8 mt-16 lg:mt-0">
         <HeadingsSectionHeading subtitle="A Propos" :title="'A propos JCI ' + useDataStore().users?.name" />

         <div class="flex flex-col gap-4">
            <article
               v-html="truncate(useDataStore().users?.description, $route.path == '/a_propos' ? useDataStore().users?.description.length : 700)"
               class="text-lg whitespace-pre-line leading-6 line-champs-[40px]">
            </article>

            <div class="">
               <NuxtLink v-if="useDataStore().users?.description.length > 700 && $route.path != '/a_propos'"
               :style="'background-color: ' + useDataStore().users?.color_1" to="/a_propos"
               class="rounded-sm text-lg font-semibold text-white hover:underline px-4 py-3  inline-flex items-center">
               En savoir plus +
            </NuxtLink>
            </div>


            <div class=" flex-col gap-2 mt-8 hidden">
               <div v-for="AX in Axes">
                  <div class="flex gap-2">
                     <i class="ri-magic-fill  text-xl" :style="'color: ' + useDataStore().users?.color_2"></i>
                     <span class="text-lg font-semibold first-letter:uppercase">
                        {{ AX }}
                     </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>
<script setup>
import { useDataStore } from '@/stores/data.store';
const Axes = [
   'Notoriété et visibilité de la marque',
   'Développement du leadership',
   'Structure ouverte, efficace et durable',
   'Innovation axée sur les données',
];

const truncate = (text, length) => {
   if (text.length <= length) return text;
   return text.substring(0, length) + '...';
}

</script>
<style lang="scss" scoped></style>