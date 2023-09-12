import Login from "../Page Objects/LoginPage"
import Methods from "../Utilities/CommonMethods"
import InvestmentList from "../Page Objects/InvestmentListPage"
describe('Investment List POM' , () =>{
    it.only('Investment List Test', () => {

        const InvestmentListPage = new InvestmentList();
        const HomePage = new Login();
        const Page = new Methods();
        Page.OpenBaseUrl()

        cy.fixture('LogInData').then((data)  => {
            //verfying with valid username and valid password
            HomePage.SetUserName(data.username)
            HomePage.SetPassword(data.password);
            HomePage.ClickLogIn()
            HomePage.VerifyLogIn()
            Page.Wait() 


            })

        InvestmentListPage.VerifyNavigation()
        Page.Wait()
        InvestmentListPage.VerifyInvestmentListBtn()
        Page.Wait()
        InvestmentListPage.VerifyTickerSearch()
        InvestmentListPage.VerifyInvesmentNameSearch()
        Page.Reload() 
        Page.Wait()
        InvestmentListPage.VerifySorting()
        InvestmentListPage.VerifyEntriesNumberDropdown()
        InvestmentListPage.VerifyNextPage()
        InvestmentListPage.VerifyRefreshBtn()
        InvestmentListPage.VerifyExcelBtn()
        Page.Wait()
        InvestmentListPage.VerifyAddBtn()   

        })
       
       

    })       
