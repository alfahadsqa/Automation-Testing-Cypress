class PriceHistory
{

    ClickOnPriceHistory()
    {
        cy.xpath("//a[normalize-space()='Price History']").should('be.visible').click({force: true}); //price history btn
        
    }

    VerifyDividendAccrual()
    {
        cy.get('.flex-grow-0 > .rk-card').should('exist') //Dividend Accrual dom
    }

    VerifyChart()
    {
        cy.get('.flex-grow-1 > .rk-card').should('be.visible'); //chart dom 
        //clicking 1m
        cy.xpath("//a[normalize-space()='1M']").should('be.visible').click({force: true}); //1m
        //clicking 3m
        cy.xpath("//a[normalize-space()='3M']").should('be.visible').click({force: true}); //3m
        //clicking 1y
        cy.xpath("//a[normalize-space()='1Y']").should('be.visible').click({force: true}); //1y
        //clicking 5y
        cy.xpath("//a[normalize-space()='5Y']").should('be.visible').click({force: true}); //5y
        
    }

    
    
    VerifyPriceHistory()
    {

        cy.get('app-investment-price-history-list > :nth-child(1) > :nth-child(3)').should('exist') //Price History dom
        cy.xpath("//h3[normalize-space()='Price History']").should('have.text', 'Price History') //Price History h1
        cy.get(':nth-child(2) > .p-inputwrapper > .p-calendar > .p-inputtext').clear({force: true}).type('08/15/2023') //1st calender
        cy.get(':nth-child(4) > .p-inputwrapper > .p-calendar > .p-inputtext').clear({force: true}).type('09/14/2023') //2st calender
        cy.xpath("//span[normalize-space()='Search']").should('be.visible'); //search btn
    }

    VerifyRefreshBtn() 
    {
        cy.xpath("//span[@class='pi pi-refresh p-button-icon ng-star-inserted']").should('be.visible').click({force: true}); //price history refresh btn
    }

    VerifyAddBtn() 
    {
        cy.xpath("//span[@class='dp-plus-xl p-button-icon ng-star-inserted']").should('be.visible').click({force: true}); //price history add btn
        cy.get('.p-dialog-content') //Add Price History Detail DOM
        .then (item =>{
            expect(item[0]).to.contain.text('Price Date')
            expect(item[0]).to.contain.text('Price')
            expect(item[0]).to.contain.text('Dividend Accrual Rate')
            expect(item[0]).to.contain.text('Data Source')
        })

        cy.xpath("//input[@id='price']").clear().type('50') //price
        cy.get('.p-dropdown-label').click({force : true}); //Data Source
        cy.xpath("//li[@aria-label='Mid Atlantic Trust Company Link']").click({force : true}); //Mid Atlantic Trust Company Link
        cy.xpath("//span[normalize-space()='Cancel']").should('be.visible') //cancel btn
        cy.xpath("//span[normalize-space()='Save']").click({force : true}) //save btn

        //delete price history
        cy.get('.p-element > :nth-child(1) > :nth-child(1) > a').click() //added item
        cy.get('.grid > :nth-child(1) > .p-element.ng-star-inserted > .p-ripple').click()  //delete button
        cy.get('.p-confirm-dialog-accept').click() //yes button
        

    }

    VerifyExcelBtn()
    {
        cy.xpath("//span[@class='pi pi-file-export p-button-icon ng-star-inserted']").should('be.visible').click({force: true}); //price history excel btn
    }
}   

export default PriceHistory