class Portfolio 

{
    ClickOnPortfolio()
    {
        cy.xpath("//a[normalize-space()='Test 1']").as('btn').click() //test 1 ticker
        cy.xpath("//a[normalize-space()='Portfolio']").should('be.visible').click({force: true});  //Portfolio btn
         
        
    }

    VerifyProtfolio()
    {
        cy.get('.page-sub-title > .flex > h2').should('have.text', 'Portfolio'); //protfolio h1
        cy.get('portfolio-classification-view > .rk-card') //protfolio feilds
        .then (item =>{
            expect(item[0]).to.contain.text('Portfolio Risk Category')
            expect(item[0]).to.contain.text('Portfolio Style')
        })

        cy.get('.rk-btn').should('be.visible').click({force: true});  //Portfolio edit btn
        cy.get('.p-dialog-title').should('have.text', 'Portfolio Classification'); //protfolio edit h1
        cy.get(':nth-child(1) > .input-area > .p-inputwrapper > .p-dropdown > .p-dropdown-trigger').click() //Portfolio Risk Category dropdown
        cy.xpath("//span[@class='ng-star-inserted'][normalize-space()='Aggressive']").click() //select aggressive
        cy.get('.mt-2 > .input-area > .p-inputwrapper > .p-dropdown > .p-dropdown-trigger').click() //Portfolio Style dropdown
        cy.xpath("//span[@class='ng-star-inserted'][normalize-space()='Tactical']").click() //select tactical
        cy.xpath("//span[normalize-space()='Cancel']").should('be.visible') //cancel btn
        cy.xpath("//button[@type='submit']").should('be.visible').click() //cancel btn
        cy.get('.p-toast-detail').should('have.text', 'Updated Successfully!') //after save massege
        
    }

    VerifyProtfolioVersion()
    {
        cy.get('.portfolio-version').should('exist') //ProtfolioVersion dom
        cy.xpath("//span[normalize-space()='Add New Version']").should('be.visible').click() //Add new Version btn
        cy.wait(2000)
        cy.get('.p-dialog-title').should('have.text', 'Add Portfolio Allocation') //Add Portfolio Allocation text
        cy.get('.p-dialog-content')
        .then (item =>{
            expect(item[0]).to.contain.text('Effective Date')
            expect(item[0]).to.contain.text('Close Date')
            expect(item[0]).to.contain.text('Ticker')
            expect(item[0]).to.contain.text('Investment Name')
            expect(item[0]).to.contain.text('Percentage')
            expect(item[0]).to.contain.text('Total')
        })
        cy.wait(1000)
        cy.xpath("//span[normalize-space()='Add']").click() //add button
        cy.xpath("//a[normalize-space()='VFIAX']").click() //select ticker
        cy.xpath("//tbody/tr[4]/td[4]/p-button[1]/button[1]/span[1]").click() //delete added ticker
        cy.xpath("//span[normalize-space()='Save']").should('be.visible').click() //save btn
        cy.get('.p-toast-detail').should('have.text', 'Portfolio created successfully') //Add Portfolio Allocation success massege
        
        //Effective table 
        cy.wait(1000)
        cy.get('investment-version-detail > .rk-card') //Effective table 
        .then (item =>{

            expect(item[0]).to.contain.text('Ticker')
            expect(item[0]).to.contain.text('Investment Name')
            expect(item[0]).to.contain.text('Asset Class')
            expect(item[0]).to.contain.text('Morningstar Category ')
            expect(item[0]).to.contain.text('Allocation')
        })

        cy.xpath("//th[normalize-space()='Investment Name']").dblclick(); //investment name sorting
        cy.xpath("//div[@class='p-checkbox-box']").should('be.visible').click() //Show closed investments btn

        //delete Protfolio Version
        cy.xpath("//li[1]//div[1]//div[1]//a[1]//i[1]").click() //edit button
        cy.xpath("//span[normalize-space()='Delete']").click() //delete button
        cy.get('.p-toast-detail').should('have.text', 'Portfolio deleted successfully') //Add Portfolio Allocation success massege
        
    }

}

export default Portfolio