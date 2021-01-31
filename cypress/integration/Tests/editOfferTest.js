import mainPage from '../Pages/mainPage' 
import loginPage from '../Pages/loginPage'
import loginTest from '../Tests/loginTest'
import viewOfferPage from '../Pages/viewOfferPage';
import editOfferPage from '../Pages/editOfferPage';


describe('Test pharmacy edit offers', function() {
    
    beforeEach(() => {
        cy.restoreLocalStorageCache();
        cy.wait(3000)
      });

    it('test view offer page details' , function()
    {
        let edit = new editOfferPage()
        edit.viewDetails()
        edit.editOffer()
        edit.editNameEng("La Roche Posay")
        edit.editNameAr("لاروش بوزيه")
        edit.editPrice("300")
        edit.descAr("لاروش بوزاى، ايفاكلار، H كريم مرطب للبشرة الدهنية، 40مل")
        edit.descEng("La Roche Posay, Effaclar, H Moisturizing Cream, 40ml")
        edit.submitOffer()
       // edit.validation()

    })
})