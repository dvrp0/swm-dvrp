<script lang="ts">
    import { onMount } from "svelte";

    export let animation: string;

    let element: Element | null;
    let scrollY: number = 0;
    let innerHeight: number = 0;
    let position: number = 0;
    let bodyRect: DOMRect;

    $: if (bodyRect && element)
    {
        const elementRect = element.getBoundingClientRect();
        
        //구한 스크롤 위치는 화면 맨 상단이 기준
        //요소가 화면 정중앙에 위치했을 때 0.5가 되게 해야 보기 좋으니까 스크롤 위치에 화면 높이의 절반만큼을 더해서
        //화면 중앙이 요소의 어느 지점에 위치했는지를 계산
        const temp: number = (scrollY - elementRect?.top - window.scrollY + innerHeight / 2) / element?.clientHeight;
        position = Math.max(0, Math.min(1, temp));
    }
    
    onMount(() => {
        bodyRect = document.body.getBoundingClientRect();
    });

    function getSlot(node: HTMLElement)
    {
        element = node.firstElementChild;
    }
</script>

<svelte:window bind:scrollY bind:innerHeight />

<div class={animation} use:getSlot style="--scroll: {position};">
    <slot />
</div>

<style>
    div {
        animation: 1s ease-in;
        animation-play-state: paused;
        animation-delay: calc(var(--scroll) * -1s);
        animation-iteration-count: 1;
        animation-fill-mode: both;
    }

    .fadein {
        animation-name: fadein;
    }
</style>