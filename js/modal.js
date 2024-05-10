document.addEventListener('DOMContentLoaded', () => {
    const LANG = 'TR'

    const modalError = {
        RU: [
            {
                title: 'Неверный номер телефон',
                description:
                    'Программа не поддерживается в вашем регионе. Введите Ваш корректный номер.',
            },
        ],
        EN: [
            {
                title: 'Invalid phone number',
                description:
                    'The program is not supported in your region. Please enter your correct number.',
            },
        ],
        PL: [
            {
                title: 'Nieprawidłowy numer telefonu',
                description: 'Program nie jest obsługiwany w Twoim regionie. Podaj poprawny numer.',
            },
        ],
        ES: [
            {
                title: 'Número de teléfono no válido',
                description:
                    'El programa no es compatible con su región. Por favor, introduzca su número correcto.',
            },
        ],
        CZ: [
            {
                title: 'Neplatné telefonní číslo',
                description:
                    'Program není podporován ve vaší oblasti. Zadejte prosím správné číslo.',
            },
        ],
        TR: [
            {
                title: 'Geçersiz telefon numarası',
                description: 'Program bölgenizde desteklenmiyor. Lütfen doğru numaranızı giriniz.',
            },
        ],
    }

    const ModalPhoneErrorTitle = document.querySelector('.modal-title_phone')
    const ModalPhoneErorrDescription = document.querySelector('.modal-body_phone')

    if (ModalPhoneErrorTitle) {
        ModalPhoneErrorTitle.innerHTML = modalError[LANG][0].title
    }

    if (ModalPhoneErorrDescription) {
        ModalPhoneErorrDescription.innerHTML = modalError[LANG][0].description
    }
})
