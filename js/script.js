const songs = [
    {
        class: "page0",
        img: "img/cassete-tape.gif",
        song: "Músicas com seu Nome",
        description: "Fiz esse pequeno site com intuito de te dar um presentinho simples no nosso aniversário e foi algo que eu consegui fazer com as minhas habilidades pra você, assim como você lá atrás fez aquela caixinha linda pra mim com suas habilidades. Eu pensei em algo que consigo fazer tranquilamente e talvez pudesse te agradar de alguma forma com tal feito. Apesar disso não ser nada demais, espero que você goste dessa versão simples. Feliz Aniversário, meu bem.",
        link: "#"
    },
    {
        class: "page1",
        img: "img/untilifoundyou.jpg",
        song: "until i found you",
        description: "Essa música me lembra bastante o início da nossa jornada, ainda quando estávamos nos conhecendo eu escutei essa música e vi a tradução, mesmo que não estivéssemos namorando ainda, eu já estava querendo dedicar essa música pra você, talvez fosse por causa das grandes emoções que eu estava sentindo naqueles dias, mas ainda bem que não me arrependi de ter pensado em te dedicar antes de começarmos a namorar e até hoje não me arrependo de pensar em você quando a escuto. Não poderíamos ser só simples amigos, e ainda bem que eu te achei.",
        link: "https://youtu.be/kPlSyYtE63M?si=ovJK02BYBcTYqhtl"
    },
    {
        class: "page2",
        img: "img/dandelions.jpeg",
        song: "Dandelions",
        description: "A primeira vez que escutei essa música foi quando você me deu aquele presente. Eu achei ela muito linda e também vi seu nome lá, eu gosto bastante das declarações de amor dessa música, principalmente por falar em alguém ser de alguém, e como a Ruth B, eu também me sinto em um campo cheio de dentes-de-leão pedindo pra que um dia você seja minha, um dos dias que eu mais espero na minha vida, que nós sejamos completamente um do outro, meu grande amor.",
        link: "https://youtu.be/W8a4sUabCUo?si=2Xv9ffNd_CsEd2J_"
    },
    {
        class: "page3",
        img: "img/oceano.jpeg",
        song: "Oceano",
        description: "Pra ser sincero, eu não gosto tanto dessa música e ela nem faz tanto o meu estilo, porém, ela é importante pra mim porque tem seu nome, logo tem história. Um dia qualquer quando estávamos escutando as minhas e suas músicas eu coloquei essa porque você conhecia, e pra ser sincero, eu só fiquei olhando pra você com a cabeça apoiada na mesa e sem entender nada do que o Djavan estava falando, mas foi algo bom. E pra ser sincero, as vezes eu percebo que estou tão apegado a você que sinto uma dor extrema, por pensar em tantas coisas, como ele fala, me esqueço que amar é quase uma dor.",
        link: "https://youtu.be/P-lxOj0XpEE?si=T4jsRxUnCYySUa3z"
    },
    {
        class: "page4",
        img: "img/flymetothemoon.jpg",
        song: "Fly Me to the Moon",
        description: "Me deparei com Frank Sinatra novamente após ir na casa dos gêmeos em janeiro e percebi novamente o quanto eu gostava de jazz, me lembro de escutar bastante na época que estudava pra prova de matrizes da Jessyka, e logo depois você apareceu aqui em casa e mudou a minha tarde, com uma blusa rosa e saia branca. Naquele fim de dia nos assistimos Harry Potter e a Ordem da Fênix, estávamos juntos e nada mais importava. Resumindo em outras palavras, meu amor, me beije, em outras palavras, meu amor, eu amo você.",
        link: "https://youtu.be/ZEcqHA7dbwM?si=JHxmXDQaTq3AIqZW"
    },
    {
        class: "page5",
        img: "img/futuredays.jpg",
        song: "Future Days",
        description: "Future Days é uma das minhas músicas favoritas, e talvez seja ela que me faz gostar tanto de The Last Of Us parte 2, assim como Until I Found You, eu já pensei em te dedicar essa música, mas pra ser sincero quando a escutei pela primeira vez, não tinha ninguém pra pensar, só ficava bastante triste, tanto por causa do jogo e tanto pela melancolia da música. Eu acredito, meu bem, nos nossos dias futuros, quero e pretendo acreditar cada vez mais, pois eu quero muito dias meus e seus, dias somente nossos.",
        link: "https://youtu.be/yS1HovHNZlE?si=8_mx8YvGs76BwBaB"
    },
    {
        class: "page6",
        img: "img/simplicidade.jpg",
        song: "SIMPLICIDADE",
        description: "Te apresentei essa canção nas nossas primeiras conversas, porque eu gostava bastante de João Manô, e eu acho essa música muito linda também e vejo você nela, eu espero que no futuro independentemente de tudo possamos ter um ao outro, na nossa simplicidade, ter nossa casinha, amor e um quintal, ter espaço pra quando os nossos chegar.",
        link: "https://youtu.be/gU738HDN24Q?si=YCTfASFqEVX0vWEw"
    },
    {
        class: "page7",
        img: "img/digasimpramim.jpg",
        song: "Diga Sim pra Mim",
        description: "Essa música eu escutei também na casa dos gêmeos, quando fui a primeira vez lá, e logo percebi o quão romântica ela é. Acho que o compositor se esforçou bastante pra compor essa perfeição. E assim como todas as outras músicas eu também vejo seu nome nela, e diferente de todas as outras, eu espero poder chegar em um dia e dizer que essa é realmente a nossa música, no dia em que você dizer sim pra mim e a gente se casar numa manhã de domingo a beira mar ou em uma noite de luar, meu grande amor.",
        link: "https://youtu.be/oXy3UulzmW0?si=y0rzrKyNlZStag_E"
    }
];

// Html interface
const interface = document.querySelector('article');

function renderSongs() {
    const newSong = songs.map((song) =>
        `   
            <section class="${song.class}">
                <div class="img">
                    <a href="${song.link}">
                        <img src="${song.img}" alt="${song.song}">
                    </a>
                </div>
                <div class="description">
                    <h1><a href="${song.link}" target="_blank" class="links">${song.song}</a></h1>
                    <p>${song.description}</p>
                </div>
            </section>
        `
    )
    interface.innerHTML += newSong;
}

renderSongs();