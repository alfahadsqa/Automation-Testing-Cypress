import NoticeTypes from "../Page Objects/NoticeTypesPage";
import Login from "../Page Objects/LoginPage";
import Methods from "../Utilities/CommonMethods";

describe('Notice Types Page' , () =>{
    it.only('Notice Types Page Test', () => {

        cy.visit("http://unifytest.julyservices.local/Unify.V2.Web/login")

            const NoticeTypePage = new NoticeTypes();
            const page = new Methods()
            const HomePage = new Login();
            HomePage.SetUserName("aafahad")
            HomePage.SetPassword("123");
            HomePage.ClickLogIn()
            page.Wait()
            HomePage.VerifyLogIn()

         
            NoticeTypePage.MainMenu()
            NoticeTypePage.SearchBox("Notice Types")
            page.Wait()
            NoticeTypePage.NoticeTypesText()
            page.Wait()
            NoticeTypePage.verifyTable()
            NoticeTypePage.VerifyFilter()
            page.Wait()
            NoticeTypePage.VerifySorting()
            NoticeTypePage.verifyRefreshBtn()
            NoticeTypePage.verifyExcelBtn()
            page.Wait()
            NoticeTypePage.verifyAddBtn()
        })
    }) 