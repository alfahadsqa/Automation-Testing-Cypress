class Methods
{   
    OpenBaseUrl()
    {
        cy.visit("http://unifytest.julyservices.local/Unify.V2.Web/login")
    }
    Wait()
    {
        cy.wait(3000)
    }

    Reload()
    {
        cy.reload()
    }
    NavigateBack()
    {
        cy.go('back')
    }

    


}

export default Methods