describe('first project' , () =>{
    beforeEach(() => {
        
        // Verifying LogIn Page
       cy.visit("http://unifytest.julyservices.local/Unify.V2.Web/login")
       cy.get(':nth-child(4) > .input-login').should('be.visible').type('aafahad')
       cy.get(':nth-child(5) > .input-login').should('be.visible').type('123')
       cy.xpath("//button[@type='submit']").should('be.visible')
       cy.xpath("//button[@type='submit']").click()
      

    })

    it('Notice types Test', () => {
        cy.xpath("//span[@class='jdsi-function']").click()
        cy.get('.search-fields').type('notice types')
        cy.xpath("//li[normalize-space()='Settings / Documents & Reports / Notice Types']").click()
        cy.wait(2000)
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

        //Verify filters and all the special buttons
            cy.xpath("//a[@title='Frequency Filter Menu']//span[@class='k-icon k-i-filter']").click()
            cy.xpath("//input[@id='chk-Ad Hoc']").click()
            cy.xpath("//button[@type='submit']").click()
            cy.get('[title="Clear filters"]').click()
            cy.get('[tabindex="0"] > .k-cell-inner > .k-link').click()
            cy.get('[tabindex="0"] > .k-cell-inner > .k-link').click()
            cy.get('[tabindex="0"] > .k-cell-inner > .k-link').click()
            cy.get('.jdsi-refrash').should('be.visible').click()
            cy.get('.k-button').should('be.visible').click()
            cy.get('[title="Export to Excel - All Pages"]').should('be.visible').click()


    })

    
})