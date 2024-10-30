
//const arrCharacters = []

const mainForm = document.getElementsByClassName('anime-input');
const boxesFight = document.getElementsByClassName('fighter-box');

const arrAnime = [
        {
            animeName:'Demon Slayer',
            characters: [{ 
                "characterName": "Tanjiro",
                "skills":"Hinokami Kagura",
             }, { 
                "characterName": "Nezuko",
                "skills":"Blood Demon Art",
             }, { 
                "characterName": "Inosuke",
                "skills":"Breath of the Beast",
             }, { 
                "characterName": "Zenitsu",
                "skills":"Thunderclap and Flash",
             }, { 
                "characterName": "Muzan",
                "skills":"Absorption",
             }]
        },
        {
            animeName:'One piece',
            characters: [{ 
                "characterName": "Luffy",
                "skills":"Gear 5",
             }, { 
                "characterName": "Zoro",
                "skills":"Onigiri",
             }, { 
                "characterName": "Shanks",
                "skills":"Observation Haki",
             }, { 
                "characterName": "Sanji",
                "skills":"8 Flanche Strike",
             }, { 
                "characterName": "Nami",
                "skills":"Clima-Tact",
             }]
        },
        {
            animeName:'JuJutzu Kaisen',
            characters: [{ 
                "characterName": "Yuji",
                "skills":"Black Flash",
             }, { 
                "characterName": "Gojo",
                "skills":"Infinity",
             }, { 
                "characterName": "Sukuna",
                "skills":"Malevolent Shrine",
             }, { 
                "characterName": "Geto",
                "skills":"Womb Profusion",
             }, { 
                "characterName": "Todo",
                "skills":"Boogie Woogie",
             }]
        },
        {
            animeName:'Dragon Ball',
            characters: [{ 
                "characterName": "Goku",
                "skills":"Ultra-Instinct",
             },{ 
                "characterName": "Vegeta",
                "skills":"Galik Gun",
             },{ 
                "characterName": "Hit",
                "skills":"Time Lag",
             },{ 
                "characterName": "Beerus",
                "skills":"Destruction",
             },{ 
                "characterName": "Jiren",
                "skills":"Power Impact",
             }]
        },
        {
            animeName:'Naruto',
            characters: [{ 
                "characterName": "Naruto",
                "skills":"Rasengan",
             }, { 
                "characterName": "sasuke",
                "skills":"Chidori",
             }, { 
                "characterName": "Neji",
                "skills":"Byakugan",
             }, { 
                "characterName": "Rock Lee",
                "skills":"Taijutsu",
             }, { 
                "characterName": "Kakashi",
                "skills":"Copy",
             }]
        }
    ];

//reduce this code
const setRandomCharacter = ( animeOne, animeTwo ) => {
    const imageFighterOne = document.createElement('img');
    const imageFighterTwo = document.createElement('img');
    imageFighterOne.setAttribute('src', getRandomCharacter(animeOne).url);
    imageFighterTwo.setAttribute('src', getRandomCharacter(animeTwo).url);
    boxesFight[0].appendChild(imageFighterOne);
    boxesFight[1].appendChild(imageFighterTwo);
    
}


const getRandomCharacter = ( anime ) => {
    let randomCharacter='';

    for(let i =0; i < arrAnime.length; i++) {
        
        if( String(anime).toLocaleLowerCase() === arrAnime[i].animeName.toLocaleLowerCase() ) {
            let { characters } = arrAnime[i];
            let randomIndex = Math.floor( Math.random() * characters.length );
            randomCharacter = characters[randomIndex];
        }
    }

    let { characterName, skills, url } = randomCharacter

    return {
        characterName,
        skills,
        url
    };
}

console.log( getRandomCharacter('naruto') );

mainForm[0].addEventListener('submit', (event) => {
    event.preventDefault();
    const animeOne = document.getElementById('anime1').value;
    const animeTwo = document.getElementById('anime2').value;
    setRandomCharacter(animeOne, animeTwo);
    console.log(animeOne);
})