<script lang="ts">
    import type { PageData } from "./$types";
    import ScrollAnimation from "$components/ScrollAnimation.svelte";

    export let data: PageData;

    const contents = [
        {
            title: "제 소개는요",
            body: "안녕하세요, 14기 연수생 *황시우*입니다. 웹사이트까지 보러 와 주셔서 정말 감사드립니다 🥹 저는 그동안 Unity와 C#을 주로 다뤘었는데요. 몇 달 전부터 웹에 흥미가 생겨서 *웹 프론트엔드*, 그중에서도 *Svelte*를 공부하고 있습니다. 소마에서도 해당 분야로 참여하고 싶어요. 물론 필요하다면 React나 Flutter 같은 다른 스택도 얼마든지 배울 의향이 있습니다. 소마를 통해 새로운 기술을 배우는 것도 무척 좋은 경험이 될 거라고 확신해요 😊 근데 Svelte도 좋아요... 이 사이트도 Svelte로 만들었어요..."
        },
        {
            title: "전업소마인",
            body: "현재 숭실대학교 컴퓨터학부 2학년 1학기에 재학 중이지만 2학기에는 휴학해서 소마에 *올인*하려고 합니다. 1학기도 학점을 어느 정도 놓아 버리고... 소마에 최대한 참여할 생각입니다. 떠나간 학점은 미래의 제가 어떻게든 주워 담을 수 있지만 소마는 *한 번* 뿐이니까요 😯 또한 센터도 학교에서 30분, 집에서 1시간 거리라 매일같이 출근해서 *죽돌이* 할 수 있습니다."
        },
        {
            title: "창업해 보고 싶어요",
            body: "지금 저는 21살이기 때문에 취업을 *전혀* 고려하지 않아도 되는 상황입니다. 그런 만큼 *창업*을 진지하게 생각해 보고 있고, 고도화 과정과 인증에도 관심이 있습니다. 원래는 창업을 딱히 염두에 두지 않았었는데요. 여러 얘기를 듣고 또 생각해 보니 나이가 적다는 게 생각보다 큰 이점이고 창업하기 적절한 상황인 것 같더라고요. 혹여나 실패하게 되더라도 창업을 준비하며 겪은 과정 자체가 값진 경험이고, 앞으로의 성장에 많은 도움이 될 거라고 생각합니다 👍"
        },
        {
            title: "몰입하는 경험",
            body: "창업이 궁극적인 목표인 것처럼 적긴 했지만, 소마에 지원하면서 이것만은 얻어 가고 말겠다고 생각한 게 있습니다. 바로 한 프로젝트의 기획부터 배포, 서비스 및 유지보수까지 일련의 과정을 진행하고 *최대한 몰입해서* 개발해 보는 경험입니다. 팀원분들은 창업을 반드시 목표하지는 않으시더라도, *소마를 0순위로 삼고 최대한 몰입해서 올 한 해 불태우며* 개발한다는 목표를 꼭 공유하는 분들로 모시고 싶습니다. 또 그런 만큼 *중간 탈출*... 절대 안 하실 분들이셨으면 좋겠습니다 🥺"
        },
        {
            title: "사회 문제 해결",
            body: "주제는 팀원끼리 좁혀 나가는 게 좋다고 생각해서 아직 명확하게 생각해 두지는 않았습니다. 다만 *사회 문제*에 기여할 수 있는 프로젝트를 해 보고 싶다는 마음이 있기는 해요. 음주 운전을 비롯해 술을 너무 가볍게 대하는 우리나라 문화, 눈살이 찌푸려질 정도로 지나친 외국어 오남용, 어르신은 물론 젊은 층에게도 어려운 키오스크, 인터넷 공간의 비속어, 점점 악화되는 문해력 및 독서량 등 파고들 부분은 굉장히 많은 것 같습니다."
        },
        {
            title: "디자인이 좋아요",
            body: "뭐라도 더 어필해 보고 싶어서 덧붙이자면 🙄 *디자인*하는 걸 정말 좋아합니다. 백엔드와 프론트엔드 중에서 프론트를 택한 이유도 디자인과 맡닿아 있다는 점이 가장 큽니다. 이 사이트도 전부 제가 만들었어요 😊 특히 로고는 플렉서블 아이덴티티를 차용해서 새로고침할 때마다 다른 모양으로 바뀝니다! 디자인은 웬만하면 외주 맡기는 게 좋다고 듣기는 했지만 이러한 제 역량이 개발하는 과정에서 어느 정도는 도움이 되지 않을까 싶습니다."
        },
        {
            title: "감사합니다",
            body: "어떻게 해야 확실하게 어필이 될까 생각하다가 급하게 사이트를 주섬주섬 만들어 봤는데 보시기에 어떠셨을지 모르겠네요 😅 혹시 팀빌딩 외에도 대화 나누고 싶으신 분 계시다면 DM 주세요! 아래에 있는 제 노션이랑 GitHub도 구경하러 오세요 🙇"
        }
    ];

    let innerHeight: number = 0;
    let scrollY: number = 0;
    let logoIndex: number = Math.floor(Math.random() * data.count) + 1;

    $: typoPosition = Math.max(0, innerHeight - scrollY);
    $: letterScroll = 1 - (typoPosition / innerHeight);
