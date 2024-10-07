class Overview

{
    CLickOnTicker()
    {
        cy.wait(1000)
        cy.xpath("//a[normalize-space()='VTSAX']").click() //click on VTSAX ticker
        cy.wait(3000)
        cy.xpath("//a[@class='active']").should('have.text','Overview') //overview menu
    }

    VerifyGeneralInformation()
    {
        cy.xpath("//h2[normalize-space()='General Information']").should('have.text','General Information') //h1 text
        
        cy.get('app-investment-general > .rk-card').should('exist')
        cy.xpath("//app-investment-general//i[@class='pi pi-pencil']").click() //clicking edit button
        cy.wait(3000)
        cy.get('.p-dialog-content') //verifying table fields
        .then (item =>{
          expect(item[0]).to.contain.text('Short Name', 'Vanguard Total Stock Mkt Idx Adm')
          expect(item[0]).to.contain.text('Legal Name', 'Vanguard Total Stock Market Index Fund Admiral Shares')
          expect(item[0]).to.contain.text('Manager')
          expect(item[0]).to.contain.text('Fact Sheet Url')
          expect(item[0]).to.contain.text('Category')
          expect(item[0]).to.contain.text('Category Source')
          expect(item[0]).to.contain.text('Share Class')
          expect(item[0]).to.contain.text('Asset Class')
          expect(item[0]).to.contain.text('Investment Type')
          expect(item[0]).to.contain.text('Morningstar Rating')
          expect(item[0]).to.contain.text('Primary Benchmark')
          expect(item[0]).to.contain.text('Morningstar Rating')
          expect(item[0]).to.contain.text('Cancel')
          expect(item[0]).to.contain.text('Save')
        
        })
        cy.xpath("//input[@formcontrolname='shareClass']").clear().type('Test Class')
        cy.xpath("//span[normalize-space()='Cancel']").should('be.visible')
        cy.xpath("//button[@type='submit']").should('be.visible').click()
        cy.get('.p-toast-detail').should('contain', 'Updated Successfully!')

    }
    VerifyTrailingReturns()
    {
      
      cy.xpath("//h2[normalize-space()='Trailing Returns']").should('be.visible')//Trailing Returns text
      cy.get('app-investment-trailing-return > .rk-card').should('exist') //Trailing Returns full
      //Add Trailing Return  
      cy.xpath("//app-investment-trailing-return//i[@class='pi pi-plus']").should('exist').click() //add button
      cy.xpath("//span[@class='p-button-icon pi pi-calendar']").should('be.visible').click() //calendar button
      cy.wait(2000)
      cy.xpath("//span[normalize-space()='Dec']").click() //selecting a month
      cy.get(':nth-child(5) > .col > .input-area > .p-inputtext').clear().type(25) //Trailing Return 1 Year
      cy.xpath("//span[normalize-space()='Cancel']").should('be.visible')
      cy.xpath("//button[@type='submit']").should('be.visible').click()
      cy.xpath("//span[@class='p-button-icon pi pi-calendar']").click()
      cy.wait(2000)
      cy.get('.p-datepicker-prev-icon').click()
      cy.get('.p-datepicker-prev-icon').click()
      cy.xpath("//span[normalize-space()='Dec']").click()
      cy.xpath("//button[@type='submit']").should('be.visible').click()
      cy.xpath("//span[normalize-space()='Cancel']").click()
      //Edit Trailing Return
      cy.wait(1000);
      cy.xpath("//app-investment-trailing-return//a[@title='Edit']").should('be.visible').click() //edit button
      cy.get(':nth-child(5) > .col > .input-area > .p-inputtext').clear().type(50)
      cy.xpath("//button[@type='submit']").should('be.visible').click()
      cy.xpath("//span[@class='pi pi-times p-button-icon p-button-icon-left ng-star-inserted']").click()
      
      
      
    }






}
export default Overview