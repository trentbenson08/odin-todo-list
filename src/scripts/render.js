import emptyCheckbox from '../images/icons/empty-checkbox.svg';
import checkbox from '../images/icons/checkbox.svg';
import dropDown from '../images/icons/drop-down.svg';
import trashCan from '../images/icons/trash-can.svg';

export default function render(list){  
  
  const cardContainer = document.querySelector('#card-container');
  while(cardContainer.childElementCount){
    cardContainer.lastChild.remove();
  }
  
  list.forEach(item => {
    const values = item.getValues();

    console.log(values.complete?'checkbox':'emptyCheckbox');
    const template = `
      <div class="card hidden" data-index="${values.index}">

      <div class="header">
        <div class="button">
          <img src="${values.complete?checkbox:emptyCheckbox}" class="button-checkbox">
        </div>
        <div class="title">
          <span class="target">${values.title}</span>
        </div>
        <div class="right">
          <div class="due-date">
            <span class="target">${values.due}</span>
          </div>
          <div class="button">
            <span>
              <img src="${dropDown}" class="button-drop">
            </span>
          </div>
        </div>
      </div>

      <div class="description">
        <span class="target">${values.description}</span>
      </div>

      <div class="footer">
        <div class="due-date">
          <span>Due:&nbsp</span>
          <span class="target">${values.due}</span>
        </div>
        <div class="priority">
          <span>Priority:&nbsp</span>
          <span class="target">${values.priority}</span>
        </div>
        <div class="button">
          <span>
            <img src="${trashCan}" class="button-trash">
          </span>
        </div>
      </div>
      </div>
  `;
    cardContainer.insertAdjacentHTML('beforeend', template);
  
  });



}