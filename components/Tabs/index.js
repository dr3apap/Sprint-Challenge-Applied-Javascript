// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

function createTabComponent(arr) {
    const tabDiv = document.createElement('div')
    const textHolder = document.createElement('p')
    textHolder.textContent = arr
    tabDiv.append(textHolder)
    tabDiv.classList.add('tab')
    console.log(tabDiv)

    tabDiv.addEventListener("click", event => {
        tabDiv.classList.toggle('active-tab');
    })
    return tabDiv
}

const entry = document.querySelector('.topics')
console.log(entry)

axios.get("https://lambda-times-backend.herokuapp.com/topics")
    .then(res => {
        res.data.topics.forEach(item => {
            entry.append(createTabComponent(item))
        })
        console.log('The data returned:', res)

    })
    .catch(err => {
    })
