const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');


button.addEventListener('click', () => {
    const newItem = input.value;
    input.value = '';

    const listItem = document.createElement('li');
    const text = document.createElement('span');
    const buttonDelete = document.createElement('button');

    listItem.appendChild(text);
    text.textContent = newItem;
    listItem.appendChild(buttonDelete);
    buttonDelete.textContent = '❌';
    list.appendChild(listItem);

    buttonDelete.addEventListener('click', () => {
        list.removeChild(listItem);
    });
    input.focus();
});