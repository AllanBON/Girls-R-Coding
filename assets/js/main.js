docReady(() => {
    
    const containerElement = document.querySelector(".js-publish-container")
    const actionElement = document.querySelector(".js-publish-action")
    const messageElement = document.querySelector(".js-publish-message")
	//variable qui permettra de nommer les nouvelles publications avec incrémentation
	var i = 0;
    // Lorsque je clique sur l'element << actionElement >> je déclenche ..
    actionElement.addEventListener('click', () => {
		
        // .. ces traitements
		i ++;
        const newItemElement = document.createElement("article");
        newItemElement.innerHTML = getItemTemplate(messageElement.value, 'Marie', new Date(),i)

        // On insère le nouveau post, mais où ca ? Repondre ici :
        containerElement.insertBefore(newItemElement, containerElement.firstChild);
    });
	
	
	
});


/* --------------------------------------------------------------------- */

//fonction qui déclenche une action lorsqu'on effectue un clic sur une zone bien particulière dans la page
function likeAction(name){
    //on récupère le texte déjà présent 
    var texte = parseInt(document.getElementById(name).innerHTML, 10);
    
    //on ajoute 2 à ce texte
    var number = texte + 2;
    
    //on réécrit le texte dans la page avec la modification
    document.getElementById(name).innerHTML = number;
}

function docReady(fn) {
    (document.readyState === "complete" || document.readyState === "interactive")
        ? setTimeout(fn, 1)
        : document.addEventListener("DOMContentLoaded", fn)
}

function getItemTemplate(message, author, date, num) {

    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    var dateString = date.toLocaleDateString('fr-fr', options) + " à " + date.getHours() + ':' + date.getMinutes()

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
            <span id="likeSpan${num}" class="feedback-item-numb">
              0
            </span>
            <span class="feedback-item">
              Likes 1 commentaire
            </span>
          </aside>
  
          <div class="post__actions">
            <button type="button" name="likeSpan${num}" class="post__button post__button--like" onclick="likeAction(name)">Like</button>
            <button type="button" name="repondre" class="post__button post__button--answer">Répondre</button>
          </div>
        </div>`
}

