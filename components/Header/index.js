// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component
// Header code here
function Header() {

    const divHeader = document.createElement('div'),
        headerSpan = document.createElement('span'),
        heading = document.createElement('h1'),
        secondSpan = document.createElement('span')
    divHeader.classList.add('header'),
        headerSpan.classList.add('date'),
        secondSpan.classList.add('temp')
    headerSpan.textContent = 'MARCH 28, 2019'
    heading.textContent = 'Lambda Times'
    secondSpan.textContent = '98°'
    divHeader.append(headerSpan)
    divHeader.append(heading)
    divHeader.append(secondSpan)
    console.log(divHeader)
    return divHeader
}//Header code ends
Header()

const headerContainer = document.querySelector('.header-container')
headerContainer.append('divHeader')
console.log(headerContainer)