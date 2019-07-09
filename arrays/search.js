const notes =  [{
    title: 'Emergency Fund',
    body: 'Save emergency fund 6 months'
}, {
    title: 'Retirement',
    body: 'Get Tin, Invest PERA retirement'
}, {
    title: 'Investing',
    body: 'Invest mutual funds COLFinancial'
}]
 
const findNote = function (notes, noteTitle) {
const index = notes.findIndex(function (note) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
})
return notes[index]
}
 
const note = findNote(notes, 'investing')
console.log(note)
