import emptyCheckbox from '../images/icons/empty-checkbox.svg';
import dropDown from '../images/icons/drop-down.svg';
import trashCan from '../images/icons/trash-can.svg';

export default function render(list){  
  
  const cardContainer = document.querySelector('#card-container');
  while(cardContainer.childElementCount){
    cardContainer.lastChild.remove();
  }
  
  list.forEach(item => {
    const values = item.getValues();

    const template = `
      <div class="card">

      <div class="header">
        <div class="button">
          <img src="${emptyCheckbox}">
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
              <img src="${dropDown}">
            </span>
          </div>
        </div>
      </div>

      <div class="description">
        <span class="target">${'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto unde non fugiat reprehenderit explicabo, eligendi nulla provident voluptates minima culpa sunt hic nisi omnis ea. Eveniet nostrum sed cumque neque.'}</span>
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
            <img src="${trashCan}">
          </span>
        </div>
      </div>
      </div>
  `;
    cardContainer.insertAdjacentHTML('beforeend', template);
  
  });



}