<!-- eslint-disable max-len -->
<!-- <template>
  <div class="app-container">
    <h3 class="font-medium m-0">Contact list</h3>

    <div class="contact-list grid gap-5 my-5">
      <div class="contact-card rounded-lg bg-white shadow relative">
        <div class="contact-card__body flex p-6 pb-2">
          <div class="contact-card__info flex-grow text-sm truncate">
            <template v-if="!isEdited">
              <p class="font-medium">Jane Cooper</p>
              <p class="text-gray mt-1 truncate">
                Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician
              </p>
            </template>
            <template v-else>
              <input ref="contactInput" type="text" value="Jane Cooper" class="block w-full font-medium">
              <input type="text" value="Regional Paradigm Technician" class="block w-full text-gray mt-1">
            </template>
          </div>
          <img
            class="contact-card__avatar w-[40px] h-[40px] object-cover ml-2 rounded-full shrink-0"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="contact-logo"
          >
        </div>

        <div class="flex px-6 mb-4">
          <span
            v-if="isEdited"
            class="text-gray font-medium text-xs cursor-pointer hover:underline ml-auto"
            @click="isEdited = false"
          >
            Cancel
          </span>
          <span
            v-if="isEdited"
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline ml-4"
            @click="isEdited = false"
          >
            Save
          </span>
          <span
            v-if="!isEdited"
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline ml-auto"
            @click="selectEditView"
          >
            Edit
          </span>
        </div>

        <div class="contact-card__footer flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light">
          <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
            <svg class="h-5 w-5 text-gray-medium" x-description="Heroicon name: mini/envelope" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
            </svg>
            <span class="ml-3">Email</span>
          </div>
          <div
            class="flex items-center justify-center flex-1 py-4 border-l
            border-gray-ultra-light cursor-pointer hover:text-gray"
          >
            <svg class="h-5 w-5 text-gray-medium" x-description="Heroicon name: mini/phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
            </svg>
            <span class="ml-3">Call</span>
          </div>
        </div>
      </div>

      <div class="contact-card rounded-lg bg-white shadow relative">
        <div class="contact-card__body flex p-6 pb-2">
          <div class="contact-card__info flex-grow text-sm truncate">
            <template v-if="!isEdited">
              <p class="font-medium">Jane Cooper</p>
              <p class="text-gray mt-1 truncate">
                Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician
              </p>
            </template>
            <template v-else>
              <input ref="contactInput" type="text" value="Jane Cooper" class="block w-full font-medium">
              <input type="text" value="Regional Paradigm Technician" class="block w-full text-gray mt-1">
            </template>
          </div>
          <img
            class="contact-card__avatar w-[40px] h-[40px] object-cover ml-2 rounded-full shrink-0"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="contact-logo"
          >
        </div>

        <div class="flex px-6 mb-4">
          <span
            v-if="isEdited"
            class="text-gray font-medium text-xs cursor-pointer hover:underline ml-auto"
            @click="isEdited = false"
          >
            Cancel
          </span>
          <span
            v-if="isEdited"
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline ml-4"
            @click="isEdited = false"
          >
            Save
          </span>
          <span
            v-if="!isEdited"
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline ml-auto"
            @click="selectEditView"
          >
            Edit
          </span>
        </div>

        <div class="contact-card__footer flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light">
          <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
            <svg class="h-5 w-5 text-gray-medium" x-description="Heroicon name: mini/envelope" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
            </svg>
            <span class="ml-3">Email</span>
          </div>
          <div
            class="flex items-center justify-center flex-1 py-4 border-l
            border-gray-ultra-light cursor-pointer hover:text-gray"
          >
            <svg class="h-5 w-5 text-gray-medium" x-description="Heroicon name: mini/phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">

              <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
            </svg>
            <span class="ml-3">Call</span>
          </div>
        </div>
      </div>

      <div class="contact-card rounded-lg bg-white shadow relative">
        <div class="contact-card__body flex p-6 pb-2">
          <div class="contact-card__info flex-grow text-sm truncate">
            <template v-if="!isEdited">
              <p class="font-medium">Jane Cooper</p>
              <p class="text-gray mt-1 truncate">
                Regional Paradigm Technician Regional Paradigm Technician Regional Paradigm Technician
              </p>
            </template>
            <template v-else>
              <input ref="contactInput" type="text" value="Jane Cooper" class="block w-full font-medium">
              <input type="text" value="Regional Paradigm Technician" class="block w-full text-gray mt-1">
            </template>
          </div>
          <img
            class="contact-card__avatar w-[40px] h-[40px] object-cover ml-2 rounded-full shrink-0"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="contact-logo"
          >
        </div>

        <div class="flex px-6 mb-4">
          <span
            v-if="isEdited"
            class="text-gray font-medium text-xs cursor-pointer hover:underline ml-auto"
            @click="isEdited = false"
          >
            Cancel
          </span>
          <span
            v-if="isEdited"
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline ml-4"
            @click="isEdited = false"
          >
            Save
          </span>
          <span
            v-if="!isEdited"
            class="text-blue-500 font-medium text-xs cursor-pointer hover:underline ml-auto"
            @click="selectEditView"
          >
            Edit
          </span>
        </div>

        <div class="contact-card__footer flex text-sm font-medium text-gray-dark border-t border-gray-ultra-light">
          <div class="flex items-center justify-center flex-1 py-4 cursor-pointer hover:text-gray">
            <svg class="h-5 w-5 text-gray-medium" x-description="Heroicon name: mini/envelope" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
              <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
            </svg>
            <span class="ml-3">Email</span>
          </div>
          <div
            class="flex items-center justify-center flex-1 py-4 border-l
            border-gray-ultra-light cursor-pointer hover:text-gray"
          >
            <svg class="h-5 w-5 text-gray-medium" x-description="Heroicon name: mini/phone" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">

              <path fill-rule="evenodd" d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z" clip-rule="evenodd" />
            </svg>
            <span class="ml-3">Call</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> -->

