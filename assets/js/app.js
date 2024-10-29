
//const arrCharacters = []

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
             }, { 
                "characterName": "sasuke",
                "skills":"chidori",
                "url":"https://i.pinimg.com/736x/9c/1c/cc/9c1ccc8bfd376eecd216bf88c4879c1a.jpg"
             }, { 
                "characterName": "sakura",
                "skills":"none",
                "url":"https://i.pinimg.com/736x/9c/1c/cc/9c1ccc8bfd376eecd216bf88c4879c1a.jpg"
             }, { 
                "characterName": "lee",
                "skills":"taijutsu",
                "url":"https://i.pinimg.com/736x/9c/1c/cc/9c1ccc8bfd376eecd216bf88c4879c1a.jpg"
             }, { 
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
                "url":"https://i.pinimg.com/736x/9c/1c/cc/9c1ccc8bfd376eecd216bf88c4879c1a.jpg",
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



const getRandomCharacter = ( anime ) => {
    let randomCharacter='';

    for(let i =0; i < arrAnime.length; i++){
        
        if( String(anime).toLocaleLowerCase() === arrAnime[i].animeName.toLocaleLowerCase() ) {
            let { characters } = arrAnime[i];
            let randomIndex = Math.floor(Math.random() * characters.length);
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


