class BookStorePage{
    constructor() {
        this.searchInputId = '#searchBox'
        this.tableBooksBodyId = ".rt-tbody"
    }

    searchBook(bookTitle){
        cy.get(this.searchInputId).type(bookTitle)
    }

    getSearchResult(index, shouldMatcher, bookTitle){
        cy.get(this.tableBooksBodyId).find('div').eq(index).should(shouldMatcher, bookTitle)
    }

}

export const bookStorePage = new BookStorePage()