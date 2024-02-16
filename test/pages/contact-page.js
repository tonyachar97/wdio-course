class ContactPage{

    open(){
        return browser.url('/contact');
    }

    get ContactName(){
        return $('.contact-name input');
    }

    get ContactEmail(){
        return $('.contact-email input');
    }

    get ContactPhone(){
        return $('.contact-phone input');
    }

    get ContactMessage(){
        return $('.contact-message textarea');
    }

    get SubmitButton(){
        return $('button[type=submit]');
    }

    get SuccessAlert(){
        return $("[role='alert']");
    }

    async submitForm(name,email,phone,message){
        await this.ContactName.addValue(name);
        await this.ContactEmail.addValue(email);
        await this.ContactPhone.addValue(phone);
        await this.ContactMessage.addValue(message);
        await this.SubmitButton.click();
    }

}

export default new ContactPage();