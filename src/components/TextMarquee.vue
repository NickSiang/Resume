<script setup>
import { ref, onMounted, nextTick, defineProps } from 'vue';

import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const splide1 = ref(null);

const props = defineProps({
  data: {
    type: Object,
    default: () => ({
      position: '',
      cusorcolor: '',
      textcolor: '',
      text: '',
      img: '',
    })
  },
})

const loadSplide = () => {
  const splide = new Splide(splide1.value, {
    type: 'loop',
    perPage: 100,
    focus: 'center',
    autoWidth: true,
    pagination: false,
    arrows: false,
    autoScroll: {
      pauseOnFocus: false,
      pauseOnHover: false,
      speed: 1,
    },
  });

  splide.mount({ AutoScroll });
};

onMounted(() => {
  nextTick(() => {
    loadSplide();
  });
});

</script>

<template>
  <section class="splide" ref="splide1" :style="{ position: data.position, 'background-color': data.cusorcolor }">
    <div class="splide__track">
      <ul class="splide__list">
        <li class="splide__slide" v-for="(item, index) in data">
          <slot></slot>
          <div>
            <img :src="item.img" alt="">
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.splide {
  width: 100%;
  z-index: -1;
  top: 6%;
}
.splide__track{
  width: 100%;
}
.splide__slide {
  white-space: nowrap;
  text-align: center;
  font-size: 2rem;
  color: rgba(182, 182, 182, 0.192);
  padding: 0 0rem;
}

</style>
