function setChapterList() {
    localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('chapters')) || [];
}

function deleteChapter(chapter) {
    var cleanedChapter = chapter.slice(0, -1);
    chaptersArray = chaptersArray.filter(item => item !== cleanedChapter);
    setChapterList();
    renderChapterList();
}

function renderChapterList() {
    var chapterList = document.getElementById('chapter-list');
    chapterList.innerHTML = '';
    chaptersArray.forEach((chapter) => {
        displayList(chapter);
    });
}

function displayList(item) {
    var chapterList = document.getElementById('chapter-list');
    var listItem = document.createElement('li');
    listItem.textContent = item;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function () {
        deleteChapter(item);
    });

    listItem.appendChild(deleteButton);
    chapterList.appendChild(listItem);
}

var addButton = document.getElementById('add-button');
addButton.addEventListener('click', function () {
    var input = document.getElementById('new-chapter');
    if (input.value.trim() !== '') {
        var chapter = input.value;
        displayList(chapter);
        chaptersArray.push(chapter);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

var chaptersArray = getChapterList();
renderChapterList();
