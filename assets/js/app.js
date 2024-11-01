
//const arrCharacters = []

const mainForm = document.getElementsByClassName('anime-input');
const boxesFight = document.getElementsByClassName('fighter-box');
const modalBtn = document.getElementsByClassName('btn btn-danger')[0];
const btnAgain = document.getElementById('play-again');


let currentElements = [];


//anime options object
const arrAnime = [
        {
            animeName:'Demon Slayer',
            characters: [{ 
                "characterName": "Tanjiro",
                "skills":"Hinokami Kagura",
                "url":"assets/images/Demon Slayer/Tanjiro.png"
             }, { 
                "characterName": "Nezuko",
                "skills":"Blood Demon Art",
                "url":"assets/images/Demon Slayer/Nezuko.png"
             }, { 
                "characterName": "Inosuke",
                "skills":"Breath of the Beast",
                "url":"assets/images/Demon Slayer/Inosuke.png"
             }, { 
                "characterName": "Zenitsu",
                "skills":"Thunderclap and Flash",
                "url":"assets/images/Demon Slayer/Zenitsu.png"
             }, { 
                "characterName": "Muzan",
                "skills":"Absorption",
                "url":"assets/images/Demon Slayer/Muzan.png"
             }]
        },
        {
            animeName:'One piece',
            characters: [{ 
                "characterName": "Luffy",
                "skills":"Gear 5",
                "url":"assets/images/One Piece/Luffy.png"
             }, { 
                "characterName": "Zoro",
                "skills":"Onigiri",
                "url":"assets/images/One Piece/Zoro.png"
             }, { 
                "characterName": "Shanks",
                "skills":"Observation Haki",
                "url":"assets/images/One Piece/Shanks.png"
             }, { 
                "characterName": "Sanji",
                "skills":"8 Flanche Strike",
                "url":"assets/images/One Piece/Sanji.png"
             }, { 
                "characterName": "Nami",
                "skills":"Clima-Tact",
                "url":"assets/images/One Piece/Nami.png"
             }]
        },
        {
            animeName:'JuJutsu Kaisen',
            characters: [{ 
                "characterName": "Yuji",
                "skills":"Black Flash",
                "url":"assets/images/Jujutsu Kaisen/Yuji.png"
             }, { 
                "characterName": "Gojo",
                "skills":"Infinity",
                "url":"assets/images/Jujutsu Kaisen/Gojo.png"
             }, { 
                "characterName": "Sukuna",
                "skills":"Malevolent Shrine",
                "url":"assets/images/Jujutsu Kaisen/Sukuna.png"
             }, { 
                "characterName": "Geto",
                "skills":"Womb Profusion",
                "url":"assets/images/Jujutsu Kaisen/Geto.png"
             }, { 
                "characterName": "Todo",
                "skills":"Boogie Woogie",
                "url":"assets/images/Jujutsu Kaisen/Todo.png"
             }]
        },
        {
            animeName:'Dragonball Z',
            characters: [{ 
                "characterName": "Goku",
                "skills":"Ultra-Instinct",
                "url":"assets/images/Dragonball Z/Goku.png"
             },{ 
                "characterName": "Vegeta",
                "skills":"Galik Gun",
                "url":"assets/images/Dragonball Z/Vegeta.png"
             },{ 
                "characterName": "Hit",
                "skills":"Time Lag",
                "url":"assets/images/Dragonball Z/Hit.png"
             },{ 
                "characterName": "Beerus",
                "skills":"Destruction",
                "url":"assets/images/Dragonball Z/Beerus.png"
             },{ 
                "characterName": "Jiren",
                "skills":"Power Impact",
                "url":"assets/images/Dragonball Z/Jiren.png"
             }]
        },
        {
            animeName:'Naruto',
            characters: [{ 
                "characterName": "Naruto",
                "skills":"Rasengan",
                "url":"assets/images/Naruto/Naruto.png"
             }, { 
                "characterName": "Sasuke",
                "skills":"Chidori",
                "url":"assets/images/Naruto/Sasuke.png"
             }, { 
                "characterName": "Neji",
                "skills":"Byakugan",
                "url":"assets/images/Naruto/Neji.png"
             }, { 
                "characterName": "Rock Lee",
                "skills":"Taijutsu",
                "url":"assets/images/Naruto/RockLee.png"
             }, { 
                "characterName": "Kakashi",
                "skills":"Copy",
                "url":"assets/images/Naruto/Kakashi.png"
             }]
        }
    ];


// function to display character images within fighterbox    
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

    boxesFight[0].innerHTML = '';
    boxesFight[1].innerHTML = '';

    boxesFight[0].appendChild(imageFighterOne);
    boxesFight[1].appendChild(imageFighterTwo);
    
};


const getRandomCharacter = ( anime ) => {
    
   let randomCharacter='';

    for(let i =0; i < arrAnime.length; i++) {
        
        if( String(anime).replace(" ","")
            .trim().toLocaleLowerCase() === arrAnime[i].animeName.replace(" ", "")
            .trim().toLocaleLowerCase() )  {
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
    
})


//initialize anime wins in local storage
const initializeWins = () => {
   const animeWins = {
       'Demon Slayer': 0,
       'One piece': 0,
       'JuJutsu Kaisen': 0,
       'Dragonball Z': 0,
       'Naruto': 0,
   };
   if (!localStorage.getItem('animeWins')) {
       localStorage.setItem('animeWins', JSON.stringify(animeWins));
   }
};

const updateWins = (winnerAnime) => {
   const animeWins = JSON.parse(localStorage.getItem('animeWins'));
   if (animeWins[winnerAnime] !== undefined) {
       animeWins[winnerAnime] += 1;
       localStorage.setItem('animeWins', JSON.stringify(animeWins));
   }
};

initializeWins();


//modal-click
modalBtn.addEventListener('click', () => {
   const modalBody = document.getElementsByClassName('modal-body')[0];
   const modalTitle = document.getElementById('exampleModalLabel');

   modalTitle.innerText = `${currentElements[0].characterName} vs ${currentElements[1].characterName}`;

   const winnerDiv = document.createElement('div');
   winnerDiv.setAttribute('class', 'card-body');
   const random = Math.floor(Math.random() * currentElements.length);
   const winnerCharacter = currentElements[random].characterName;
   const winnerAnime = getAnimeName(winnerCharacter);
   updateWins(winnerAnime);
   winnerDiv.innerHTML = `<h2>${winnerCharacter} Won!!!</h2>`;

   modalBody.innerHTML = '';
   modalBody.appendChild(winnerDiv);
   console.log(currentElements);
})

//gets anime name based on character name for win counter
const getAnimeName = (characterName) => {
   for (let anime of arrAnime) {
       const foundCharacter = anime.characters.find(character => character.characterName === characterName);
       if (foundCharacter) {
           return anime.animeName; 
       }
   }
   return null; 
};

//play again button
btnAgain.addEventListener('click', () => {
  const modalBody = document.getElementsByClassName('modal-body')[0];
  modalBody.innerHTML = ''; 

  boxesFight[0].innerHTML = '';
  boxesFight[1].innerHTML = '';
  
  currentElements = [];

  const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
  if (modal) {
      modal.hide();
  }
});

//comment