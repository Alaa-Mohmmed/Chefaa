import mainPage from '../Pages/mainPage' 
import loginPage from '../Pages/loginPage'
import loginTest from '../Tests/loginTest'
import viewOfferPage from '../Pages/viewOfferPage';
import addOfferPage from '../Pages/addOfferPage';


describe('Test Add offers page ', function() {
    
    beforeEach(() => {
        cy.restoreLocalStorageCache();
        cy.wait(3000)
      });

    it('Add Offer' , function()
    {
      //console.log();
        let testAddOffer = new addOfferPage()
        testAddOffer.addOffer()
        testAddOffer.addImage()
        testAddOffer.addNameAr("نيڤيا")
        testAddOffer.addNameEng("Nivea")
        testAddOffer.addPrice("200")
        testAddOffer.discountBtn()
        testAddOffer.discountValue("50")
        testAddOffer.descAr("لوشن الجسم المغذي بالزيت من نيفيا - للبشرة الجافة - 400 مل")
        testAddOffer.descEng("Nivea Almond Oil Nourishing Body Lotion - For Dry Skin - 400 Ml")
        testAddOffer.productQty("100")
        testAddOffer.productCat()
        testAddOffer.productBrand()
        testAddOffer.addLocation()
        testAddOffer.submitOffer()
        testAddOffer.validation()



    })

    }) 