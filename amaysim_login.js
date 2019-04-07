const assert = require('assert');

describe('amaysim login', () => {
    it('Checks logging in to amaysim account', () => {
        	browser.url('https://amaysim.com.au');
       		const loginBtn = $('=Login');
		loginBtn.waitForExist(30000);
		browser.saveScreenshot('./Screenshots/001-Amaysim_login/screenshot01.png');
		loginBtn.click();
		const userName = $('#username');
		const psWord = $('#password');
		userName.waitForExist(30000);
		psWord.waitForExist(30000);
		userName.setValue('0468340754');
		psWord.setValue('theHoff34');
		browser.saveScreenshot('./Screenshots/001-Amaysim_login/screenshot02.png');
		const loginBtn2 = $('.arrow-next');
		loginBtn2.click();
		const loggedUser = $('.service-primary-heading');
		loggedUser.waitForExist(30000);
        	assert.equal(loggedUser.getText(), "0468 340 754");
		browser.saveScreenshot('./Screenshots/001-Amaysim_login/screenshot03.png')
    });
});
