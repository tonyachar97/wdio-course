import HomePage from '../pages/home-page.js';


describe('Navigation Menu', () => {
    it('Get the text of all menu items & assert them', async() => {
        //Open URL
        //await browser.url('/');  //forward slash will go to base url in the configuration settings
        await HomePage.open();
$
        const expectedLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account",
        ];


        const actualLinks = [];


        // Individual elements $, Multiple elements $$
       // const navLinks = await $('#zak-primary-menu').$$('li'); Finds one element then elements inside that 
        //const navLinks = await $$('#zak-primary-menu li');  //if you know the elements you want you can use double $$
        const navLinks = await HomePage.NavComponent.linksNavMenu;


        for (const link of navLinks){
            actualLinks.push(await link.getText());
        }

        
    /**
     * push(...items: T[]): number;
     * Combines two or more arrays.
     * This method returns a new array without modifying any existing arrays.
     * @param items Additional arrays and/or items to add to the end of the array.
     */

        await expect (expectedLinks).toEqual(actualLinks);

    });
});