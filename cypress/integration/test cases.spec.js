/// <reference types="cypress-xpath" />
/// <reference path="..\..\node_modules\cypress-xpath\src\index.d.ts" />

describe('cypress-xpath', () => {
    context('Test Cases', ()=>{
    beforeEach(() =>{
        cy.visit('https://skillsmatch.mdx.ac.uk/en/')
        cy.xpath("//input[@id='username']").type('team14')
        cy.xpath("//input[@id='password']").type('team@14')
        cy.get('.btn').click()
        })

        

        const keyword1 = "software"
        const keyword2 = "java"
        const keyword3 = "Python"
        const course = "Java Programming Masterclass covering Java 11 & Java 17"
 
        require("cypress-xpath");
        
        it("Search", () => {
            //this test case make a normal search opreation
         
            cy.xpath(`//*[@id="navbarSupportedContent"]/ul[1]/li[3]/a`).click()
            cy.xpath('//*[@test-data="AdvancedOptions"]').click()
            
            cy.get(`.tagify__input`).type('software').type('{enter}')
            cy.xpath(`//*[@test-data="searchButton"]`).click()
            cy.xpath('//*[@test-data="searchItem_1"]//child::a[@target="_blank"]')
            cy.visit(`https://skillsmatch.mdx.ac.uk/en/course/5795?keywords=python`)
            cy.xpath('//div[@class="container"]//child::div[9]').invoke("text").then(tempvar => {
                var temp = (tempvar.match(/software/img) || []).length;
                
                if (temp != 9) {
                    throw Error("Number of not appear in the page")
                }
                cy.log("The number of mathced: ", temp)
            })
        
        })
       
        
   
 

    it("Search by keyword", () => {
       
        // go to requierd page
        cy.xpath(`//*[@id="navbarSupportedContent"]/ul[1]/li[3]/a`).click()
        cy.xpath('//*[@test-data="AdvancedOptions"]').click()
    
      //Serach by keywords    
        cy.get(`.tagify__input`).type(`${keyword1}`).type('{enter}')
    
        cy.get(`.tagify__input`).type(`${keyword2}`).type('{enter}')
        cy.xpath('//*[@test-data="match_all"]').click()
        cy.xpath(`//*[@test-data="searchButton"]`).click()
        cy.xpath('//div[@id="search-result"]').children().each((elem) => {
            cy.get(elem).find('span[test-data="MatchedKeywords"]').should('contain', 'software').and('contain', 'java')
        })
    
    })
    it("Course Title", () => {
     
        cy.xpath(`//*[@id="navbarSupportedContent"]/ul[1]/li[3]/a`).click()
        cy.xpath('//*[@test-data="AdvancedOptions"]').click()
    
        cy.get(`.tagify__input`).type(`${course}`).type('{enter}')
       
        cy.xpath("//label[@for='search_in_title']").click()
        // Search in the title of the course
        
        cy.xpath(`//*[@test-data="searchButton"]`).click()
        cy.xpath('//div[@id="search-result"]').children().each((elem) => {
        cy.xpath('//div[@id="search-result"]').children().each((elem) => {
        cy.get('#search-result [test-data*=searchItem').each((elem)=>
        {
            cy.wrap(elem).should("contain","Java Programming Masterclass covering Java 11 & Java 17")
        })                
        })
    
    })
})
       
    })
})
   



