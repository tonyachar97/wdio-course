import HomePage from '../pages/home-page.js';

describe('Home', () => {
    it('Open URL & assert title', async() => {
        // We need to use the async function with await command to ensure commands are executed step by step 
        //Open URL
       // await browser.url('https://practice.sdetunicorns.com/');

/* HOOKS
before(async() =>{
  console.log('THIS COULD BE USED FOR TEST SETUP');

  await HomePage.open();
})
beforeEach(async() =>{
    console.log('THIS COULD BE USED BEFORE EACH TEST');
    })
after(async() =>{
    console.log('THIS COULD BE USED FOR TEST CLEANUP');
})
afterEach(async() =>{
    console.log('THIS RUNS AFTER EACH TEST');
})

 */
        await HomePage.open();   // using page object model 

        // Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');

    });

//Open URL and assert URL

    it('Open About Page & assert URL', async() => {
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/about');
        //Assert URL
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/about/');
    });

//Verifying a certain text in the URL is displayed when get started button is selected

it('Click get started button and assert url contains get-started text', async() => {
    //Open Home Page
    await HomePage.open();

    //Click get started button ($ goes ahead and finds specific element )
    //await $('#get-started').click();
    await HomePage.btnGetStarted.click();


    // Assert url contains get-started text
    await expect(browser).toHaveUrlContaining('get-started');

});

it('Click logo button and assert url does not contain get-started text', async() => {
    //Open Home Page
    await HomePage.open();

    //Click logo button ($ goes ahead and finds specific element )
    //await $('//img[@alt="Practice E-Commerce Site"]').click();
    await HomePage.imageLogo.click();


    // Assert url does not contain get-started text
    await expect(browser).not.toHaveUrlContaining('get-started');

});

it('Find heading element & assert the text', async() => {
    //Open Home Page
    await HomePage.open();

    //Find heading element )
    //const headingEl = await $('.elementor-widget-container h1');
    const headingEl = await HomePage.txtHeading;

    //Get the text
    const headingText = await headingEl.getText();


    // Assert the text(getText() - for text manipulation, toHaveText()-to validate the exact text from element)
    await expect(headingText).toEqual('Think different. Make different.'); //Jest library 
    //await expect(headingEl).toHaveText('Think different. Make different.') //wdio expect This option gets the 
    //text directly from the element and checking if it matches

});

});

//wdio expect assertions:
// Advantages
//    1. Built in
//    2. Built in wait & retry capabilities e.g toHaveText retries multiple times before failing vs toEqual 