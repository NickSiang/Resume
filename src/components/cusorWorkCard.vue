<script setup>

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import miniproject1 from '@/assets/img/hk-stopwatch.png';
import miniproject2 from '@/assets/img/hk-note.png';
import miniproject3 from '@/assets/img/hk-cost.png';
import miniproject4 from '@/assets/img/hk-timer.png';
import miniproject5 from '@/assets/img/hk-weight.png';
import miniproject6 from '@/assets/img/hk-wheather.png';
import miniproject7 from '@/assets/img/hk-map.png';
import miniproject8 from '@/assets/img/hk-colorgame.png';
import miniproject9 from '@/assets/img/hk-picachu.png';

const modules = [Autoplay, Pagination, Navigation];
const breakpoints = {
    1200: {
        slidesPerView: 5,
        spaceBetween: 0,
    },
    768: {
        slidesPerView: 3,
        spaceBetween: 1,
    },
    576: {
        slidesPerView: 2,
        spaceBetween: 0,
    },
    0: {
        slidesPerView: 1.5,
        spaceBetween: 0,
    },
};

const navigation = {
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
};

const autoplay = {
    delay: 5000,
    disableOnInteraction: false,
};

const datas = [{
    link: 'https://n-siang.github.io/VuePractice8/',
    imgSrc: miniproject1,
    title: '碼表應用程式',
    content: '簡易碼表應用程式，擁有「開始」、「暫停」、「繼續」與「重設」按鈕，方便隨時控制與重置計時。',
},
{
    link: 'https://n-siang.github.io/VuePractice8/#/Vue8of2',
    imgSrc: miniproject2,
    title: '筆記應用程式',
    content: '筆記內容會即時儲存至 local storage，側邊顯示「筆記清單」，讓用戶方便切換和管理',
},
{
    link: 'https://n-siang.github.io/VuePractice8/#/Vue8of3',
    imgSrc: miniproject3,
    title: '分帳應用程式',
    content: '提供新增成員、記錄支出、金額自動計算及一鍵結清的功能，讓你在旅程結束時輕鬆歸零。'
},
{
    link: 'https://n-siang.github.io/VuePractice8/#/Vue8of4',
    imgSrc: miniproject4,
    title: ' 行事曆應用程式',
    content: '使用 FullCalendar和 datetimepicker套件，製作一個可以顯示和儲存活動的行事曆，並且能在點擊對應日期後顯示詳細的活動資訊。可以直接在行事曆內刪除不需要的活動。',
},
{
    link: 'https://n-siang.github.io/VuePractice8/#/Vue8of5',
    imgSrc: miniproject5,
    title: '體重追蹤應用程式',
    content: '此程式能讓用戶新增體重資料，輸入欄位包括「體重」和「日期」，並將每筆資料顯示在清單中，按照日期排序。每筆資料旁都有刪除按鈕。使用 Chart.js 將體重變化呈現為折線圖，幫助用戶輕鬆追蹤體重走勢。',
},
{
    link: 'https://n-siang.github.io/VuePractice8/#/Vue8of6',
    imgSrc: miniproject6,
    title: '天氣查詢應用程式',
    content: '透過串接氣象局 API 來取得最新數據。頁面上有一個「縣市」選單，使用者可選擇想查詢的縣市。選擇縣市後，系統會顯示該縣市的即時天氣資訊。',
},
{
    link: 'https://n-siang.github.io/VuePractice8/#/Vue8of7',
    imgSrc: miniproject7,
    title: '國家資訊與地圖應用程式',
    content: '使用 OpenStreetMap 顯示世界地圖，並搭配 Leaflet 套件放置上百個代表國家的大頭針。點擊大頭針後，會彈出視窗顯示該國的相關資訊，資料則來自於 Restcountries API。',
},
{
    link: 'https://nicksiang.github.io/Colorgame/',
    imgSrc: miniproject8,
    title: '色弱遊戲',
    content: '使用原生js製作的簡易小遊戲',
},
{
    link: 'https://nicksiang.github.io/CssAnimation/',
    imgSrc: miniproject9,
    title: '皮卡丘',
    content: '在Figma中創建SVG圖形，並利用CSS動畫，為SVG元素添加動態效果。',

}
];

</script>

<template>
    <div class="container">
        <!-- <h3>Vue</h3> -->
        <swiper :slidesPerView="4" :speed="1000" :loop="true" :centeredSlides="true" :autoHeight="false" :spaceBetween="0"
            :autoplay="autoplay" :navigation="navigation" :modules="modules" :breakpoints="breakpoints"
            class="mySwiper">
            <swiper-slide v-for="(data, index) in datas" :key="index">
                <a :href="data.link" target="_blank" rel="noopener noreferrer">
                    <div class="img-block">
                        <img :src="data.imgSrc" alt="">
                    </div>
                    <div class="content">
                        <h6>{{ '#' + (index + 1) }}</h6>
                        <h4>{{ data.title }}</h4>
                        <p>{{ data.content }}</p>
                    </div>
                </a>
            </swiper-slide>
        </swiper>
        <div class="swiper-buttons">
            <button class="custom-prev custom"><img src="@/assets/img/arrow-pre.svg" alt=""></button>
            <button class="custom-next custom"><img src="@/assets/img/arrow-next.svg" alt=""></button>
        </div>
    </div>
</template>

<style scoped>
h3 {
    font-size: 2rem;
}

h4 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #000000;
}

h6 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #000000;
    position: absolute;
    top: -15%;
    left: 0%;
    transform: translate(-50%, 0);
}

p {
    font-size: 1rem;
    line-height: 1.5;
}

.container {
    /* background-color: rgb(255, 203, 31); */
    background-color: none;
    position: relative;
    padding: 4rem 0;
}

.mySwiper {
    width: 100%;
    height: 100%;
    padding: 4rem 0 0;
}

.swiper-slide {
    color: #ffffff;
    transition: transform 0.5s ease-in-out;
    transform: scale(0.7);
    margin-bottom: auto;
    position: relative;
    height: 400px;
}

.swiper-slide-active {
    transform: scale(1);
}

.swiper-slide .img-block {
    overflow: hidden;
    border: 3px solid #000000;
    box-shadow: 0 0 2px 0px rgba(175, 175, 175, 0.436);
    border-radius: 10px;
}

.img-block img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 300ms linear;
}

.swiper-slide:hover .img-block img {
    transform: scale(1.1);
}

.content {
    width: 100%;
}

.swiper-buttons {
    margin-bottom: 1rem;
    display: flex;
    gap: 10px;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
}

.custom {
    width: 50px;
    height: 50px;
    background-color: rgb(255, 255, 255);
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid #000000;
}

.custom:hover {
    background-color: rgba(184, 184, 184, 0.3);
}

.custom:active {
    background-color: rgba(184, 184, 184, 0.3);
    transform: scale(0.96);
}


.custom img {
    width: 28px;
    height: 28px;
}

@media screen and (max-width: 672px) {

  h4 {
    font-size: 1.2rem;
  }

  h6 {
    font-size: 0.9rem;
  }

  p {
    font-size: 0.8rem;
  }

  .swiper-slide {
    height: 360px;
}
}
</style>
