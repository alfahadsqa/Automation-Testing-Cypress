class Methods
{   
    OpenBaseUrl()
    {
        //cy.visit("http://testbear.julyservices.local:8080/auth/login")
        cy.visit("https://test-unifyrk-gateway.azurewebsites.net/auth/login")
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