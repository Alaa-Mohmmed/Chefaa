class addOfferPage
{
    addOffer()
    {
        const menu = cy.get('.toggle-list > .fa')
        menu.click({ force: true })
        cy.wait(1000)
        const myOffer= cy.get(':nth-child(2) > a')
        myOffer.click({ force: true })
        cy.wait(3000)
       const addBtn= cy.get('.btn')
       addBtn.click({ force: true })
    }

    addImage()
    { 
        cy.wait(1000)
        const uploadImg = 'nivea-body-milk-250ml_1.webp';
       cy.get('#images').attachFile(uploadImg);
    }

    addNameEng(value)
    {
        const titleEng=cy.get('#product-title-en')
        titleEng.clear()
        titleEng.type(value)
        return this
    }
    addNameAr(value)
    {
        const titleAr=cy.get('#product-title-ar')
        titleAr.clear()
        titleAr.type(value)
        return this
    }
    addPrice(value)
    {
        const price=cy.get('#product-price')
        price.clear()
        price.type(value)
        return this
    }
    discountBtn()
    {
        cy.get('#cache').check( {force: true})
    }
    discountValue(value)
    {
        const disc=cy.get('#cash-discount')
        disc.clear()
        disc.type(value)
        return this
    }
    descAr(value)
    {
        const descAr=cy.get(':nth-child(1) > .quillWrapper > #quill-container > .ql-editor > p')
        descAr.clear()
        descAr.type(value)
        return this
    }
    descEng(value)
    {
        const decsEn=cy.get(':nth-child(2) > .quillWrapper > #quill-container > .ql-editor > p')
        decsEn.clear()
        decsEn.type(value)
        return this
    }
   productQty(value)
    {
        const qty=cy.get('#product-quantity')
        qty.clear()
        qty.type(value)
        return this
    }
    productCat()
    {
        const category= cy.get('#product-category')
        category.click({force: true})
        const choose =cy.get('.subcategory > ul > :nth-child(2) > a')
        choose.click( {force: true} )
        const btn =cy.get('#subcategory_modal')
        btn.click({force: true})
       
    }

    productBrand()
    {
        const category= cy.get(':nth-child(8) > .fa')
        category.click({force: true})
        const choose =cy.get('[src="https://chefaa.com/public/uploads/brands/AdWkNrqfIOlINyUd67k9igfaAnHxsPNQa5lguEdx.png"]')
        choose.click( {force: true} )
        cy.scrollTo(3000)   // Scroll 'sidebar' to its bottom
        const cat = cy.get('.modal-content > .modal-footer > #brands_btn')
        cat.click( {force: true} )
        cy.wait(1000)
       
    }
    addLocation()
    {
        cy.wait(1000)
        const location= cy.get('.col-6 > .fa')
        location.click({force: true})
        const choose =cy.get('#inlineCheckbox784')
        choose.click( {force: true} )
        const cat = cy.get('form > .modal-footer > #brands_btn')
        cat.click( {force: true} )
        cy.wait(1000)
        cy.get('#subcategory-modal').click({force: true})
        cy.get('#brands-modal').click({force: true})
    }
    submitOffer()
    {
       const btn= cy.get('.form-controls-btn > .btn')
       btn.click({force: true})
    }
    validation()
    {
        cy.wait(3000)
        cy.visit("https://pharmacy.chefaa.com/offers")
    }

}
export default addOfferPage