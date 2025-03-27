<script setup>
import { ref } from 'vue';
import bigWorkCard from '@/components/bigWorkCard.vue';
import TextMarquee from '@/components/TextMarquee.vue';
import MainFooter from '@/components/MainFooter.vue';
import cusorWorkCard from '@/components/cusorWorkCard.vue';

import project1 from '@/assets/img/hk-project.png';
import project2 from '@/assets/img/hk-microsoft.png';
import project3 from '@/assets/img/hk-sunshine.png';

const cusortext = ref(' Hello, I’m Nick. Welcome to my portfolio! ');

const cardData = [
  {
    no: '1',
    link: 'https://fcu-11309-ikk.dev-hub.io/',
    imgSrc: project1,
    title: '曉明基金會優化',
    content: '團體專案 —— 為期一個月，參與企劃發想、程式開發及成果簡報，協助網站功能實作與介面優化。',
    labels: ['#Vue.js', '#Tailwind', '#Mail.js'],
  },
  {
    no: '2',
    link: '',
    imgSrc: project2,
    title: '微軟官網首頁仿切',
    content: '利用原生css仿切的微軟官網首頁(含RWD),並利用套件Swiper製作輪播',
    labels: ['#Swiper'],
  },
  {
    no: '3',
    link: 'https://www.figma.com/proto/QuQwxwuPUZC1xucubN9jlW/%E8%81%B7%E8%A8%93-%E6%97%A5%E5%87%BA%E4%B9%B3%E9%85%AA?node-id=433-734&t=xrK260FHXUVm1uTo-1&scaling=contain&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=433%3A734',
    imgSrc: project3,
    title: '日出伴手禮介面優化',
    content: '團體專案 —— 參與企劃與設計，對原官網進行重構，優化 UX/UI 以提升使用者體驗。',
    labels: ['#Figma'],
  }
];


</script>

<template>
  <TextMarquee :data="{ position: 'fixed', speed: '1' }">
    <h1>{{ cusortext }}&nbsp</h1>
  </TextMarquee>

  <main>

    <section id="about">
      <div class="right-block">
        <h4>歡迎來到我的作品集！</h4>
        <h4>這裡記錄了一些學習歷程與前端開發的實作經驗。</h4>
        <p>
          我是Nick，我曾在服務業工作。轉行後，我參加了前端開發課程，專注於 HTML、CSS、JavaScript 及 Vue.js，並通過自學和實作提升技能。未來我將持續進修，並希望將所學應用於前端開發中。
        </p>
      </div>
      <div class="left-block">
        <img src="@/assets/img/dialogbox.svg" alt="" class="dialogbox">
        <div class="top-img frame">
          <img src="@/assets/img/ME.svg" alt="">
        </div>
        <div class="bottom-img frame">
          <div>
            <img src="../assets/img/cat-rotating.gif" alt="">
          </div>
        </div>
      </div>
    </section>

    <section id="projects">
      <h3>Projects</h3>
      <div class="big-card-block">
        <bigWorkCard v-for="(item, index) in cardData" :key="index" :data="item"></bigWorkCard>
      </div>
    </section>

    <cusorWorkCard></cusorWorkCard>

  </main>
  <MainFooter></MainFooter>
</template>

<style scoped>
main {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

h3 {
  font-size: 2rem;
  margin-left: 2rem;
}

h4 {
  font-size: 1.5rem;
  color: #333;
  padding-bottom: 5px;
  font-weight: 600;
}

p {
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
}

#about {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 12rem;
  padding: 10rem 3rem;
}

#about .right-block {
  width: 50%;
  background-color: rgba(169, 169, 169, 0.25);
  display: flex;
  flex-direction: column;
  padding: 1rem;
}

#about .right-block p {
  margin-top: 1.5rem;
}

#about .left-block {
  width: 50%;
  display: flex;
  gap: 2rem;
  padding: 2rem;
  position: relative;
}

#about .dialogbox{
  position: absolute;
  z-index: 3;
  top: 40%;
  left:4%;
  animation: fadeIn 12s ease-in-out infinite ;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
    transform:rotate(-20deg) scale(0.9) translate(80%,50%);
  }10%{
    opacity: 10;
    transform: translate(1%,1%) scale(1.3) rotate(-5deg);
  }
  20%{
    transform: rotate(5deg);
  }
  30%{
    transform: rotate(-15deg) scale(1.3);
  }

  60%{
    transform: rotate(10deg);
  }

  90%{
    opacity: 10;
    transform: translate(1%,1%) scale(1.3) rotate(5deg);
  }
  100%{
    opacity: 0;
    transform:rotate(-20deg) scale(0.9) translate(50%,200%);;
  }
}


#about .left-block .frame {
  border: 2px solid black;
  position: absolute;
  background-color: white;
  padding: 1.5rem;
  border-radius: 5px;
}

#about .left-block .frame img {
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
}

.left-block .top-img {
  transform: rotate(-8deg)scale(1.1);
  z-index: 2;
  left: 12%;
}


#about .left-block .frame div {
  padding: 2rem;
  background-image: url('../assets/img/bg.svg');
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
}

.left-block .bottom-img {
  left: 50%;
  top: 70%;
  transform: rotate(20deg);
  z-index: 1;
}


#projects .big-card-block {
  width: 100%;
  display: flex;
  gap: 2px;
  background-color: black;
  border-bottom: 2.5px solid black;
  border-top: 2.5px solid black;
}

@media screen and (max-width: 1058px) {
  #about {
    gap: 2rem;
    margin-bottom: 16rem;
  }

  #about .right-block {
    width: 100%;
  }

  #about .left-block {
    width: 100%;
  }

  #about .left-block .top-img {
    transform: rotate(-8deg)scale(1.1);
    z-index: 2;
    left: 6%;
  }

  #projects .big-card-block {
    flex-direction: column;
    align-items: center;
    padding: 0 2px;
  }
}

@media screen and (max-width: 672px) {


  h3 {
    font-size: 1.4rem;
  }

  h4 {
    font-size: 1.2rem;
  }

  p {
    font-size: 0.8rem;
  }
}
</style>