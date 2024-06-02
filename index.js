const logMiddleware = store => next => action => {
    // on affiche chaque action dans la console
    console.log("action");
    return next(action)
}

let musicDB = [
    {
        id: 0,
        name: "Shakedown",
        author_name: "Clarx",
        img: "shakedown.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type: "electronic",
        musicName: "Clarx - Shakedown [NCS Release].mp3",
        attribution: {
            song: "Clarx - Shakedown [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/Shakedown",
            stream: "http://youtu.be/qJT0mc3q6Lg"
        }
    },
    {
        id: 1,
        name: "Games Worldbeat",
        author_name: "Bernardo R.",
        img: "notAvailable.jpg",
        lang: null,
        timesPlayed: 0,
        type:"instrumental",
        musicName: "mixkit-games-worldbeat-466.mp3",
        attribution: {
            song: "Games Worldbeat",
            musicBy: "mixkit",
            download: null,
            stream: null
        }
    },
    {
        id: 2,
        name: "OverMyHead",
        author_name: " ROY KNOX",
        img: "over-my-head-1602154826-mOiKzOJDe6.jpg",
        lang: "ENGLISH",
        type: "electronic",
        timesPlayed: 0,
        musicName: "ROY KNOX -  Over My Head (Feat. Mike Robert) [NCS Release].mp3",
        attribution: {
            song: "ROY KNOX - Over My Head (Feat. Mike Robert) [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/OverMyHead",
            stream: null
        }
    },
    {
        id: 3,
        name: "Want You (feat. Sara Skinner)",
        author_name: "Subtact, Sara Skinner",
        img: "want-you-feat-sara-skinner-1586956276-s4lOrfrHQj.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type: "electronic",
        musicName: "Subtact - Want You (feat. Sara Skinner) [NCS Release].mp3",
        attribution: {
            song: "Subtact - Want You (feat. Sara Skinner) [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/WantYou",
            stream: "http://youtu.be/Pww31vN_1QY"
        }
    },
    {
        id: 4,
        name: "Apocalypse",
        author_name: "Midranger",
        img: "apocalypse-1600776027-tsCmgK4gEU.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type: "electronic",
        musicName: "Midranger - Apocalypse [NCS Release].mp3",
        attribution: {
            song: "Midranger - Apocalypse [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/Apocalypse",
            stream: "http://youtu.be/Whw1sWDpAvE"
        }
    },
    {
        id: 5,
        name: "Alive",
        author_name: "Neoni, N3WPORT",
        img: "alive.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type: "electronic",
        musicName: "N3WPORT - Alive (feat. Neoni) [NCS Release].mp3",
        attribution: {
            song: "N3WPORT - Alive (feat. Neoni) [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/NAlive",
            stream: "http://youtu.be/vJAcXd_UtWQ"
        }
    },
    {
        id: 6,
        name: "Impact Moderato",
        author_name: "Kevin MacLeod",
        img: "notAvailable.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type:"instrumental",
        musicName: "impact.mp3",
        attribution: {
            song: "Impact Moderato",
            musicBy: "Kevin MacLeod",
            download: null,
            stream: null
        }
    },
    {
        id: 7,
        name: "Impact Moderato 2",
        author_name: "Kevin MacLeod",
        img: "notAvailable.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type:"instrumental",
        musicName: "impact2.mp3",
        attribution: {
            song: "Impact Moderato",
            musicBy: "Kevin MacLeod",
            download: null,
            stream: null
        }
    },
    {
        id: 8,
        name: "Ignite",
        author_name: "Tom wilson, Heuse",
        img: "ignite-1600419626-nHn4WXY79q.jpg",
        lang: "ENGLISH",
        timesPlayed: 0,
        type: "electronic",
        musicName: "Heuse & Tom Wilson - Ignite [NCS Release].mp3",
        attribution: {
            song: "Heuse & Tom Wilson - Ignite [NCS Release]",
            musicBy: "NoCopyrightSounds",
            download: "http://ncs.io/Ignite",
            stream: "http://youtu.be/zbqgv0mMfwk"
        }
    }
];

function sortByProperty(property) {
    return function (a, b) {
        if (a[property] > b[property])
            return 1;
        else if (a[property] < b[property])
            return -1;

        return 0;
    }
}

musicDB.sort(sortByProperty("name"))

// for (let i=0; i < 4; i ++){
//     console.log(musicDB[i])
// }
// let fruits = ["Kiwi","Apple", "Banana"];
//let cote = [0,6,1,5,2,3,3];
// cote.sort()
// console.log(fruits.sort());
// console.log();
// console.log(cote);

//let list = new Set(cote)
/*for (element of list){
    console.log(element);
}*/
//console.log(list)
// function getFibo(index){

//     if(index <= 1){
//         return index;
//     }else {
//         return getFibo(index - 1) + getFibo(index -2);
//     }
// }

// console.log(getFibo(3))
