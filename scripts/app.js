// This file contains the JavaScript code for the web application. It handles user input, manages data storage, and updates the display tab with the entered information.

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('inputForm');
    const displayButton = document.getElementById('displayButton');
    const subjectInput = document.getElementById('subject');
    const outputInput = document.getElementById('output');
    const dateInput = document.getElementById('date');
    const notesInput = document.getElementById('notes');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const subject = subjectInput.value;
        const output = outputInput.value;
        const date = dateInput.value;
        const notes = notesInput.value;

        const entry = { subject, output, date, notes };
        saveEntry(entry);
        form.reset();
    });

    displayButton.addEventListener('click', () => {
        window.open('display.html', '_blank');
    });

    function saveEntry(entry) {
        let entries = JSON.parse(localStorage.getItem('entries')) || [];
        entries.push(entry);
        localStorage.setItem('entries', JSON.stringify(entries));
    }
});