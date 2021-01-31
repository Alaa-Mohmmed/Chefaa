class addBankPage
{
    viewDetails()
    { 
         const menu = cy.get('.toggle-list > .fa')
        menu.click({ force: true })
        cy.wait(1000)
        const bank= cy.get('.list-unstyled > :nth-child(3) > a')
        bank.click({ force: true })
        cy.wait(1000)
        const btn=cy.get('.btn')
        btn.click({ force: true })
    }
    setAccountName(value)
    {
        const name= cy.get('#account-name')
        name.clear
        name.type(value)
        return this
    }
    setBankName(value)
    {
        const Bname= cy.get('#bank-name')
        Bname.clear
        Bname.type(value)
        return this
    }
    setBankBranch(value)
    {
        const bankB= cy.get('#banl-branch')
        bankB.clear
        bankB.type(value)
        return this
    }
    setAccountNumber(value)
    {
        const accountNum= cy.get('#account-num')
        accountNum.clear
        accountNum.type(value)
        return this
    }
    
    submitBtn()
    {
     const btn= cy.get('.btn')
        btn.click()
 
    }

}
export default addBankPage