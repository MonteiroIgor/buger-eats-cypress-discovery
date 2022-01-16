var faker = require('faker')
var cpf =  require('gerador-validador-cpf')

export default {
    deliver: function() {

        var firstName = faker.name.firstName()
        var lasName = faker.name.lastName()
        
        var data = {
                name: `${firstName} ${lasName}`,
                cpf: cpf.generate(),
                email: faker.internet.email(firstName),
                whatsapp: '11999999999',
                address: {
                    cep: '58075671',
                    street: 'Rua Platiny Barbosa dos Santos',
                    number: '92',
                    details: 'casa', 
                    district: 'Ernesto Geisel',
                    city_uf: 'João Pessoa/PB'
                },
                delivery_method: 'Moto',
                cnh: 'cnh-digital.jpg'
        }

        return data
    }

}