</script>

<svelte:window bind:innerHeight bind:scrollY />

<div class="logo-container" style="--inner-height: {innerHeight}px; --top: {typoPosition}px; --letter-scroll: {letterScroll};">
    <div class="logo">
        <img alt="로고" src="/images/logo-{logoIndex}.png" />
    </div>
    <div class="typo">
        <img alt="타이포" src="/images/typo-{logoIndex}.png" />
    </div>
    <span class="dream">DREAM</span>
    <span class="vyond">VYOND</span>
    <span class="reachable">REACHABLE</span>
    <span class="potential">POTENTIAL</span>
    <img class="small" alt="로고" src="/images/icons/small.png" />
</div>
<div class="body" style="--margin-top: {innerHeight * 2}px;">
    {#each contents as content}
        <ScrollAnimation animation="fadein">
            <div class="content" style="--inner-height: {innerHeight}px;">
                <h1>{content.title}</h1>
                <p>{@html content.body.replace(/^\*/g, "<strong>")
                                      .replace(/\s\*/g, " <strong>")
                                      .replace(/\*/g, "</strong>")}</p>
            </div>
        </ScrollAnimation>
    {/each}
    <div class="content links" style="--inner-height: {innerHeight * 0.15}px;">
        <a href="https://swmaestromain.notion.site/3562f46091bb46d19a27c979b2bc298d"><img alt="Notion" src="/images/icons/notion.webp" /></a>
        <a href="https://github.com/dvrp0/swm-dvrp"><img alt="GitHub" src="/images/icons/github.webp" /></a>
    </div>
</div>

<style>
    .logo-container {
        position: relative;
        z-index: 0;
        height: var(--inner-height);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .logo-container span {
        font-family: "Montserrat", sans-serif;
        font-size: 15px;
        color: var(--c-background);
    }

    .dream {
        top: 6.35rem;
        left: 4.15rem;
        animation: down 1s ease-in;
    }

    .vyond {
        top: 14.35rem;
        left: 4.15rem;
        animation: down 1s ease-in;
    }

    .reachable {
        bottom: 5rem;
        left: 5.15rem;
        animation: right 1s ease-in;
    }

    .reachable::after {
        content: "";
        position: fixed;
        bottom: 0.72rem;
        left: 10rem;
        display: block;
        width: 6rem;
        height: 1.5px;
        background-color: var(--c-background);
    }

    .potential {
        bottom: 5rem;
        right: 5.15rem;
        animation: left 1s ease-in;
    }

    .small {
        top: 5.2rem;
        right: 5.15rem;
        animation: left 1s ease-in;
    }

    .logo-container span,
    .small {
        position: fixed;
        animation-play-state: paused;
        animation-delay: calc(var(--letter-scroll) * -1s);
        animation-iteration-count: 1;
        animation-fill-mode: both;
    }

    .logo {
        position: fixed;
        display: flex;
        align-items: center;
    }

    .typo {
        position: fixed;
        top: var(--top);
        display: flex;
        align-items: center;
        height: var(--inner-height);
    }

    .logo img,
    .typo img {
        display: block;
        margin: 0 auto;
        max-width: 70%;
        max-height: 70%;
    }

    .body {
        position: relative;
        z-index: 1;
        padding: 0 calc(calc(100vw - var(--width)) / 2);
        margin-top: var(--margin-top);
        color: var(--c-foreground);
        background-color: var(--c-background);
    }

    .content {
        height: var(--inner-height);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .content h1 {
        font-variation-settings: "wght" 900;
        flex: 0 0 20%;
        margin-right: 5rem;
        line-height: 1.25;
    }

    .links {
        justify-content: center;
        padding-left: 0.75rem;
    }

    .links img {
        width: 1.25rem;
        margin-right: 0.75rem;
    }

    @media (max-width: 74rem) {
        .body {
            padding: 0 5rem;
        }
    }

    @media (max-width: 43rem) {
        .logo-container span {
            font-size: 10px;
        }

        .dream {
            top: 3rem;
            left: 1.15rem;
            transform: rotate(90deg);
        }

        .vyond {
            top: 8.5rem;
            left: 1.15rem;
            transform: rotate(90deg);
        }

        .reachable {
            bottom: 3rem;
            left: 2.15rem;
        }

        .reachable::after {
            bottom: 0.5rem;
            left: 5rem;
            display: block;
            width: 4rem;
            height: 1.2px;
            background-color: var(--c-background);
        }

        .potential {
            bottom: 3rem;
            right: 2.15rem;
        }

        .small {
            top: 2.4rem;
            right: 2.15rem;
        }

        .body {
            padding: 0 2rem;
        }

        .content {
            flex-direction: column;
            justify-content: center;
        }

        .content h1 {
            flex: 0;
            margin-right: 0;
        }

        .links {
            flex-direction: row;
        }
    }
</style>