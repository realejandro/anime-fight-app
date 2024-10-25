
const arrCharacters = []
const objAnime = {
    animes: {
        naruto: {
            characters: ['naruto', 'sasuke', 'sakura', 'lee', 'kakashi'],
        },
        demon: {
            characters: ['naruto', 'sasuke', 'sakura', 'lee', 'kakashi']
        },
        yuyutzu: {
            characters: ['naruto', 'sasuke', 'sakura', 'lee', 'kakashi']
        },
        dragon: {
            characters: ['naruto', 'sasuke', 'sakura', 'lee', 'kakashi']
        },
        piece: {
            characters: ['naruto', 'sasuke', 'sakura', 'lee', 'kakashi']
        }
    }
}
const getCurrentImage = () => {
    
    const imgs = document.getElementsByTagName("img");

    for( let i =0; i < imgs.length; i++){
        imgs[i].setAttribute('class', 'anime-images');
        imgs[i].addEventListener('click', (event) => {
            console.log(event.currentTarget.getAttribute('src'));
        });
    }

}

//send img to the box
//
const sendImageInsideBox = ( image ) => {
    let box = document.getElementsByClassName("figther-box");
    //box.innerHtml=image
    //conditionals

    if(image === 'naruto'){

    }
}


const init = () => {
    getCurrentImage();
}

init();


//data-state