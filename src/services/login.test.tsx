import { login } from "./login"

describe('login', () => {

    const mockEmail = 'helder.daniel7@outlook.pt'
    const mockPasswd = 'codificar7';
    it('Deve exibir um alert com boas vindas caso o email seja válido', async() => {
        const response = await login(mockEmail,mockPasswd)
        expect(response).toBeTruthy()
    })

    it('Deve exibir um erro caso o email seja inválido', async() => {
        const response = await login('email@invalido.com','hfsjhsa')
        expect(response).toBeFalsy()
    })
})