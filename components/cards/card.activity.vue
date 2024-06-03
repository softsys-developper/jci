<template>
   <div class="">
     
      <div class="grid max-md:grid-cols-2 grid-cols-4 gap-1">
         <div v-for="IM in GALERIES">
            <a :href="IM?.original_url" target="_blank">
               <div class="w-full max-md:h-48 h-72 rounded-md">
                  <NuxtImg
                     sizes="100vw sm:50vw md:400px"
                     :placeholder="[30, 20]"
                     :src="IM?.original_url"
                     class="rounded-md w-full h-full object-cover"
                  />
               </div>
            </a>
         </div>
      </div>

      <!-- if redirect to another page -->
      <NuxtLink to="/activity" class="flex justify-center" v-if="$route.path != '/activity'" >
         <button :style="'background-color: ' +  useDataStore().users?.color_1"
            class=" px-4 py-3 flex items-center gap-2 text-base rounded-md text-white underline font-bold mt-5"
         >
            <span class="">Voir plus images  </span>
            <i class="ri-arrow-right-line"></i>
         </button>
      </NuxtLink>

          <!-- If you want to use pagination -->
          <div class="flex justify-center" v-if="$route.path == '/activity' && GALERIE_CACHE.length >= more" >
         <button
         @click="more = more + 8"
         :style="'background-color: ' + useDataStore().users?.color_1"
         class="px-4  flex items-center gap-2 text-base py-2 rounded-md text-white font-bold mt-5 "
      >
         <span class="">Voir plus  </span>
         <i class="ri-arrow-right-line"></i>
      </button>
      </div>

   </div>
   {{ IsEnd }}
</template>
<script setup>
import { useDataStore } from '@/stores/data.store';
import { onMounted, ref, computed } from 'vue';

import { refService } from '@/services/app/index.services';
import { URI } from '@/services/uri/index.uri';
const GetActivity = async () => {
   const { findMany } = await refService(URI.ACTIVITES, 'portfolio');
   const { data } = await findMany();

   if (data) {
      useDataStore().portfolio = data.data.activites;
   }
};

const GALERIES = ref([]);
const GALERIE_CACHE = ref([]);
const props = defineProps(['start', 'end', 'size']);
const more = ref(16);
const IsEnd = computed(() => {
   if (more.value) {
      GALERIES.value = GALERIE_CACHE.value.slice(0, more.value);
   }
});





const OnLoaded =  () => {
   useDataStore().portfolio.forEach((pf) => {
      pf?.medias.forEach((media) => {
         GALERIES.value.push(media);
         GALERIES.value = GALERIES.value?.reverse()
      });
   });

   GALERIE_CACHE.value = GALERIES.value?.reverse();
}

onMounted(() => {
   if (useDataStore().portfolio?.length == 0) {
      GetActivity().then(() => {
         OnLoaded()
      })
   }

   OnLoaded()
});
</script>
<style lang="scss" scoped></style>
