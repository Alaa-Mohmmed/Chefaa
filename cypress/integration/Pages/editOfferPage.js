class editOfferPage
{
    viewDetails()
    { 
        const menu = cy.get('.toggle-list > .fa')
        menu.click({ force: true })
        cy.wait(1000)
        const myOffer= cy.get(':nth-child(2) > a')
        myOffer.click({ force: true })
        cy.wait(3000)
        const arrow=cy.get(':nth-child(1) > a > .row > .col-md-1.col-6 > .order-details-link > .fa')
        arrow.click({ force: true })
    }
    editOffer()
    {
        const btn =cy.get('.offers-edit > .btn')
        btn.click({ force:true })
    }
    editNameEng(value)
    {
        const titleEng=cy.get('#product-title-en')
        titleEng.clear()
        titleEng.type(value)
        
    }
    editNameAr(value)
    {
        const titleAr=cy.get('#product-title-ar')
        titleAr.clear()
        titleAr.type(value)
        
    }
    editPrice(value)
    {
        const price=cy.get('#product-price')
        price.clear()
        price.type(value)
        
    }
    descAr(value)
    {
        const descAr=cy.get(':nth-child(1) > .quillWrapper > #quill-container > .ql-editor > p')
        descAr.clear()
        descAr.type(value)
        
    }
    descEng(value)
    {
        const decsEn=cy.get(':nth-child(2) > .quillWrapper > #quill-container > .ql-editor > p')
        decsEn.clear()
        decsEn.type(value)
       
    }
    submitOffer()
    {
       const btn= cy.get('.form-controls-btn > .btn')
       btn.click({force: true})
    }
    // validation()
    // {
    //     cy.wait(3000)
    //     cy.visit("https://pharmacy.chefaa.com/offers")
    // }
   


}
export default editOfferPage