let playlistName = document.querySelector('#name');
let playlistGender = document.querySelector('#gender');
let div = document.querySelector('#playlist');


document.getElementById('create').addEventListener("click", function () {
    let newDiv = document.createElement('div');
    newDiv.className = 'playlist';
    div.append(newDiv);
    let titlePlaylist = document.createElement('h2');
    let genderPlaylist = document.createElement('h3');
    newDiv.append(titlePlaylist);
    newDiv.appendChild(genderPlaylist);
    titlePlaylist.innerHTML = playlistName.value;
    genderPlaylist.innerHTML = playlistGender.value;


    function addLien() {
        let inputTitre = document.createElement('input');
        let inputLien = document.createElement('input');
        let button = document.createElement('button');
        inputTitre.placeholder = "Titre de la musique";
        inputLien.placeholder = "Lien de la musique";
        button.innerHTML = "Ajouter";
        newDiv.append(inputTitre);
        newDiv.append(inputLien);
        newDiv.append(button);

        button.addEventListener('click', function (event) {
            let lien = document.createElement('a');
            newDiv.append(lien);
            lien.innerHTML += inputTitre.value;
            lien.href += inputLien.value;
        });
    }
    addLien();
})
