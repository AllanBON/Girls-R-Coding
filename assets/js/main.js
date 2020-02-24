/* Mission 8 : Compteur de like
	- Tester un like sur une publication. Quel est le problème ?
	- Le code qui permet de liker une publication se trouve dans cette page. Trouver ou se situe le problème dans cette page (lisez bien les commentaires en vert ;) )
	- Corrigez le problème dans le code
	- Actualisez la page sur firefox, testez a nouveau un like : normalement c'est corrigé :) 
*/

/* Mission 9 : Changer l'ordre d'ajout d'une publication 
	- Ajoutez une publication sur votre site. Ou s'ajoute t'elle ?
	- Maintenant, dans le code ci-dessous, transformez la ligne qui contient "containerElement.appendChild" en un commentaire ( il faut mettre // au début de la ligne et ça devient vert ;) )
	- Enlevez ensuite le commentaire sur la ligne qui contient "containerElement.insertBefore"
	- Retournez sur le site, actualisez la page et ajoutez à nouveau une publication. Quelle est la différence ? C'est mieux non ?
*/

/* Mission 10 : Changez le nom de l'auteur d'une publication 
	- Ajoutez une publication sur votre site. Qui est l'auteur ? Marie c'est ça ? On va changer ça !
	- Retrouvez dans le code ci-dessous à quel endroit on dit que l'auteur est Marie. Maintenant changez en y mettant votre nom.
	- Trop facile ? Ok on passe à plus compliqué dans la mission 11 !	
*/

/* Mission 11 : Changez le nom de l'auteur d'une publication (mais en plus dur)
	- Maintenant on va allez modifier le nom de l'auteur en allant récupérer le nom écrit dans le profil !
	- Dans le fichier index.html, positionez un "id" sur votre nom (rappelez vous de la mission 6 ;) )
	- Dans le code ci-dessous, enlevez le commentaire sur la ligne suivante :  const n = document.querySelector("#votreID").innerHTML;
	- Remplacez l'identifiant (#votreID) par celui que vous avez mis dans le fichier html
	- Plus bas, remplacez 'Marie' (votre nom maintenant) par la variable nouveauNom
*/

docReady(() => {

    /* ------------- Publier un message ------------ */
    
    const containerElement = document.querySelector(".js-publish-container")
    const actionElement = document.querySelector(".js-publish-action")
    const messageElement = document.querySelector(".js-publish-message")

    // Variable qui permettra de nommer les nouvelles publications avec incrémentation
    var i = 0;

    // Lorsque je clique sur l'element << actionElement >> je déclenche ..
    actionElement.addEventListener('click', () => {
		
        // ;.. ces traitements
		    i++;
        const newItemElement = document.createElement("article");
		
		    // const nouveauNom = document.querySelector("#votreID").innerHTML;
		
        newItemElement.innerHTML = getItemTemplate(messageElement.value, 'Manon', new Date(), i)

        // containerElement.insertBefore(newItemElement, containerElement.firstChild);
		    containerElement.appendChild(newItemElement);

        // On efface le message dans la zone de publication
        messageElement.value = null;
		
    });

});


/* ------------- Liker une publication ------------ */

// Fonction qui déclenche une action lorsqu'on like une publication
function likeAction(name){
    
    // On récupère le nombre de likes déjà présents
    var nombreLikeAvant = parseInt(document.getElementById(name).innerHTML, 10);

    // On ajoute 2 à ce nombre
    var nombreLikeApres = nombreLikeAvant + 2;

    // On ecrit le nombre de like apres avoir cliqué
    document.getElementById(name).innerHTML = nombreLikeApres;
}














/**********************************************************************************/

function docReady(fn) {
    (document.readyState === "complete" || document.readyState === "interactive")
        ? setTimeout(fn, 1)
        : document.addEventListener("DOMContentLoaded", fn)
}

function getItemTemplate(message, author, date, num) {

    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const timeOptions = { hour: 'numeric', minute: 'numeric' };

    var dateString = date.toLocaleDateString('fr-fr', dateOptions) + " à " + date.toLocaleTimeString('fr-fr', timeOptions);

    return `
        <div class="post post--white-bg margin-bottom">
          <div class="post__header post-header">
            <img src="assets/images/logo.png" alt="" class="post__avatar">
            <div>
              <b class="post__author">${author}</b>
              <div class="post__author-info post__author-info--light">Développeuse Web Back-end</div>
            </div>
          </div>
  
          <i class="post__date post__date--light">Posté le ${dateString}</i>
          <p class="post__description">
            ${message}
          </p>
  
          <aside class="feedback">
            <span class="feedback-item">
              <span id="likeSpan${num}">0</span>
              likes
            </span>
            <span class="feedback-item">
              0 commentaire
            </span>
          </aside>
  
          <div class="post__actions">
            <button type="button" name="likeSpan${num}" class="post__button post__button--like" onclick="likeAction(name)">Like</button>
            <button type="button" name="repondre" class="post__button post__button--answer">Répondre</button>
          </div>
        </div>`
}

