const songs = [
    {
        class: "page1",
        img: "img/untilifoundyou.jpg",
        song: "until i found you",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, placeat qui? Veritatis quisquam, corrupti perspiciatis reiciendis pariatur sit nulla repellat praesentium, tempore labore sequi qui voluptates, omnis quia cum! Error."
    },
    {
        class: "page2",
        img: "img/dandelions.jpeg",
        song: "Dandelions",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, placeat qui? Veritatis quisquam, corrupti perspiciatis reiciendis pariatur sit nulla repellat praesentium, tempore labore sequi qui voluptates, omnis quia cum! Error."
    },
    {
        class: "page3",
        img: "img/oceano.jpeg",
        song: "Oceano",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, placeat qui? Veritatis quisquam, corrupti perspiciatis reiciendis pariatur sit nulla repellat praesentium, tempore labore sequi qui voluptates, omnis quia cum! Error."
    },
    {
        class: "page4",
        img: "img/flymetothemoon.jpg",
        song: "Fly Me to the Moon",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, placeat qui? Veritatis quisquam, corrupti perspiciatis reiciendis pariatur sit nulla repellat praesentium, tempore labore sequi qui voluptates, omnis quia cum! Error."
    },
    {
        class: "page5",
        img: "img/futuredays.jpg",
        song: "Future Days",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, placeat qui? Veritatis quisquam, corrupti perspiciatis reiciendis pariatur sit nulla repellat praesentium, tempore labore sequi qui voluptates, omnis quia cum! Error."
    },
    {
        class: "page6",
        img: "img/simplicidade.jpg",
        song: "SIMPLICIDADE",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, placeat qui? Veritatis quisquam, corrupti perspiciatis reiciendis pariatur sit nulla repellat praesentium, tempore labore sequi qui voluptates, omnis quia cum! Error."
    }
];

const interface = document.querySelector('article');

function renderSongs() {
    const newSong = songs.map((song) => 
        `   
            <section class="${song.class}">
            <div class="img">
                <img src="${song.img}" alt="simplicidade">
            </div>
            <div class="description">
                <h1><a href="#" class="links">${song.song}</a></h1>
                <p>${song.description}</p>
            </div>
        </section>
        `
    )
    interface.innerHTML += newSong;
}

renderSongs();