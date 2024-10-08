class TradingFees 
{

    ClickOnTradingFees()
    {
        cy.get(':nth-child(4) > a').should('be.visible').click({force: true});  //Trading Fees btn
        
    }

    // VerifyTradingFees()
    // {

    //     //verifying with the disable Trading Fees
    //     cy.get('trading-redemption-fee-view > .rk-card').should('exist'); //Trading Fees dom
    //     cy.xpath("//a[@class='rk-btn rk-btn-edit']//i[@class='pi pi-pencil']").click(); //Trading Fees edit button
    //     cy.xpath("//label[@for='redemptionFees']").should('have.text','This investment has redemption fees'); //redemption text
    //     cy.get(':nth-child(1) > .p-element > .p-checkbox > .p-checkbox-box > .p-checkbox-icon').click({force: true}); //redemption checkbox
    //     cy.xpath("//span[normalize-space()='Save']").should('be.visible').click()
    //     cy.xpath("//a[@title='Add Fee Rules']").should('not.exist') //edit fee rules button
    //     cy.xpath("//span[normalize-space()='Add Gate']")//add gate button 

    //     //verifying with the enable TradingFees
    //     cy.get('trading-redemption-fee-view > .rk-card').should('exist'); //Trading Fees dom
    //     cy.xpath("//a[@class='rk-btn rk-btn-edit']//i[@class='pi pi-pencil']").click(); //Trading Fees edit button
    //     cy.xpath("//label[@for='redemptionFees']").should('have.text','This investment has redemption fees'); //redemption text
    //     cy.get(':nth-child(1) > .p-element > .p-checkbox > .p-checkbox-box > .p-checkbox-icon').click({force: true}); //redemption checkbox
    //     cy.xpath("//span[normalize-space()='Save']").should('be.visible').click()
    //     cy.xpath("//a[@title='Add Fee Rules']").should('not.be.disabled'); //edit fee rules button
    //     cy.xpath("//span[normalize-space()='Add Gate']").should('not.be.disabled'); //add gate button
        
    // }

    // VerifyFeeRules() 
    // {

    //     //enabling trading fees
    //     cy.xpath("//a[@class='rk-btn rk-btn-edit']//i[@class='pi pi-pencil']").click(); //Trading Fees edit button
    //     cy.xpath("//label[@for='redemptionFees']").should('have.text','This investment has redemption fees'); //redemption text
    //     cy.get(':nth-child(1) > .p-element > .p-checkbox > .p-checkbox-box > .p-checkbox-icon').click({force: true}); //redemption checkbox
    //     cy.xpath("//span[normalize-space()='Save']").should('be.visible').click() //save button

    //     //Fee rules
    //     cy.xpath("//i[@class='pi pi-plus']").click()
    //     cy.wait(1000)
    //     cy.get('.p-dialog-content')  // verifying add fee rules fields
    //     .then (item =>{
    //         expect(item[0]).to.contain.text('Do not include date of trade in holding period')
    //         expect(item[0]).to.contain.text('Holding Period Duration')
    //         expect(item[0]).to.contain.text('Fee applies to transactions posted on or after')
    //         expect(item[0]).to.contain.text('Hold period applies to shares purchased on or after')
    //         expect(item[0]).to.contain.text('Minimum threshold in order to assess fee',{force: true})
            
    //     })
    //     //cy.get('#applyToTransactionsAsOf > .p-calendar > .p-inputtext').clear({force: true}).type('12/13/2023') //Fee applies to transactions date
    //     cy.xpath("//button[@type='submit']").should('be.visible').click() //submit button

    //     //Add tier functionality
    //     cy.xpath("//span[normalize-space()='Add Tier']").should('be.visible').click() //submit button
    //     cy.get('.p-dialog-content')  // verifying add fee tier fields
    //     .then (item =>{
    //         expect(item[0]).to.contain.text('Fee')
    //         expect(item[0]).to.contain.text('Business Days')
            
    //     })
    //     cy.get('#holdPeriodUnits > .p-inputnumber > .p-inputtext').type('30') //Business Days
    //     cy.xpath("//span[normalize-space()='Save']").should('be.visible').click() //save button

    //     //Edit tier functionality
    //     cy.xpath("//span[@class='pi pi-pencil p-button-icon ng-star-inserted']").should('be.visible').click() //edit button
    //     cy.get('#holdPeriodUnits > .p-inputnumber > .p-inputtext').clear({force: true}).type('25') //Business Days
    //     cy.xpath("//span[normalize-space()='Update']").should('be.visible').click() //update button

    //     //Delete tier functionality
    //     cy.get('[icon="pi pi-trash"] > .p-ripple > .pi').as('btn').click() //delete button
    //     cy.get('.p-confirm-dialog-message').should('have.text','Do you want to delete this record?') //Delete Confirmation msg
    //     cy.xpath("//span[normalize-space()='No']").should('be.visible').click() //No button
    //     cy.xpath("//span[normalize-space()='Yes']").should('be.visible').click() // yes button


    // }

}

export default TradingFees 