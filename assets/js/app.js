
//const arrCharacters = []

const mainForm = document.getElementsByClassName('anime-input');
const boxesFight = document.getElementsByClassName('fighter-box');
const modalBtn = document.getElementsByClassName('btn btn-danger')[0];

let currentElements = [];

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
const displayImageCharacters = ( animeOne, animeTwo ) => {
    const imageFighterOne = document.createElement('img');
    const imageFighterTwo = document.createElement('img');

    const randomCharacterOne = getRandomCharacter(animeOne);
    const randomCharacterTwo = getRandomCharacter(animeTwo);

    if(currentElements.length < 0){
      currentElements.push(randomCharacterOne);
      currentElements.push(randomCharacterTwo);
   } else {
      currentElements[0] = randomCharacterOne;
      currentElements[1] = randomCharacterTwo;
   }
    

    imageFighterOne.setAttribute('src', randomCharacterOne.url);
    imageFighterTwo.setAttribute('src', randomCharacterTwo.url);

    boxesFight[0].appendChild(imageFighterOne);
    boxesFight[1].appendChild(imageFighterTwo);
    
}



//modal
const modalContent = (animeOne, animeTwo) => {
   const div = document.createElement('div');
   const p = document.createElement('p');
   p.innerText = animeOne;
   div.appendChild(p);
   return div;
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

//form action
mainForm[0].addEventListener('submit', (event) => {
    event.preventDefault();
    const animeOne = document.getElementById('anime1').value;
    const animeTwo = document.getElementById('anime2').value;
    displayImageCharacters(animeOne, animeTwo);
    //console.log(modalContent(getRandomCharacter(animeOne).skills));
})

//modal
modalBtn.addEventListener('click', () => {
   const modalBody = document.getElementsByClassName('modal-body')[0];
   const content = document.createElement('textarea');
   content.innerText = "creating modal";
   modalBody.appendChild(content);
   console.log(currentElements);
})