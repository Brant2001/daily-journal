import { useJournalEntries } from "./JournalDataProvider.js"
import JournalEntryComponent from "./JournalEntry.js"



const EntryListComponent = () => {

    const entryLog = document.querySelector(".entryLog")
    const entries = useJournalEntries()

    for (const entry of entries) {

        entryLog.innerHTML += JournalEntryComponent(entry)
    }
}

export default EntryListComponent