const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const listItem = document.createElement('li');

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');
        deleteButton.addEventListener('click', () => {
            listItem.remove();
        });

        listItem.textContent = input.value;
        listItem.appendChild(deleteButton);

        list.appendChild(listItem);

        input.value = '';
        input.focus();
    } else {
        input.focus();
    }
});
