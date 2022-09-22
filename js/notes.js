function deleteNote() {
  event.target.closest("div").remove();
}

function addNote() {
  let note = document.querySelector('#note-text').value;

  if (note) {
    let notesContainer = document.querySelector('#notes-container');
    let newNote = document.createElement("div");
    newNote.classList.add("note");
    newNote.innerHTML = `
      <p>${note}</p>
      <button onclick="deleteNote()">Удалить</button>
    `;
    notesContainer.appendChild(newNote);
  }
}