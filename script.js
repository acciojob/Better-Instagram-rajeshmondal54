//your code here
document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.image');

    let dragSrcEl = null;

    function handleDragStart(e) {
        dragSrcEl = this;

        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault();
        }

        e.dataTransfer.dropEffect = 'move';

        return false;
    }

    function handleDragEnter(e) {
        this.classList.add('over');
    }

    function handleDragLeave(e) {
        this.classList.remove('over');
    }

    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation();
        }

        if (dragSrcEl != this) {
            dragSrcEl.innerHTML = this.innerHTML;
            this.innerHTML = e.dataTransfer.getData('text/html');
        }

        return false;
    }

    function handleDragEnd(e) {
        images.forEach(function (image) {
            image.classList.remove('over');
        });
    }

    images.forEach(function (image) {
        image.addEventListener('dragstart', handleDragStart, false);
        image.addEventListener('dragenter', handleDragEnter, false);
        image.addEventListener('dragover', handleDragOver, false);
        image.addEventListener('dragleave', handleDragLeave, false);
        image.addEventListener('drop', handleDrop, false);
        image.addEventListener('dragend', handleDragEnd, false);
    });
});
