const journal = [
    {
        date: "07/24/2025",
        concept: "HTML & CSS",
        entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
        mood: "Ok"
    },
    {
        date: "02/10/2020",
        concept: "JavaScript Data Structure",
        entry: "HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH",
        mood: "😐Ambivalent"
    },
    {
        date: "02/20/2020",
        concept: "JAVASCRIPT STUFFFS",
        entry: "NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO",
        mood: "😵Confused"
    },
    {
        date: "02/29/2020",
        concept: "REACT",
        entry: "OOOOH MY GOOOOOOOOOOSH",
        mood: "😖Miserable"
    }
]


export const useJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}