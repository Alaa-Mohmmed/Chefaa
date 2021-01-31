import mainPage from '../Pages/mainPage' 
import loginPage from '../Pages/loginPage'
import loginTest from '../Tests/loginTest'
import viewOfferPage from '../Pages/viewOfferPage';


describe('Test pharmacy offers', function() {
    
    beforeEach(() => {
        cy.restoreLocalStorageCache();
        cy.wait(3000)
      });

    it('test view offer page details' , function()
    {
        let testView = new viewOfferPage()
        testView.viewDetails()
       
    })
    it('Activate / Pause offer', function()
    {
        let testEdit = new viewOfferPage()
        testEdit.offerStatus()
        
    })

  

    }) 