// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function createDomComponent(topic, nastyObject) {
    topic = topic.toLowerCase();
    const card = document.createElement('div'),
        headline = document.createElement('div'),
        author = document.createElement('div'),
        imgDiv = document.createElement('div'),
        authorName = document.createElement('span'),
        theImg = document.createElement('img')
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgDiv.classList.add('img-container')
    card.classList.add('card', `${topic}`);
    theImg.src = nastyObject.authorPhoto;
    authorName.textContent = nastyObject.authorName;

    card.append(headline, author);
    headline.append(nastyObject.headline);
    author.append(imgDiv, authorName);
    imgDiv.append(theImg);
    return card
}
const mainCardEntry = document.querySelector('.cards-container');

axios.get("https://lambda-times-backend.herokuapp.com/articles")
    .then(res => {
        for (let topicKey in res.data.articles) {
            res.data.articles[topicKey].forEach(item => {
                mainCardEntry.append(createDomComponent(topicKey, item));
            });
        }

        console.log("The data returned", res)
    })
    .catch(err => {


    })


