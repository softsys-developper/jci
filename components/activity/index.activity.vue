<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { useDataStore } from '@/stores/data.store';

</script>

<template>
   <div
      class="pt-32 w-11/12 m-auto flex flex-col gap-8"
      v-if="useDataStore().portfolio"
   >
      <div class="lg:w-6/12 w-11/12">
         <HeadingsSectionHeading
            subtitle="NOTRE GALERIE PHOTOS"
            title="Découvrez notre organisation, photos marquantes"
         />
      </div>

      <CardsCardActivity :end="16"  />

     
   </div>
</template>
