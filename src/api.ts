const conta = {
    email: 'helder.daniel7@outlook.pt',
    password: '7777',
    name: 'Hélder Daniel',
    balance: 2000.00,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 3000)
})
