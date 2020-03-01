const JournalEntryComponent = (entry) => {
    return `
        <section id="entry--${entry.id}" class="journalEntry">
        
            <div class="journal__name">${entry.name}</div>
            <button class="button--open" id="journal--${entry.name}">Info</button>

            <section class="info--journal" id="details--${entry.name}">
                <div>Species: ${entry.species}</div>
                <div>Location: ${entry.location}</div>
                <div>Length: ${entry.length}</div>
                <div>Food: ${entry.food}</div>
            </section>
        </section>
    `
}

export default JournalEntryComponent