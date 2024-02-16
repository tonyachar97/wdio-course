import ContactPage from "../pages/contact-page.js";
import { faker } from '@faker-js/faker';


describe('Contact', () => {
    it('Fill all the input fields, submit form and assert success message', async() => {
        //Open URL
       // await browser.url('/contact');  //forward slash will go to base url in the configuration settings
        await ContactPage.open();
        //Fill out the input fields & click submit

        // addValue - add text in to the input field 
        //setValue - clears any text and then adds text into field 
            //clearValue
            //addValue 

      /*  await $('.contact-name input').addValue('Tony Achar');
        await $('.contact-email input').addValue('adjkajsd@gmail.com');
        await $('.contact-phone input').addValue('8593848984343');
        await $('.contact-message textarea').addValue('Hello I am HIM');
        await $('button[type=submit]').click();
        */
       // await ContactPage.submitForm('Test Name','test@mail.com','21211212','This is a test message');
        await ContactPage.submitForm(faker.person.fullName(),faker.internet.email(),faker.phone.number(),faker.lorem.paragraphs(2));
        
        //Assert success message 
        //const successAlert = $("[role='alert']");
        const successAlert = ContactPage.SuccessAlert;
        await expect(successAlert).toHaveTextContaining('Thanks for contacting us! We will be in touch with you shortly');

    });
});