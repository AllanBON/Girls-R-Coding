docReady(() => {
    
    const containerElement = document.querySelector(".js-publish-container")
    const actionElement = document.querySelector(".js-publish-action")
    const messageElement = document.querySelector(".js-publish-message")

    // Lorsque je clique sur l'element << actionElement >> je déclenche ..
    actionElement.addEventListener('click', () => {

        // .. ces traitements
        const newItemElement = document.createElement("article");
        newItemElement.innerHTML = getItemTemplate(messageElement.value, 'Marie', new Date())

        // On insère le nouveau post, mais où ca ? Repondre ici :
        containerElement.insertBefore(newItemElement, containerElement.firstChild);
    });
});




/* --------------------------------------------------------------------- */



function docReady(fn) {
    (document.readyState === "complete" || document.readyState === "interactive")
        ? setTimeout(fn, 1)
        : document.addEventListener("DOMContentLoaded", fn)
}

function getItemTemplate(message, author, date) {

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
            <span class="feedback-item">
              145 likes
            </span>
            <span class="feedback-item">
              1 commentaire
            </span>
          </aside>
  
          <div class="post__actions">
            <button type="button" name="like" class="post__button post__button--like">Like</button>
            <button type="button" name="repondre" class="post__button post__button--answer">Répondre</button>
          </div>
        </div>`
}

