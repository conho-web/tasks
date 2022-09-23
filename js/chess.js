"use strict";

const droppable = document.querySelectorAll('.droppable');
const draggable = document.querySelectorAll('.draggable');
const initialCoords = {};

const canDrop = (dragElem, x, y) => {
  switch (dragElem.dataset.type) {
    case "king":
      if (Math.abs(initialCoords.x - x) <= 1 && Math.abs(initialCoords.y - y) <= 1) {
        return true
      } 
      else {
        return false
      }

    case "pawn":
      if (Math.abs(initialCoords.x - x) === 1 && Math.abs(initialCoords.y - y) === 1) {
        return true
      }
      if (dragElem.dataset.color === "white" && initialCoords.x - x === 0 && y - initialCoords.y === 1) {
        return true
      }
      if (dragElem.dataset.color === "white" && initialCoords.x - x === 0 && initialCoords.y === 2 && y === 4) {
        return true
      }
      if (dragElem.dataset.color === "black" && initialCoords.x - x === 0 && initialCoords.y - y === 1) {
        return true
      }
      if (dragElem.dataset.color === "black" && initialCoords.x - x === 0 && initialCoords.y === 7 && y === 5) {
        return true
      }

    default:
      return false
  }
}

for (let draggableNode of draggable) {
  draggableNode.addEventListener('dragstart', e => {
    initialCoords.x = +e.target.parentElement.dataset.x;
    initialCoords.y = +e.target.parentElement.dataset.y;
    e.target.classList.add('dragging')
  })

  draggableNode.addEventListener('dragend', e => {
    e.target.classList.remove('dragging')
  })
}

for (let droppableNode of droppable) {
  droppableNode.addEventListener('dragover', e => {
    e.preventDefault()
  })

  droppableNode.addEventListener('drop', e => {
    e.preventDefault();

    const target = e.target.tagName === "TD" ? e.target : e.target.parentElement;
    const x = +target.dataset.x;
    const y = +target.dataset.y;
    const dragElem = document.querySelector('.dragging');

    if (canDrop(dragElem, x, y)) {
      if (target.firstElementChild && target.firstElementChild.dataset.type === 'king') {
        return false
      }

      if (dragElem.dataset.type === 'pawn') {
        if (Math.abs(initialCoords.x - x) === 1 && Math.abs(initialCoords.y - y) === 1  && !target.firstElementChild) {
          return false
        }

        if (Math.abs(initialCoords.x - x) === 1 && Math.abs(initialCoords.y - y) === 1  && target.firstElementChild.dataset.color !== dragElem.dataset.color) {
          target.firstElementChild.remove();
          target.appendChild(dragElem)
        }

        if (!target.firstElementChild) {
          target.appendChild(dragElem)
        }
      } 
      
      else if (!target.firstElementChild) {
          target.appendChild(dragElem)
      } 
      
      else if (target.firstElementChild.dataset.color !== dragElem.dataset.color) {
          target.firstElementChild.remove();
          target.appendChild(dragElem)
      }
    }
  })
}