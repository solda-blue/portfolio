<template>
    <div class="container">
        <section>
            <div v-if="state.folio1" class="description-1">
                <div style="position: absolute; top: -100px; right: 0;">
                    <button @click="handleOff">X</button>
                </div>
                <div>
                    <h3>Kandinsky.kr</h3>
                    <!-- https://firebasestorage.googleapis.com/v0/b/kandinsky-383401.appspot.com/o/image%2Fentire.png?alt=media&token=e91b0a9e-925d-4e38-a573-ec328fb4cd5d -->
                </div>
            </div>
            <div class="skew1">
                <div class="layer">
                    <div class="img1" style="transition: all 1s;" :ref="el => {imgBox[0] = el}" @click="handleKandinsky">
                        <img src='../../assets/img/kandinsky.png' />
                    </div>
                    <!-- <h2 class="bro" v-if="!state.folio1">Corner Text</h2> -->
                </div>
            </div>
            <div v-if="state.folio2" class="description-2">
                <div style="position: absolute; top: -100px; right: 0;">
                    <button @click="handleOff2">X</button>
                </div>
                <div>
                    <h3>Turbulence.kr</h3>
                    <!-- https://firebasestorage.googleapis.com/v0/b/kandinsky-383401.appspot.com/o/image%2Fentire.png?alt=media&token=e91b0a9e-925d-4e38-a573-ec328fb4cd5d -->
                </div>
            </div>
            <div class="skew2">
                <div class="layer2">
                    <div class="img2" style="transition: all 1s;" :ref="el => {imgBox[1] = el}" @click="handleTurbulence">
                        <img src='../../assets/img/turbulence.png' />
                    </div>
                    <!-- <h2 class="bro" v-if="!state.folio1">Corner Text</h2> -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
export default {
    setup () {
        const imgBox = ref([]);
        const state = reactive({
            folio1 : false,
            folio2 : false,
            y : 0
        });

        const parallaxText = () => {
            window.document.querySelectorAll('.layer').forEach(layer => {
                state.y = window.scrollY * 2
                console.log(state.y);
                layer.style.transform = `translateX(-${state.y}px)`;
            })
        };
        
        const parallaxText2 = () => {
            window.document.querySelectorAll('.layer2').forEach(layer => {
                let toRight = window.scrollY *2
                layer.style.transform = `translateX(${toRight}px)`;
            })
        }

        const handleKandinsky = () => {
            console.log('확인 => ', window.scrollY);
            window.scrollTo({ top : 200, behavior : "smooth" });
            if(state.folio1) {
                return null;
            }
            state.folio1 = true;
            let width = (document.body.offsetWidth)/100*15;
            let left = width - (imgBox.value[0].getBoundingClientRect().left);
            imgBox.value[0].classList.add('test');
            // imgBox.value[0].classList.remove('img1');
            imgBox.value[0].parentNode.classList.remove('layer');
            imgBox.value[0].style.transform = `translateX(${left}px) scale(1.3) skewY(-20deg)`;
        };

        const handleTurbulence = () => {
            window.scrollTo({ top : 800, behavior : "smooth" });
            if(state.folio2) {
                return null;
            }
            state.folio2 = true;
            let width = (document.body.offsetWidth)/100*15;
            let left = (imgBox.value[0].getBoundingClientRect().right) - width;
            imgBox.value[1].classList.add('test');
            // imgBox.value[1].classList.remove('img1');
            imgBox.value[1].parentNode.classList.remove('layer2');
            imgBox.value[1].style.transform = `translateX(${left}px) scale(1.3) skewY(20deg)`;
        };

        const handleOff = () => {
            imgBox.value[0].classList.remove('test');
            imgBox.value[0].parentNode.classList.add('layer');
            imgBox.value[0].style.transform = ``;
            state.folio1 = false;
        };

        const handleOff2 = () => {
            imgBox.value[1].classList.remove('test');
            imgBox.value[1].parentNode.classList.add('layer2');
            imgBox.value[1].style.transform = ``;
            state.folio2 = false;
        };

        onMounted(() => {
            window.addEventListener('scroll', parallaxText);
            window.addEventListener('scroll', parallaxText2);
        });
        
        return {state, handleKandinsky, handleTurbulence, handleOff, handleOff2, imgBox}
    }
}
</script>

<style lang="css" scoped>
.container {
    margin: 0;
    padding: 0;
    height: 1400px;
    box-sizing: border-box;
}
section {
    position: relative;
    widows: 100%;
    height: 100%;
    background: #000;
    overflow: hidden;
}
section .textBox {
    /* 50% 두개 100%으로 바꾸면 한쪽으로만 기울어짐 */
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
}
.bro {
    position: absolute;
    opacity: 0;
    top: -100px;
    width: 100%;
    text-align: center;
    font-size: 12em;
    line-height: 1em;
    color: #0488f5;
    cursor: pointer;
    z-index: -10;
    transition: all 1s;
}
.skew1 h2 {
    opacity: 1;
}
.skew1 {
    position: relative;
    top: 600px;
    left: 60%;
    transform: skewY(20deg);
}
.skew2 {
    position: relative;
    top: 600px;
    right: 60%;
    transform: skewY(340deg);
}
.img1 {
    position: relative;
    width: 400px;
    height: 300px;
}
.img2 {
    position: relative;
    width: 400px;
    height: 300px;
}
.img1 img {
    width: 400px;
    height: 300px;
}
.img2 img {
    width: 400px;
    height: 300px;
}
.img1::before {
    content: '';
    position: absolute;
    top: 0;
    right: -5px;
    width: 5px;
    height: 100%;
    background: white;
    transform-origin: left;
    transform: skewY(-45deg);
}
.img1::after {
    content: '';
    position: absolute;
    top: -5px;
    right: 0;
    width: 100%;
    height: 5px;
    background: white;
    transform-origin: bottom;
    transform: skewX(-45deg);
}
.img1:hover {
    transform: translateY(-20px);
    transition: all 0.3s;
    cursor: pointer;
    box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;
}
.img1:hover ~ .bro {
    opacity: 1;
    color: red;
}
.test::before {
    opacity: 0;
    /* position: fixed;
    left: 0;
    top: 0; */
    /* transform: scale(1.3) skewY(-20deg); */
    transition: all 1s;
}
.test::after {
    opacity: 0;
    transition: all 1s;
}
.description-1 {
    position: absolute;
    top: 150px;
    right: 0;
    width: 40%;
    background-color: red;
    margin-right: 100px;
}
.description-2 {
    position: absolute;
    top: 750px;
    right: 0;
    width: 40%;
    background-color: red;
    margin-right: 100px;
}
</style>