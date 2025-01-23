class Methods
{   
    OpenBaseUrl()
    {
        
        cy.visit("https:MainURL/auth/login")
    }
    Wait()
    {
        cy.wait(3000)
    }

    Reload()
    {
        cy.reload()
    }


}

export default Methods
