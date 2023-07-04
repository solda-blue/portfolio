<template>
    <div class="container">
        <section>
            <div class="skew1">
                <h2 class="layer">Corner Text</h2>
            </div>
            <div class="textBox">
                <div class="skew2">
                    <h2 class="layer">Corner Text</h2>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { onMounted } from '@vue/runtime-core';
export default {
    setup () {
        const state = reactive({

        });

        const parallaxText = (e) => {
            window.document.querySelectorAll('.layer').forEach(layer => {
                let x = (window.innerWidth - e.pageX * 2)/2;
                layer.style.transform = `translateX(${x}px)`;
            })
        };
        onMounted(() => {
            window.addEventListener('mousemove', parallaxText);
        })
        
        return {state}
    }
}
</script>

<style lang="css" scoped>
.container {
    margin: 0;
    padding: 0;
    height: 600px;
    box-sizing: border-box;
}
section {
    position: relative;
    widows: 100%;
    height: 100%;
    background: #222;
    overflow: hidden;
}
section .textBox {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #333;
    clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
}
.skew1 h2, .textBox .skew2 h2 {
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: 12em;
    line-height: 1em;
    color: #0488f5;
    cursor: pointer;
}
.skew1 h2 {
    opacity: 0.6;
}
.skew1 {
    position: relative;
    top: 0;
    transform: skewY(20deg);
}
.skew2 {
    position: relative;
    top: 0;
    transform: skewY(340deg);
}
</style>