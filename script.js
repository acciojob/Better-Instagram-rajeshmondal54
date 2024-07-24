//your code here
const draggables = document.querySelectorAll('.image');
let draggedElement = null;

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', (e) => {
    draggedElement = e.target;
    e.dataTransfer.setData('text/plain', null);
  });

  draggable.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  draggable.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedElement !== e.target) {
      let draggedElementBG = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = draggedElementBG;
    }
  });
});
