import Login from "../Page Objects/LoginPage"
import Methods from "../Utilities/CommonMethods"
import InvestmentList from "../Page Objects/InvestmentListPage"
import transactions from "../Page Objects/TransactionsPage"

describe('Investment List POM' , () =>{
    it.only('Investment List Test', () => {

        const InvestmentListPage = new InvestmentList();
        const HomePage = new Login();
        const Page = new Methods();
        const TransactionsPage = new transactions();
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
        TransactionsPage.ClickOnTransactionsBtn()
        Page.Wait()
        TransactionsPage.ClickOnAddTransactionsBtn()
        TransactionsPage.ClickOnAddStockSplitBtn()
        TransactionsPage.TestStockSplitProcess()
       
    })

    })    