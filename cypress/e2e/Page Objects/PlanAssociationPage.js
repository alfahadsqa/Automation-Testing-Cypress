class PlanAssociation 
{

    ClickOnPlanAssociation()
    {
        cy.xpath("//a[normalize-space()='Plan Association']").should('be.visible').click({force: true});  //Plan Association btn
         
        
    }

    VerifyPlanAssociation()
    {
        cy.get('h2').should('have.text','Plan Association') //Plan Association headind text
        cy.get('.f14').should('have.text','Show closed investments') //Show closed investments text
        cy.get('#pn_id_51').should('exist'); //Plan table
        cy.get('#pn_id_51') //Plan table
        .then (item =>{
            expect(item[0]).to.contain.text('PlanID')
            expect(item[0]).to.contain.text(' Plan Name')
            expect(item[0]).to.contain.text(' Plan Investment Name')
            expect(item[0]).to.contain.text('Open Date')
            expect(item[0]).to.contain.text('Close Date')
        })

        cy.get('.p-dropdown-trigger').should('be.visible').click({force: true}) //dropdown 
        cy.get(':nth-child(3) > .p-ripple').click() //dropdown list 50
        cy.xpath("//th[normalize-space()='Plan Name']").click() //plan name sorting
        cy.wait(1000)
        cy.xpath("//th[normalize-space()='Plan Name']").click() //plan name sorting
        cy.xpath("//th[normalize-space()='PlanID']").dblclick()  //plan ID sorting
        cy.xpath("//th[normalize-space()='Open Date']").dblclick() //Open Date sorting
        cy.xpath("//span[@class='p-inputswitch-slider']").should('be.visible').click() //Show closed button
       
    }

}

export default PlanAssociation
