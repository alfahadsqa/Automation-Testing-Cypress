class RKConfiguration
{

    ClickOnRKConfiguration()
    {
        cy.xpath("//a[normalize-space()='RK Configuration']").should('be.visible').click({force: true}); //price history btn
        
    }

    VerifyGeneralSettings()
    {
        cy.get('app-rk-general-settings-view > .rk-card').should('exist'); //General Settings dom
        cy.xpath("//div[@class='flex-grow-0 w-30rem']//i[@class='pi pi-pencil']").should('be.visible').click({force: true}) // Edit General Settings btn
        cy.wait(2000);
        cy.get('.p-dialog-content')  // verifying Edit General Settings fields
        .then (item =>{
            expect(item[0]).to.contain.text('Precision')
            expect(item[0]).to.contain.text('Dividend Type')
            
        })

        cy.xpath("//input[@class='p-inputtext p-component p-element p-inputnumber-input p-filled']").clear().type('3')
        cy.get('.ng-untouched > #dividendType').click({force: true}) //Dividend Type dropdown
        cy.wait(2000);
        cy.xpath("//span[@class='ng-star-inserted'][normalize-space()='Periodic']").click({force: true})
        cy.xpath("//span[@class='pi pi-check p-button-icon p-button-icon-left ng-star-inserted']").click({force: true}) //save btn
        cy.get('.p-toast-detail').should('have.text','Updated Successfully!')
        

    }

    VerifyTargetRetirement()
    {
        cy.get('app-rk-target-retirement-view > .rk-card').should('exist'); //Target Retirement dom
        cy.xpath("//div[@class='flex-grow-1']//i[@class='pi pi-pencil']").click({force: true}) //Target Retirement edit btn
        cy.xpath("//h1[@class='modal-title ng-star-inserted']").should('have.text', ' Target Retirement ');
        cy.wait(2000);
        cy.get('.p-dialog-content')  // verifying Edit Target Retirement fields
        .then (item =>{
            expect(item[0]).to.contain.text('Target From Date')
            expect(item[0]).to.contain.text('Target To Date')
            expect(item[0]).to.contain.text('From Age')
            expect(item[0]).to.contain.text('To Age')
            
        })

        cy.get('.p-checkbox-icon').click({force: true}) //Target date checkbox
        cy.get("form > div:nth-of-type(2) > div:nth-of-type(1) svg").click({force: true}) //Target From Date button
        
        cy.xpath("//span[normalize-space()='11']").click({force: true})
        cy.xpath("//div[@class='p-checkbox-box']").should('be.visible').click({force: true})
        cy.xpath("//span[normalize-space()='Cancel']").should('be.visible') //cancel btn
        cy.xpath("//span[normalize-space()='Save']").should('be.visible').click({force: true}) //save button  
                                                                                                                                                                                                 
    }

    VerifyTradeRestrictions()
    {
        cy.get('app-rk-trade-restrictions-view > .rk-card').should('exist'); //Trade Restrictions dom
        cy.xpath("//app-rk-trade-restrictions-view//i[@class='pi pi-pencil']").should('be.visible').click() //edit Trade Restrictions 
        cy.wait(2000);
        cy.get('.p-dialog-content')  // verifying Edit Target Retirement fields
        .then (item =>{
            expect(item[0]).to.contain.text('Use Trade Restrictions')
            expect(item[0]).to.contain.text('Apply restriction when investment is part of a model')
            expect(item[0]).to.contain.text('Restrictions become effective on')
            expect(item[0]).to.contain.text('Minimum transaction amount for applying restrictions')
            expect(item[0]).to.contain.text('Minimum transaction units for applying restrictions')
            expect(item[0]).to.contain.text('Round trip is defined as:')
            expect(item[0]).to.contain.text('Days between a transfer out followed by a transfer in')
            expect(item[0]).to.contain.text('Days between a transfer in followed by a transfer out')
            
        })

    
        cy.get(':nth-child(2) > .p-element > .p-checkbox > .p-checkbox-box').click() //Apply restriction when investment is part of a model checkbox
        cy.get('.calendar-sm > .p-ripple').click() //Restrictions become effective on date
        cy.get("tr:nth-of-type(3) > td:nth-of-type(3) > span").click();
        cy.get(':nth-child(4) > .input-area > .p-inputwrapper > .p-inputnumber > .p-inputtext').clear().type("100") //transaction amount
        cy.get(':nth-child(5) > .input-area > .p-inputwrapper > .p-inputnumber > .p-inputtext').clear().type("100") //transaction units
        cy.xpath("//div[@class='p-radiobutton-box']").click() //transfer in checkbox
        cy.xpath("//span[normalize-space()='Cancel']").should('be.visible')  //cancel btn
        cy.xpath("//span[normalize-space()='Save']").should('be.visible').click()  //save btn
        cy.get('.p-toast-detail').should('have.text','Updated Successfully!') //success msg
        cy.get('#pn_id_68').should('exist') //add rule tabe dom

        //Add role functionality
        cy.xpath("//span[normalize-space()='Add Rule']").should('be.visible').click()
        cy.wait(2000);
        cy.get('.p-dialog-content')  // verifying Add role fields
        .then (item =>{
            expect(item[0]).to.contain.text('Occurrence')
            expect(item[0]).to.contain.text('Days Between Events')
            expect(item[0]).to.contain.text('Action on Failure')
            expect(item[0]).to.contain.text('Days to Block Transfers')
            
        })

        //adding role
        cy.get('.p-dropdown-trigger').click() //Action on Failure 
        cy.wait(1000);
        cy.get('#pn_id_77_0 > .ng-star-inserted').click() //selecting Warn individual
        cy.xpath("//span[normalize-space()='Save']").click(); //save btn
        //cy.get('.p-toast-detail').should('have.text','Updated Successfully!')
        
        //deleting role
        cy.get('#pn_id_68-table > .p-element > :nth-child(1) > :nth-child(1)').click();
        cy.get('.p-element.ng-star-inserted > .p-ripple').click(); //delete button
        cy.get("button.p-confirm-dialog-accept > span").click(); //delete yes button 
        //cy.get('.p-toast-detail').should('have.text','Deleted Successfully!')

        //adding role to enable Days to Block Transfers
        cy.xpath("//span[normalize-space()='Add Rule']").should('be.visible').click() //add role btn
        cy.get('.p-dropdown-trigger').click() //Action on Failure 
        cy.get(':nth-child(3) > .p-ripple').click() //selecting Block future transfers
        cy.get(':nth-child(4) > .input-area > .p-inputwrapper > .p-inputnumber > .p-inputtext') //Days to Block Transfers
        .should('be.enabled')
        .type('5');
        cy.xpath("//span[normalize-space()='Save']").click(); //save btn
        cy.get('.p-toast-detail').should('have.text','Created Successfully!')

    }



}
export default RKConfiguration