import NoticeTypes from "../Page Objects/NoticeTypesPage";
import Login from "../Page Objects/LoginPage";
import Methods from "../Utilities/CommonMethods";

describe('Notice Types Page' , () =>{
    it.only('Notice Types Page Test', () => {

        cy.visit("http://unifytest.julyservices.local/Unify.V2.Web/login")

        cy.fixture('LogInData').then((data)  => {
            const HomePage = new Login();
            HomePage.SetUserName(data.username)
            HomePage.SetPassword(data.password);
            HomePage.ClickLogIn()
            HomePage.VerifyLogIn()

            })
            const NoticeTypePage = new NoticeTypes();
            const page = new Methods()
            NoticeTypePage.MainMenu()
            NoticeTypePage.SearchBox("Notice Types")
            NoticeTypePage.NoticeTypesText()
            page.Wait()
            cy.xpath("//kendo-pager-info[@class='ng-star-inserted k-pager-info k-label']").should('have.text', '1 - 41 of 41 items')
            NoticeTypePage.Filter()
            NoticeTypePage.Sorting()
        })
    }) 