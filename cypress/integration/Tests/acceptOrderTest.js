import mainPage from '../Pages/mainPage' 
import loginPage from '../Pages/loginPage'
import loginTest from '../Tests/loginTest'
import acceptOrderPage from '../Pages/acceptOrderPage'

describe('Test pharmacy accept order in the main page', function() {
    
    before(() => {
       cy.restoreLocalStorageCache();
      cy.wait(3000)
     
      });
    it('test Accept order' , function()
    {
       let testOrder = new acceptOrderPage()
       testOrder.viewDetails()
       testOrder.acceptOrder()
    })
     
    }) 