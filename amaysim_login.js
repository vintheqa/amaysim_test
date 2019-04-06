const assert = require('assert');

describe('amaysim login', () => {
    it('Tests logging in to an amaysim account', () => {
        browser.url('https://amaysim.com.au');
        const loginBtn = $('=Login');
		loginBtn.waitForExist(30000);
		loginBtn.click();
		const userName = $('#username');
		const psWord = $('#password');
		userName.waitForExist(30000);
		psWord.waitForExist(30000);
		userName.setValue('0468340754');
		psWord.setValue('theHoff34');
		const loginBtn2 = $('.arrow-next');
		loginBtn2.click();
		const loggedUser = $('.service-primary-heading');
		loggedUser.waitForExist(30000);
        assert.equal(loggedUser.getText(), "0468 340 754");
    });
});
