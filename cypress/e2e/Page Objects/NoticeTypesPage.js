
class NoticeTypes
{

    MainMenuBtn = "//span[@class='jdsi-function']"
    SearchBtn = "//input[@placeholder='Looking for...']"
    NoticeTypesBtn = "//h4[normalize-space()='Notice Types']"

    MainMenu()
    {
        cy.xpath(this.MainMenuBtn).should('be.visible').click()
    }

    SearchBox(text)
    {
        cy.xpath(this.SearchBtn).should('be.visible').type(text)
    }

    NoticeTypesText()
    {
        cy.xpath(this.NoticeTypesBtn).should('be.visible').click()
    }

    Filter()
    {
        cy.xpath("//a[@title='Name Filter Menu']//span[@class='k-icon k-i-filter']").click()
        cy.xpath("//kendo-grid-string-filter-menu-input[1]//kendo-grid-filter-menu-input-wrapper[1]//input[1]").type('test')
        cy.xpath("//button[@type='submit']").click()
    }

    Sorting()
    {
        cy.xpath("//th[@class='k-header k-filterable k-touch-action-none k-grid-draggable-header ng-star-inserted k-state-focused']//span[@class='k-link']").click()
        cy.xpath("//th[@class='k-header k-filterable k-touch-action-none k-grid-draggable-header ng-star-inserted k-state-focused']//span[@class='k-link']").click()
        cy.xpath("//th[@class='k-header k-filterable k-touch-action-none k-grid-draggable-header ng-star-inserted k-state-focused']//span[@class='k-link']").click()
    }
    

}
export default NoticeTypes