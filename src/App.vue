<template>
  <div class="sticky-panel p-4 pb-0">
    <h3 class="font-medium">Countries</h3>

    <hr class="mt-2">
  </div>

  <div class="p-4 h-[2000px] flex flex-col">
    <p v-if="loading">Loading...</p>
    <p v-else-if="!countries">Error happened during countries fetchclre...</p>

    <ul v-else class="list-disc list-inside">
      <li v-for="country in countries" :key="country.id">
        {{ country.name }}

        <ol>
          <li v-for="city in country.cities" v-show="hashedCities[city]?.name" :key="city" class="ml-4">
            - {{ hashedCities[city]?.name }}
          </li>
        </ol>
      </li>
    </ul>
    <div id="bottm" class="mt-auto">Bottom</div>
  </div>
</template>

<script lang="ts" setup>
import { countryService } from '@/examples/data-preparation'

const countries = ref()
const cities = ref()
const hashedCities = ref<any>({})
const loading = ref(false)

const loadData = () => {
  loading.value = true
  return Promise.all([countryService.getCountries(), countryService.getCities()])
    .then((res) => {
      countries.value = res[0]
      cities.value = res[1]
      hashedCities.value = countryService.citiesHashed(res[1])
    }).finally(() => (loading.value = false))
}

const loadDataSettled = () => {
  loading.value = true
  return Promise.allSettled([countryService.getCountries(), countryService.getCities()])
    .then((res) => {
      if (res[0].status === 'fulfilled') {
        countries.value = res[0].value
      }
      if (res[1].status === 'fulfilled') {
        cities.value = res[1].value
        hashedCities.value = countryService.citiesHashed(res[1].value)
      }
    }).finally(() => (loading.value = false))
}

loadDataSettled()

</script>

<style lang="scss">
.sticky-panel {
  width: 100%;
  position: fixed;
  background: white;
  top: 0;
}

.sticky-panel + div {
  padding-top: 64px;
}
</style>
