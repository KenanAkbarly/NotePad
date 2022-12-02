const todoList = document.querySelector('body')
const main = document.querySelector('.container')
const content = document.querySelector("#content");

const inputTitle = document.querySelector("#input_title__inp");
const writeNote = document.querySelector("#textarea_note_txt");

const pinc = document.querySelector(".select_color_pinc")
const purple = document.querySelector(".select_color_purple")
const blue = document.querySelector(".select_color_blue")
const yellow = document.querySelector(".select_color_yellow")
const green = document.querySelector(".select_color_green")
const btn = document.querySelector("#select_color_button");

//  const cardHeader = document.querySelector('.card_head');
//  const card = document.querySelector('.card');

const pincCheck = document.querySelector(".select_color_btncheck1")
const purpleCheck = document.querySelector(".select_color_btncheck2")
const blueCheck = document.querySelector(".select_color_btncheck3")
const yellowCheck = document.querySelector(".select_color_btncheck4")
const greenCheck = document.querySelector(".select_color_btncheck5")


pinc.addEventListener('click',()=>{
  pincCheck.style.display = 'block'



})
purple.addEventListener('click',()=>{
    purpleCheck.style.display = 'block'
    

})
blue.addEventListener('click',()=>{
    blueCheck.style.display = 'block'

})
yellow.addEventListener('click',()=>{
    yellowCheck.style.display = 'block'

})
green.addEventListener('click',()=>{
    greenCheck.style.display = 'block'

})

const cards = document.querySelector('.cards')
const removeBtn = document.querySelector('.remove')



btn.addEventListener('click', () =>{
    if (inputTitle.value=="  " || writeNote.value=="  ")return
    if(inputTitle.value=="" || writeNote.value == "" ){
        alert("Please write note title")
    }
    else{
      
   
  let mainCard = document.querySelector('.cards');
  let cards = document.createElement('div');
//   cards.classList.add('cards')
  let card = document.createElement('div');
  cards.classList.add('card')
  let cardHead = document.createElement('div');
  cardHead.classList.add('card_head');
  let cardH3 = document.createElement('h3')
  cardH3.textContent = inputTitle.value;
  let removeBtn = document.createElement('button');
  removeBtn.innerHTML = `<i class="fa-solid fa-trash-can"></i>`
  let cardBody = document.createElement('div');
  cardBody.classList.add('card_body');
  let text = document.createElement('p');
  text.textContent = writeNote.value;
  if( pincCheck.style.display === 'block'){
    cardHead.style.backgroundColor = '#f06292'
    cards.style.border = '2px dashed #f06292'
    removeBtn.style.backgroundColor = '#f06292'
   }
  else if( purpleCheck.style.display === 'block'){
    cardHead.style.backgroundColor = '#ba68c8'
    cards.style.border = '2px dashed #ba68c8'
    removeBtn.style.backgroundColor = '#ba68c8'
   }
  else if( blueCheck.style.display === 'block'){
    cardHead.style.backgroundColor = '#4fc3f7'
    cards.style.border = '2px dashed #4fc3f7'
    removeBtn.style.backgroundColor = '#4fc3f7'
   }
  else if( yellowCheck.style.display === 'block'){
    cardHead.style.backgroundColor = '#ffd54f'
    cards.style.border = '2px dashed #ffd54f'
    removeBtn.style.backgroundColor = '#ffd54f'
   }
  else if( greenCheck.style.display === 'block'){
    cardHead.style.backgroundColor = '#aed581'
    cards.style.border = '2px dashed #aed581'
    removeBtn.style.backgroundColor = '#aed581'
   }
   else{
   return alert('Choose color')
   }
   pincCheck.style.display = 'none'
   purpleCheck.style.display = 'none'
   blueCheck.style.display = 'none'
   yellowCheck.style.display = 'none'
   greenCheck.style.display = 'none'
removeBtn.addEventListener('click',()=>{
    cards.remove()
})
  cardHead.append(cardH3,removeBtn)
  card.appendChild(cardHead)
  cardBody.appendChild(text)
  card.appendChild(cardBody)
  cards.appendChild(card);
//   mainCard.innerHTML = `
//   <div class="cards">
//                 <div class="card">
//                     <div class="card_head">
//                         <h3>${inputTitle.value}</h3>
//                         <button class="remove"><i class="fa-solid fa-trash-can"></i></button>
//                     </div>
//                     <div class="card_body">
//                         <p>${writeNote.value}</p>
//                     </div>
//                 </div>
  
// </div>


inputTitle.value = ""
writeNote.value = ""
mainCard.appendChild(cards)
content.append(inputTitle,writeNote,pinc,purple,blue,yellow,green,cardHeader,card)
main.append(content)
todoList.appendChild(main,mainCard)
}
})


