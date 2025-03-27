<script setup>
import { onMounted, ref, resolveDirective } from 'vue';

onMounted(() => {
    emailjs.init({
        publicKey: 'FWOuZjvYJe6rfSKOI',
    });
})

const email = ref('');
const message = ref('');
const name = ref('');

function Submit(event) {
    if (!email.value||!message.value||!name.value) {
        alert('請輸入完整資訊')
        return;
    } else if (!validateEmail(email.value)) {
        alert('電子信箱格式錯誤')
        email.value = '';
        return;
    }

    event.preventDefault();

    const serviceID = 'default_service';
    const templateID = 'template_mkdq47c';

    const templateParams = {
        name: name.value,
        email: email.value,
        message: message.value
    };

    emailjs.send(serviceID, templateID, templateParams)
        .then(() => {
            alert('已寄出郵件,謝謝');
        }, (err) => {
            alert('請稍後再試,謝謝');
        });

    email.value = '';
    message.value = '';
    name.value = '';
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

</script>

<template>
    <footer>
        <div class="container">
            <div class="big-card">
                <div class="card-border about-card">
                    <div>
                        <h3>Nick</h3>
                        <a href="mailto:s28688117@gmail.com?subject=Hello&body=How%20are%20you?" target="_blank" rel="noopener noreferrer">
                            <p>s28688117@gmail.com</p>
                        </a>
                        <a href="https://pda.104.com.tw/profile/share/5fNH8dUbK7ggzt3v38UH1OmYT0gjoh9E" target="_blank" rel="noopener noreferrer">
                            <p>104 Resume</p>
                        </a>
                        <a href="https://github.com/NickSiang/Resume" target="_blank" rel="noopener noreferrer">
                            <p>Git Hub</p>
                        </a>
                        <a href="https://line.me/ti/p/L_-_JmAAI3" target="_blank" rel="noopener noreferrer">
                            <p>Line</p>
                        </a>

                    </div>
                    <img src="../assets/img/capybara.svg" alt="" class="svg-img">
                </div>
            </div>
            <div class="big-card">
                <div class="card-border contact-card">
                    <h3>Contact</h3>
                    <div>
                        <input type="text" id="name" v-model="name" required placeholder="請輸入姓名">
                        <input type="email" id="email" v-model="email" required placeholder="請輸入電子信箱">
                    </div>
                    <textarea id="message" v-model="message" required placeholder="請輸入訊息"></textarea>
                    <button type="submit" class="sub-btn" @click="Submit">↗</button>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    background: rgb(33, 33, 33);
}

h3 {
    font-size: 2rem;
    color: #000000;
}

p {
    font-family: 'Magical Childhood', sans-serif;
    border-bottom: 3px solid #000;
    font-size: 0.75rem;
    margin: 1rem 0 0;
    transition: all 0.3s ease;
}

p:hover {
    color: rgb(255, 146, 29);
    border-bottom: 3px solid rgb(255, 146, 29);
}

input,
textarea {
    padding: 0.88rem;
    font-size: 1rem;
    border: 2px solid #000;
    border-radius: 0.5rem;
    box-shadow: 2.5px 3px 0 #000;
    outline: none;
    transition: ease 0.25s;
}

input {
    width: calc(100% / 2 - 0.5rem);
}

textarea {
    width: 100%;
    height: 6rem;
    resize: none;
}


input:focus,
textarea:focus {
    box-shadow: 5.5px 7px 0 black;
}


.container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 4rem 3rem;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
}

.big-card {
    width: calc(100% / 2 - 1rem);
    background-color: white;
    padding: 1rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    border: 1px solid #ddd;
}

.card-border {
    width: 100%;
    height: 100%;
    padding: 2rem;
    display: flex;
    border-radius: 1rem;
    border: 3px dashed black;
}

.about-card {
    gap: 1rem;
    justify-content: space-between;
}

.svg-img {
    width: 280px;
}

.contact-card {
    flex-direction: column;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.contact-card div {
    display: flex;
    gap: 1rem;
    margin-bottom: 1em;
}

.contact-card .sub-btn {
    width: 5rem;
    height: 5rem;
    font-size: 3rem;
    border: none;
    border-top-left-radius: 50%;
    background-color: rgb(255, 146, 29);
    position: absolute;
    right: 0;
    bottom: 0;
    color: white;
    cursor: pointer;
}

.contact-card .sub-btn:hover {
    background-color: rgb(255, 117, 11);
}

.contact-card .sub-btn:active {
    transform: scale(0.99) translate(3%, 3%);
}

@media screen and (max-width: 768px) {
    .container {
        padding: 2rem 1rem;
    }

    .big-card {
        width: 100%;
    }

    .contact-card .sub-btn {
        width: 3rem;
        height: 3rem;
        font-size: 2rem;
    }

    .svg-img {
        width: 200px;
    }

}

@media screen and (max-width: 672px) {
    h3 {
        font-size: 1.4rem;
    }

    p {
        font-size: 0.8rem;
    }
}

@media screen and (max-width: 580px) {
    .about-card {
        flex-direction: column;
        align-items: center;
    }

    .contact-card div {
        display: flex;
        flex-direction: column;
    }

    input {
        width: 100%;
    }

    textarea {
        width: 100%;
    }
}
</style>