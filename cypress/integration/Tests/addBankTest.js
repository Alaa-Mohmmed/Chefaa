import mainPage from '../Pages/mainPage' 
import loginPage from '../Pages/loginPage'
import loginTest from '../Tests/loginTest'
import viewOfferPage from '../Pages/viewOfferPage';
import addOfferPage from '../Pages/addOfferPage';
import addBankPage from '../Pages/addBankPage' ;

describe('Test Add account page ', function() {
    
    beforeEach(() => {
        cy.restoreLocalStorageCache();
        cy.wait(3000)
      });

    it('Add bank account' , function()
    {
        let testBank= new addBankPage()
        testBank.viewDetails()
        testBank.setAccountName("Alaa Account Test")
        testBank.setBankName("Al Ahly Bank")
        testBank.setBankBranch("Al Qahira")
        testBank.setAccountNumber("1234567890")
        testBank.submitBtn()
        
       



    })

    }) 