<!-- <script lang="ts" setup>
// YOUR CODE HERE
const isEdited = ref(false)
const contactInput = ref()

const selectEditView = async () => {
  isEdited.value = true
  await nextTick()
  contactInput.value.focus()
}
</script> -->
<template>
  <div class="app-container">
    <header class="py-[24px]">
      <div class="flex">
        <ul class="flex items-center font-poppins leading-4 text-blue ">
          <li class="mr-[72px]">
            <a class="flex justify-center items-center" href="./">
              <img class="flex justify-center items-center" src="./assets/images/main-logo.svg" alt="Logo">
            </a>
          </li>
          <li class="mr-9"><a class=" " href="#">Home</a></li>
          <li class="mr-9"><a class=" " href="#">About us</a></li>
          <li class="mr-9"><a class=" " href="#">Destinations</a></li>
          <li class="mr-9"><a class=" " href="#">Tours</a></li>
          <li><a class=" " href="#">Blog</a></li>
        </ul>
        <div class="flex ml-[383px]">
          <button class="flex items-center justify-center font-poppins leading-4 text-orange w-[170px] h-[54px] border border-solid border-orange rounded-[27px] font-medium">
            Book Now
            <img class="ml-1.5" src="./assets/images/letter.svg" alt="Logo">
          </button>
        </div>
      </div>
    </header>
    <div class="flex gap-[67px] pt-[74px] pb-[84px] relative">
      <div>
        <h1 class="font-sen text-[84px] text-mainTitle max-w-[577px] leading-[86px]">Discover the Best Lovely Places</h1>
        <p class="max-w-[500px] text-[18px] leading-7 mt-[26px]">Plan and book your perfect trip with expert advice, travel tips, destination information and inspiration from us.</p>
        <div class="flex items-center mt-11  bg-locationColor max-w-[500px] h-[76px] rounded-[38px]">
          <div class="ml-7 mr-[68px] before:absolute">
            <h3 class="text-[18px] text-mainTitle font-medium leading-[17px]  mb-2">
              Where
            </h3>
            <div class="flex">
              <p class="text-locationTxt text-xs">
                Center Point, Lo...
              </p>
              <img class="ml-[26px]" src="./assets/images/location.svg" alt="location">
            </div>
          </div>
          <div>
            <h3 class="text-[18px] text-mainTitle font-medium leading-[17px] mb-2">
              Date
            </h3>

            <div class="flex">
              <p class="text-locationTxt text-xs">
                09th March,2021
              </p>
              <img class="ml-[26px]" src="./assets/images/calendar.svg" alt="calendar">
            </div>
          </div>
          <div class="bg-orange p-[13px] mr-5 ml-14 rounded-[31px] cursor-pointer">
            <img src="./assets/images/search.svg" alt="search">
          </div>
        </div>
      </div>
      <div class="absolute top-[10px] right-0">
        <img src="./assets/images/home.png" alt="">
      </div>
    </div>
    <div class="pt-[97px] pb-[32px]">
      <div class="flex justify-between mb-6">
        <h2 class="font-semibold text-[56px] leading-[56px] text-mainTitle ">
          Categories
        </h2>
        <div class="flex gap-4">
          <button class="px-[24px] py-[21px] border border-solid border-mainTitle rounded-[50%]">
            <img src="./assets/images/arrow-l.svg" alt="arrow left">
          </button>
          <button class="px-[24px] py-[21px] bg-mainTitle border border-solid border-mainTitle rounded-[50%]">
            <img src="./assets/images/arrow-r.svg" alt="arrow right">
          </button>
        </div>
      </div>
      <p class="max-w-[370px] leading-[26px] mb-[60px]">
        Here are lots of interesting destinations to visit, but don’t be confused—they’re already grouped by category.
      </p>
      <ul class="flex gap-[30px] flex-wrap justify-center">
        <li>
          <img src="./assets/images/categories-1.png" alt="">
          <h3 class="text-center mt-[18px] text-[26px] leading-[26px] font-medium text-mainTitle">Beach</h3>
        </li>
        <li>
          <img src="./assets/images/categories-2.png" alt="">
          <h3 class="text-center mt-[18px] text-[26px] leading-[26px] font-medium text-mainTitle">Desert</h3>
        </li>
        <li>
          <img src="./assets/images/categories-3.png" alt="">
          <h3 class="text-center mt-[18px] text-[26px] leading-[26px] font-medium text-mainTitle">Mountain</h3>
        </li>
        <li>
          <img src="./assets/images/categories-4.png" alt="">
          <h3 class="text-center mt-[18px] text-[26px] leading-[26px] font-medium text-mainTitle">Temple</h3>
        </li>
        <li>
          <img src="./assets/images/categories-5.png" alt="">
          <h3 class="text-center mt-[18px] text-[26px] leading-[26px] font-medium text-mainTitle">Tower</h3>
        </li>
        <li>
          <img src="./assets/images/categories-6.png" alt="">
          <h3 class="text-center mt-[18px] text-[26px] leading-[26px] font-medium text-mainTitle">Pyramid</h3>
        </li>
      </ul>
    </div>

    <div class="flex gap-[77px] pt-[168px] pb-[82px] ">
      <div class="relative  min-w-[556px]">
        <div class="absolute top-[-60px] left-[-35px]">
          <img class="min-h-[583px] min-w-[541px]" src="./assets/images/about-us.png" alt="man with camera">
        </div>
      </div>
      <div class="max-w-[538px]">
        <div class="max-w-[467px]">
          <p class="mb-5 text-xl font-semibold text-orange leading-5 tracking-[0.2em]">Our Experience</p>
          <h2 class="mb-5 font-semibold text-[56px] leading-[66px] text-mainTitle ">
            Our Stories Have Adventures
          </h2>
          <p class="mb-[40px] leading-[26px]">
            We are experienced in bringing adventures to stay their journey, with all outdoor destinations in the world as our specialties. Start your adventure now! Nature has already called you!
          </p>
        </div>
        <ul class="flex gap-5">
          <li class="min-w-[166px] min-h-[178px] bg-white rounded-[14px]">
            <p class="pt-[30px] pl-[26px] pr-[30px] mb-[18px] text-[46px] text-orange leading-[46px] font-semibold">12K+</p>
            <p class="pl-[26px] pr-[54px] pb-[26px] text-[21px] leading-[29px]">Succes Journey</p>
          </li>
          <li class="min-w-[166px] min-h-[178px] bg-white rounded-[14px]">
            <p class="pt-[30px] pl-[35px] pr-[48px] mb-[18px] text-[46px] text-orange leading-[46px] font-semibold">16+</p>
            <p class="pl-[35px] pr-[45px] pb-[26px] text-[21px] leading-[29px]">Awards Winning</p>
          </li>
          <li class="min-w-[166px] min-h-[178px] bg-white rounded-[14px]">
            <p class="pt-[30px] pl-[28px] pr-[47px] mb-[18px] text-[46px] text-orange leading-[46px] font-semibold">20+</p>
            <p class="pl-[28px] pr-[23px] pb-[26px] text-[21px] leading-[29px]">Years Of Experience</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="pt-[82px]">
      <div class="flex justify-between items-center mb-9 ">
        <h2 class="max-w-[400px] font-semibold text-[56px] leading-[66px] text-mainTitle ">
          Find Popular
          Destination
        </h2>
        <div class="flex gap-4">
          <button class="px-[24px] py-[21px] border border-solid border-mainTitle rounded-[50%]">
            <img src="./assets/images/arrow-l.svg" alt="arrow left">
          </button>
          <button class="px-[24px] py-[21px] bg-mainTitle border border-solid border-mainTitle rounded-[50%]">
            <img src="./assets/images/arrow-r.svg" alt="arrow right">
          </button>
        </div>
      </div>
      <ul class="destination-list gap-[30px] pb-[20px]">
        <li class="max-w-[388px] max-h-[440px]  border-2 border-white rounded-2xl shadow hover:shadow-3xl cursor-pointer">
          <div class="pt-3 px-3">
            <img src="./assets/images/destination-1.png" alt="sea">
          </div>
          <div class="mt-6 pl-6">
            <h4 class="text-2xl leading-6 font-semibold text-mainTitle">Mountain Hiking Tour</h4>
            <p class="mt-[14px] text-[14px] leading-[14px]">Mountain Hiking Tour</p>
          </div>
          <div class="flex justify-between items-center px-6 pb-9 mt-[27px]">
            <p class="leading-5">
              <span class="text-2xl leading-5 font-semibold text-mainTitle">
                $89
              </span>
              /Person
            </p>
            <button class="max-w-[102px] max-h-[37px] px-4 pt-3 pb-[11px] text-center border border-solid text-mainTitle rounded-[46px] text-[14px] leading-[14px] hover:bg-mainTitle hover:text-white ">
              Book Now
            </button>
          </div>
        </li>
        <li class="max-w-[388px] max-h-[440px]  border-2 border-white rounded-2xl shadow hover:shadow-3xl cursor-pointer">
          <div class="pt-3 px-3">
            <img src="./assets/images/destination-2.png" alt="sea">
          </div>
          <div class="mt-6 pl-6">
            <h4 class="text-2xl leading-6 font-semibold text-mainTitle">Machu Picchu, Peru</h4>
            <p class="mt-[14px] text-[14px] leading-[14px]">Machu Picchu, Peru</p>
          </div>
          <div class="flex justify-between items-center px-6 pb-9 mt-[27px]">
            <p class="leading-5">
              <span class="text-2xl leading-5 font-semibold text-mainTitle">
                $99
              </span>
              /Person
            </p>
            <button class="max-w-[102px] max-h-[37px] px-4 pt-3 pb-[11px] text-center border border-solid text-mainTitle rounded-[46px] text-[14px] leading-[14px] hover:bg-mainTitle hover:text-white ">
              Book Now
            </button>
          </div>
        </li>
        <li class="max-w-[388px] max-h-[440px]  border-2 border-white rounded-2xl shadow hover:shadow-3xl cursor-pointer">
          <div class="pt-3 px-3">
            <img src="./assets/images/destination-3.png" alt="sea">
          </div>
          <div class="mt-6 pl-6">
            <h4 class="text-2xl leading-6 font-semibold text-mainTitle">The Grand Canyon, Arizona</h4>
            <p class="mt-[14px] text-[14px] leading-[14px]">Mountain Hiking Tour</p>
          </div>
          <div class="flex justify-between items-center px-6 pb-9 mt-[27px]">
            <p class="leading-5">
              <span class="text-2xl leading-5 font-semibold text-mainTitle">
                $70
              </span>
              /Person
            </p>
            <button class="max-w-[102px] max-h-[37px] px-4 pt-3 pb-[11px] text-center border border-solid text-mainTitle rounded-[46px] text-[14px] leading-[14px] hover:bg-mainTitle hover:text-white ">
              Book Now
            </button>
          </div>
        </li>
        <li class="max-w-[388px] max-h-[440px]  border-2 border-white rounded-2xl shadow hover:shadow-3xl cursor-pointer">
          <div class="pt-3 px-3">
            <img src="./assets/images/destination-4.png" alt="sea">
          </div>
          <div class="mt-6 pl-6">
            <h4 class="text-2xl leading-6 font-semibold text-mainTitle">Rome, Italy</h4>
            <p class="mt-[14px] text-[14px] leading-[14px]">Mountain Hiking Tour</p>
          </div>
          <div class="flex justify-between items-center px-6 pb-9 mt-[27px]">
            <p class="leading-5">
              <span class="text-2xl leading-5 font-semibold text-mainTitle">
                $99
              </span>
              /Person
            </p>
            <button class="max-w-[102px] max-h-[37px] px-4 pt-3 pb-[11px] text-center border border-solid text-mainTitle rounded-[46px] text-[14px] leading-[14px] hover:bg-mainTitle hover:text-white ">
              Book Now
            </button>
          </div>
        </li>
      </ul>
    </div>
    <div class="pt-[120px]">
      <h2 class="mb-4 text-[56px] leading-[66px] font-semibold text-center text-mainTitle">
        Top Destinations
      </h2>
      <p class="mb-7 text-center">Sost Brilliant reasons Entrada should be your one-stop-shop!</p>
      <ul class="flex justify-center flex-wrap gap-[14px] mb-[51px]">
        <li>
          <button class=" max-h-[34px] px-5 pt-[10px] pb-[10px] text-center border border-solid text-mainTitle rounded-[46px] text-[14px] leading-[14px] hover:bg-mainTitle hover:text-white ">
            London
          </button>
        </li>
        <li>
          <button class=" max-h-[34px] px-5 pt-[10px] pb-[10px] text-center border border-solid text-mainTitle rounded-[46px] text-[14px] leading-[14px] hover:bg-mainTitle hover:text-white ">
            Bangkok
          </button>
        </li>
        <li>
          <button class=" max-h-[34px] px-5 pt-[10px] pb-[10px] text-center border border-solid text-mainTitle rounded-[46px] text-[14px] leading-[14px] hover:bg-mainTitle hover:text-white ">
            England
          </button>
        </li>
        <li>
          <button class=" max-h-[34px] px-5 pt-[10px] pb-[10px] text-center border border-solid text-mainTitle rounded-[46px] text-[14px] leading-[14px] hover:bg-mainTitle hover:text-white ">
            Singapore
          </button>
        </li>
        <li>
          <button class=" max-h-[34px] px-5 pt-[10px] pb-[10px] text-center border border-solid text-mainTitle rounded-[46px] text-[14px] leading-[14px] hover:bg-mainTitle hover:text-white ">
            Italy
          </button>
        </li>
      </ul>
      <div class="flex flex-wrap justify-center gap-[30px] pb-[37px]">
        <div class="flex flex-col gap-[26px]">
          <img src="./assets/images/top-destination-1.png" alt="">
          <img src="./assets/images/top-destination-2.png" alt="">
        </div>
        <div>
          <img src="./assets/images/top-destination-3.png" alt="">
        </div>
        <div class="flex flex-col gap-[13px]">
          <div>
            <img src="./assets/images/top-destination-4.png" alt="">
          </div>
          <div class="flex gap-[30px] flex-wrap">
            <img src="./assets/images/top-destination-5.png" alt="">
            <img src="./assets/images/top-destination-6.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-[175px] pt-[66px]">
      <div class="max-w-[390px] pl-[68px]">
        <img class="max-w-[390px]" src="./assets/images/blog.png" alt="">
      </div>
      <div class="max-w-[537px]">
        <h2 class="mb-[26px] font-semibold text-[56px] text-mainTitle leading-[66px] capitalize ">
          A customer said about us:
        </h2>
        <div class="bg-white rounded-[14px]">
          <p class=" pl-[30px] pt-[32px] pr-[34px]">
            Salty helped me a lot in finding the best place for our first outdoor adventure trip. They responded very quickly and gave me a detailed account of the place—its history, as well as its best features.
          </p>
          <div class="mt-[27px] pl-[30px]">
            <img src="./assets/images/stars.svg" alt="">
          </div>
          <div class="flex justify-between px-[30px] pb-[30px] mt-[17px]">
            <div>
              <h4>
                Andrew Sarma
              </h4>
              <p>Enterpreneur</p>
            </div>
            <div class="flex gap-4">
              <button class="px-[19px] py-[15px] border border-solid border-mainTitle rounded-[50%]">
                <img src="./assets/images/arrow-l.svg" alt="arrow left">
              </button>
              <button class="px-[19px] py-[15px] bg-mainTitle border border-solid border-mainTitle rounded-[50%]">
                <img src="./assets/images/arrow-r.svg" alt="arrow right">
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app-container {
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}

.destination-list {
  // grid-template-columns: repeat(auto-fill, minmax(386px, 1fr));
  width: 1170px;
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;

  > li {
    flex-shrink: 0;
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }
}
</style>
