describe('template spec', () => {
    it('create new vacancy', () => {
        cy.fixture('createNewVacancy').then(data => {
            cy.viewport(1920, 1080)
            cy.log('Посещение сайта')
            cy.visit(data.main_url)

            cy.log('Нажатие на кнопку авторизации')
            cy.contains('button', 'Авторизация').click()

            cy.log('Ввод данных в форму')
            cy.get('.form-input--text')
                .type(data.employer_login)
            cy.get('.form-input--password')
                .type(data.password)
            cy.get(':nth-child(3) > .button').click()
            cy.wait(1000)

            cy.log('Переход к потребностям')
            cy.get(':nth-child(6) > .menu-item__item-name').click()

            cy.log('Переход к созданию потребности')
            cy.get('.needs-block__filters-wrapper > .button').click()

            cy.log('Ввод данных для создания потребности')
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(1) > .form-control--responsive > .form-input--text')
                .type(data.title)
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(3) > .form-control > .form-area')
                .type(data.duties)
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > :nth-child(1) > .form__labels > .labels > :nth-child(4) > .form-control > .form-area')
                .type(data.requirements)

            cy.log('Создание потребности')
            cy.get('.desktop-modal__content > .vacancy-need-wrapper > .form > .form__buttons > .button').click()
        })
    })
})