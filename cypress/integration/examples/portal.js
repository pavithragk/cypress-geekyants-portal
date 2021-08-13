describe('Login', () => {
    it('Login through Google', () => {

        const socialLoginOptions = {

            username: 'tester@geekyants.com',
            password: 'Goldtree@99',
            loginUrl: 'http://geekyants-login.geekydev.com/#',
            headless: false,
            loginSelector: '.custom-btn',
            logs: true,
            isPopup: false,

        }

        return cy.task('GoogleSocialLogin', socialLoginOptions).then(({ cookies }) => {
            cy.clearCookies()
            console.log(cookies)

        })
    })
})
