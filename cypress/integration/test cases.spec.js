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
      
        it('Search by reviews',()=>{
            //Sort based on user reviews
            cy.xpath("//a[normalize-space()='Search']").click()
            cy.xpath("//span[@role='textbox']").type('Java')
            cy.xpath('//*[@test-data="AdvancedOptions"]').click()
            cy.xpath('//*[@test-data="sort_by_user_reviews"]').click()
        cy.xpath(`//*[@test-data="searchButton"]`).click()
        var count = "";
        let listOfRate = []
        for (let i = 1; i <= 10; i++) {
            cy.xpath('//*[@test-data="searchItem_' + i + '"]//child::div[contains(@test-data,"UserFeedback")]').find('*[class]').then(element => {
                count = 0;
                for (let j = 0; j < 5; j++) {
                    if (element.[j].classList.[0]) {
                        count++;
                    }
                }
                if (!element.[4].classList.[0]) {
                    count = 0;
                }
                listOfRate[i - 1] = count
            })
        }
        cy.then(() => {
            var counter = 1
            for (let i = 0; i <= 10; i++) {
                if (listOfRate[i] >= listOfRate[i + 1]) {
                    counter++;
                }
                else if (listOfRate[i] < listOfRate[i + 1]) {
                    counter--;
                }
            }
            if (counter == 10) {
                cy.log("Succesfull")
            }
        })
        })
        it("Translate", () => {
            
            cy.xpath(`//*[@id="navbarSupportedContent"]/ul[1]/li[3]/a`).click()
            cy.xpath('//*[@test-data="AdvancedOptions"]').click()
            //Using translate option
            const arabic="جافا"
            cy.get(`.tagify__input`).type(`${arabic}`).type('{enter}')
            cy.xpath('//*[@test-data="translateInput"]').select('en')
            cy.xpath(`//*[@test-data="searchButton"]`).click()
            cy.xpath('//div[@id="search-result"]').children().each((elem) => {
            cy.get(elem).find('span[test-data="MatchedKeywords"]').should('contain', 'java')
            })
             
        })
        // this test case for update my skills and check its score and rates
        it('Update',()=>{
            cy.xpath("//a[@href='/en/profile/']").click()
            cy.xpath("//a[@role='button'][normalize-space()='Update my skills']").click()
            cy.xpath("//a[normalize-space()='Start']").click()
            cy.xpath("//input[@id='6']").click()
            cy.xpath("//input[@test-data='NextStep']").click()
            cy.xpath("//input[@id='11']").click()
            cy.xpath("//input[@id='17']").click()
            cy.xpath("//input[@id='22']").click()
            cy.xpath("//input[@id='28']").click()   
            cy.get('[style="display: block; opacity: 1;"] > .next').click()
            cy.xpath("//input[@id='33']").click()
            cy.xpath("//input[@id='38']").click()
            cy.xpath("//input[@id='43']").click()
            cy.get('[style="display: block; opacity: 1;"] > .next').click()
            cy.xpath("//input[@id='46']").click()
            cy.xpath("//input[@id='51']").click()
            cy.xpath("//input[@id='58']").click()
            cy.xpath("//input[@id='62']").click()
            cy.get('[style="display: block; opacity: 1;"] > .next').click()
            cy.xpath("//input[@id='65']").click()
            cy.xpath("//input[@id='69']").click()
            cy.xpath("//input[@id='74']").click()
            cy.get('[style="display: block; opacity: 1;"] > .next').click()
            cy.xpath("//input[@id='82']").click()
            cy.xpath("//input[@id='87']").click()
            cy.xpath("//input[@id='92']").click()
            cy.get('[style="display: block; opacity: 1;"] > .next').click()
            cy.xpath("//input[@id='95']").click()
            cy.xpath("//input[@id='103']").click()
            cy.xpath("//input[@id='108']").click()
            cy.xpath("//input[@id='112']").click()
            cy.xpath("//input[@id='117']").click()
            cy.get('[style="display: block; opacity: 1;"] > .next').click()
            cy.xpath("//input[@id='119']").click()
            cy.xpath("//input[@id='122']").click()
            cy.xpath("//input[@id='135']").click()
            cy.get('[style="display: block; opacity: 1;"] > .next').click()
            cy.xpath(`.//*[@test-data="area_1_Scor"]`).contains('(8/16)')
            cy.xpath('//div[contains(@test-data,"area_1_myscore")]//child::label[contains(@test-data,"filledStar")]').should('have.length',2 )
    
            cy.xpath(`.//*[@test-data="area_2_Scor"]`).contains('(12/12)')
            cy.xpath('//div[contains(@test-data,"area_2_myscore")]//child::label[contains(@test-data,"filledStar")]').should('have.length',5 )
    
    
            cy.xpath(`.//*[@test-data="area_3_Scor"]`).contains('11/16)')
            cy.xpath('//div[contains(@test-data,"area_3_myscore")]//child::label[contains(@test-data,"filledStar")]').should('have.length',3 )
    
            cy.xpath(`.//*[@test-data="area_4_Scor"]`).contains('(1/12)')
            cy.xpath('//div[contains(@test-data,"area_4_myscore")]//child::label[contains(@test-data,"filledStar")]').should('have.length',0 )
    
            cy.xpath(`.//*[@test-data="area_5_Scor"]`).contains('(9/12)')
            cy.xpath('//div[contains(@test-data,"area_5_myscore")]//child::label[contains(@test-data,"filledStar")]').should('have.length',4 )
    
            cy.xpath(`.//*[@test-data="area_6_Scor"]`).contains('(15/20)')
            cy.xpath('//div[contains(@test-data,"area_6_myscore")]//child::label[contains(@test-data,"filledStar")]').should('have.length',4 )
    
           
          
          })
        })
    })
        })
        
    })
})

    })

    
})