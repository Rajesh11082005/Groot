class DragElement{
    
    static dragOver(parentId, elementType) {
        const list = document.getElementById(parentId);

        list.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', e.target.innerText);
            e.target.classList.add('dragging');
        });

        list.addEventListener('dragover', (e) => {
            e.preventDefault();
            const draggingElement = document.querySelector('.dragging');
            const overElement = e.target.closest(elementType);
            if (overElement && overElement !== draggingElement) {
                const rect = overElement.getBoundingClientRect();
                const offset = e.clientY - rect.top - rect.height / 2;
                if (offset > 0) {
                    list.insertBefore(draggingElement, overElement.nextSibling);
                } else {
                    list.insertBefore(draggingElement, overElement);
                }
            }
        });

        list.addEventListener('dragend', (e) => {
            const draggingElement = document.querySelector('.dragging');
            draggingElement.classList.remove('dragging');
        });
    }

}



DragElement.dragOver("main", "input-custom-element");

