
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

    VerifyFilter()
    {
        cy.xpath("//a[@title='Name Filter Menu']//span[@class='k-icon k-i-filter']").should('be.visible').click()
        cy.xpath("//kendo-grid-string-filter-menu-input[1]//kendo-grid-filter-menu-input-wrapper[1]//input[1]").should('be.visible').type('test')
        cy.xpath("//button[@type='submit']").should('be.visible').click()
        cy.xpath("//i[@class='jdsi-cleanup']").should('be.visible').click()
    }

    VerifySorting()
    {
        cy.xpath("/html/body/app-root/app-main-container-layout/div/section/app-notice-type-worklist/generic-grid/div/div[2]/kendo-grid/div/div/div/table/thead/tr/th[1]/span[1]/span[1]").click()
        cy.xpath("/html/body/app-root/app-main-container-layout/div/section/app-notice-type-worklist/generic-grid/div/div[2]/kendo-grid/div/div/div/table/thead/tr/th[1]/span[1]/span[1]").click()
        cy.xpath("/html/body/app-root/app-main-container-layout/div/section/app-notice-type-worklist/generic-grid/div/div[2]/kendo-grid/div/div/div/table/thead/tr/th[1]/span[1]/span[1]").click()
    }
    verifyRefreshBtn()
    {
       cy.xpath("//i[@class='jdsi-refrash']").should('be.visible').click() 
    }
    verifyTable()
    {
        cy.xpath("/html/body/app-root/app-main-container-layout/div/section/app-notice-type-worklist/generic-grid/div/div[2]/kendo-grid/kendo-pager/kendo-pager-info").should('have.text', '1 - 50 of 51 items')
    }
    verifyExcelBtn()
    {
       cy.xpath("//span[@class='k-icon k-i-file-excel']").should('be.visible').click() 
       cy.xpath("//button[@title='Export to Excel - All Pages']").should('be.visible').click() 
    }
    verifyAddBtn()
    {
    cy.xpath("//i[@class='jdsi-plus-solid']").should('be.visible').click() 
      //Verify Add notice type with null value
      cy.get('.buttons-group > :nth-child(2) > .jds-btn').should('be.visible')
      cy.get('.buttons-group > :nth-child(2) > .jds-btn').click()
      // verifying alert message for null value
      cy.get('.mat-dialog-content > .mb-15').should('have.text', 'WARNING: Please enter required data.')
      cy.get('.grid > .ng-star-inserted > .jds-btn').click()

    //Verify Add notice type with only one mandatory feild
      cy.get('#mat-input-0').type('Test - 011')
      cy.get('.buttons-group > :nth-child(2) > .jds-btn').click()
      // verifying alert message for not filling all mandatory feilds (filled only Notice Name )
      cy.get('.mat-dialog-content > .mb-15').should('have.text', 'WARNING: Please enter required data.')
      cy.get('.grid > .ng-star-inserted > .jds-btn').click()

   //Verify Add notice type with only Two mandatory feilds
      cy.get('#mat-input-0').clear()
      cy.get('#mat-input-0').type('Test - 011')
      cy.get('#mat-select-value-1').click() 
      cy.get('#mat-option-0 > .mat-option-text').click()
      cy.get('.buttons-group > :nth-child(2) > .jds-btn').click()
      // verifying alert message for not filling all mandatory feilds (filled only Notice Name and frequncy )
      cy.get('.mat-dialog-content > .mb-15').should('have.text', 'WARNING: Please enter required data.')
      cy.get('.grid > .ng-star-inserted > .jds-btn').click()

  //Verify Add notice type with All mandatory feilds for creating notice type successfully
      cy.get('#mat-input-0').clear()
      cy.get('#mat-input-0').type('Test - 011')
      cy.get('#mat-select-value-1').click()
      cy.get('#mat-option-0 > .mat-option-text').click()
      cy.get('#mat-select-value-3').click()
      cy.get('#mat-option-2 > .mat-option-text').click()
      cy.get('.buttons-group > :nth-child(2) > .jds-btn').click()
      cy.get('.mat-simple-snack-bar-content').should('have.text', 'Successfully Created.')

  //Verify update Notice type
      cy.get('[data-kendo-grid-item-index="0"] > [data-kendo-grid-column-index="0"] > .ng-star-inserted > span').click()
      cy.get('#mat-input-3').should('be.visible').type('updated')
      cy.get('.buttons-group > :nth-child(2) > .jds-btn').click()
      cy.get('.mat-simple-snack-bar-content').should('have.text', 'Successfully Updated.')

  // //Verify Delete Notice type
      cy.get('[data-kendo-grid-item-index="0"] > [data-kendo-grid-column-index="0"] > .ng-star-inserted > span').click()
      cy.get('.lh-btn-small > a').should('be.visible').click()
      cy.get('.btn-active').should('be.visible').click()
      cy.get('.mat-simple-snack-bar-content').should('have.text', 'Successfully Deleted.')

    }
    

}
export default NoticeTypes