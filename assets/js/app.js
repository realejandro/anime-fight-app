
//const arrCharacters = []

const mainForm = document.getElementsByClassName('anime-input');
const boxesFight = document.getElementsByClassName('fighter-box');

const arrAnime = [
        {
            animeName:'Demon Slayer',
            characters: [{ 
                "characterName": "naruto",
                "skills":"rasengan",
             }, { 
                "characterName": "sasuke",
                "skills":"chidori",
             }, { 
                "characterName": "sakura",
                "skills":"none",
             }, { 
                "characterName": "lee",
                "skills":"taijutsu",
             }, { 
                "characterName": "kakashi",
                "skills":"copy",
             }]
        },
        {
            animeName:'One piece',
            characters: [{ 
                "characterName": "naruto",
                "skills":"rasengan",
             }, { 
                "characterName": "sasuke",
                "skills":"chidori",
             }, { 
                "characterName": "sakura",
                "skills":"none",
             }, { 
                "characterName": "lee",
                "skills":"taijutsu",
             }, { 
                "characterName": "kakashi",
                "skills":"copy",
             }]
        },
        {
            animeName:'Yuyutzu Kaisen',
            characters: [{ 
                "characterName": "naruto",
                "skills":"rasengan",
             }, { 
                "characterName": "sasuke",
                "skills":"chidori",
             }, { 
                "characterName": "sakura",
                "skills":"none",
             }, { 
                "characterName": "lee",
                "skills":"taijutsu",
             }, { 
                "characterName": "kakashi",
                "skills":"copy",
             }]
        },
        {
            animeName:'Dragon Ball',
            characters: [{ 
                "characterName": "naruto",
                "skills":"rasengan",
                "url":"https://i.pinimg.com/736x/9c/1c/cc/9c1ccc8bfd376eecd216bf88c4879c1a.jpg"
             },{ 
                "characterName": "sasuke",
                "skills":"chidori",
                "url":"https://i.pinimg.com/736x/9c/1c/cc/9c1ccc8bfd376eecd216bf88c4879c1a.jpg"
             },{ 
                "characterName": "sakura",
                "skills":"none",
                "url":"https://i.pinimg.com/736x/9c/1c/cc/9c1ccc8bfd376eecd216bf88c4879c1a.jpg"
             },{ 
                "characterName": "lee",
                "skills":"taijutsu",
                "url":"https://i.pinimg.com/736x/9c/1c/cc/9c1ccc8bfd376eecd216bf88c4879c1a.jpg"
             },{ 
                "characterName": "kakashi",
                "skills":"copy",
                "url":"https://i.pinimg.com/736x/9c/1c/cc/9c1ccc8bfd376eecd216bf88c4879c1a.jpg"
             }]
        },
        {
            animeName:'Naruto',
            characters: [{ 
                "characterName": "naruto",
                "skills":"rasengan",
                "url":"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/76612106-8aba-4097-9619-baee44cc3b5f/db7svu6-1e7822cd-0e86-4f17-a09b-408bec10bea1.png/v1/fill/w_1024,h_1024/naruto_shippuden_naruto_uzumaki__rasengan__by_iennidesign_db7svu6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcLzc2NjEyMTA2LThhYmEtNDA5Ny05NjE5LWJhZWU0NGNjM2I1ZlwvZGI3c3Z1Ni0xZTc4MjJjZC0wZTg2LTRmMTctYTA5Yi00MDhiZWMxMGJlYTEucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.khvIaUxqCglrYuCm8-PiYeTLKd8jB9nP37UDYiXhmXQ",
             }, { 
                "characterName": "sasuke",
                "skills":"chidori",
                "url":"https://i.pinimg.com/736x/b2/b1/66/b2b16600f69611cbb250704d1c6b6809.jpg",
             }, { 
                "characterName": "sakura",
                "skills":"none",
                "url":"https://i.pinimg.com/736x/8a/0e/8d/8a0e8d8762e8790a788d0c84a68f650a.jpg",
             }, { 
                "characterName": "lee",
                "skills":"taijutsu",
                "url":"https://upload.wikimedia.org/wikipedia/en/9/9e/RockLee.png",
             }, { 
                "characterName": "kakashi",
                "skills":"copy",
                "url":"https://static.wikia.nocookie.net/naruto/images/2/27/Kakashi_Hatake.png/revision/latest/scale-to-width-down/1000?cb=20230803224121",
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