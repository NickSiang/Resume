<!-- <script set up>
import { defineProps } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        default: () => ({
            no: '',
            imgSrc: '',
            title: '',
            content: '',
            labels: [],
        })
    },
})
</script> -->
<!-- 上面和下面程式碼一樣 但用上面的會報錯?? -->

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        default: () => ({
            no: '',
            link: '',
            imgSrc: '',
            title: '',
            content: '',
            labels: [],
        })
    },
})

</script>
<template>
    <div id="card">
        <a :href="data.link" target="_blank" rel="noopener noreferrer">
            <span class="card-number">{{ data.no }}</span>

            <div class="img-block">
                <div>
                    <img :src="data.imgSrc" alt="" class="" loading="lazy">
                </div>
            </div>

            <div class="content">
                <h4>
                    {{ data.title }}
                </h4>
                <p>
                    {{ data.content }}
                </p>
            </div>

            <div class="label-block">
                <span v-for="(label, index) in data.labels" :key="index" class="mini-label">{{ label }}</span>
            </div>

            <div class="read-more-button">
                <span>Read more👉</span>
                <span>Read more👉</span>
            </div>
        </a>
    </div>
</template>

<style scoped>

a {
    text-decoration: none;
}

h4 {
    font-size: 1.5rem;
    font-weight: 700;
}

p {
    min-height:3rem;
    font-size: 1rem;
    border-left: 2px solid black;
    padding-left: 0.4rem;
    line-height: 1.5rem;
    font-weight: 500;
}

#card {
    width: calc((100% - 40px/ 3));
    background-color: #ffffff;
    transition: all 0.2s linear;
}

#card:hover {
    border-radius: 1rem;
}


.card-link {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
}

.card-number {
    width: 50px;
    height: 50px;
    display: flex;
    margin: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    border-radius: 50%;
    border: 2px black solid;
    font-weight: bold;
}

.img-block {
    width: 100%;
    padding: 0 4rem;
}

.img-block div {
    overflow: hidden;
    border-radius: 6px;
}

.img-block img {
    width: 100%;
    height: auto;
    border-radius: 6px;
    border: 1px solid #ddd;
    transition: all 300ms linear;
}

#card:hover .img-block img {
    transform: scale(1.1);
}

.content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 0.5rem 4rem 1.5rem;
    
}

.label-block {
    display: flex;
    gap: 8px;
    padding: 0 4rem;
    flex-wrap: wrap;
}

.mini-label {
    background-color: rgb(107, 107, 107);
    color: white;
    border-radius: 2px;
    padding: 4px 4px;
}


.read-more-button {
    width: 100px;
    margin: 2rem;
    overflow: hidden;
    white-space: nowrap;
    margin-left: auto;
}

.read-more-button span {
    display: inline-block;
    transform: translateX(0);
}


#card:hover .read-more-button span {
    animation: marquee 2s linear infinite;
}




@keyframes marquee {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}


@media screen and (max-width: 1058px) {
    #card {
        width: 100%;
    }
}

@media screen and (max-width: 672px) {

  h4 {
    font-size: 1.2rem;
  }

  p , span{
    font-size: 0.8rem;
  }

  #card{
    border-radius: 0.5rem;
  }

  #card .read-more-button span {
    animation: marquee 2s linear infinite;
}

}

@media screen and (max-width: 480px) {
    #card {
        width: 100%;
        background-color: #ffffff;
        transition: all 0.2s linear;
    }

    .img-block {
        padding: 0 2rem;
    }

    .content {
        padding: 0.5rem 2rem 1.5rem;
    }

    .label-block {
        padding: 0 2rem;
    }
}
</style>