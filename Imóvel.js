class Imóvel{
    Endereco
    Cep
    Area
    QuantidadeDeBanheiros
    QuantidadeDeQuartos
    QuantidadesDePessoas = []
    Valor

    constructor(endereco, cep, area, quantidadeDeBanheiros, quantidadadeDeQuartos, valor){
        this.Endereco = endereco
        this.Cep = cep
        this.Area = area
        this.QuantidadeDeBanheiros = quantidadeDeBanheiros
        this.QuantidadeDeQuartos = quantidadadeDeQuartos
        this.Valor = valor
    }

    AdicionarPessoa(pessoa){
        this.QuantidadesDePessoas.push(pessoa)
    }

    RemoverMorador(pessoa){
        let index = this.QuantidadesDePessoas.indexOf(pessoa)
        this.QuantidadesDePessoas.splice(index)
    }
}

class Pessoa{
    Nome
    Cpf
    DataNascimento

    constructor(nome, cpf, dataNascimento){
        this.Nome = nome
        this.Cpf = cpf
        this.DataNascimento = dataNascimento
    }
   
}

class Casa extends Imóvel{
    ComQuintal

    constructor(endereco, cep, area, quantidadeDeBanheiros, quantidadadeDeQuartos, valor, comQuintal){
        super(endereco, cep, area, quantidadeDeBanheiros, quantidadadeDeQuartos)
        this.ComQuintal = comQuintal
        this.Valor = this.CalcularValor(valor)
    } 

    CalcularValor(valor){
        if(this.ComQuintal){
            return valor * 1.3
        }
            return valor
    }

}

class Apartamento extends Imóvel{
    Andar
    ValorCondominio

    constructor(endereco, cep, area, quantidadeDeBanheiros, quantidadadeDeQuartos, valor, andar, valorCondominio){
        super(endereco, cep, area, quantidadeDeBanheiros, quantidadadeDeQuartos)
        this.Andar = andar
        this.ValorCondominio = valorCondominio
        this.Valor = this.CalcularValor(valor)

    }

    CalcularValor(valor){
        return valor + this.ValorCondominio
    }
}

class Kitnet extends Imóvel{
    constructor(endereco, cep, area, quantidadeDeBanheiros, quantidadadeDeQuartos, valor){
        super(endereco, cep, area, quantidadeDeBanheiros, quantidadadeDeQuartos)
        this.Valor = this.CalcularValor(valor)    
    }

    CalcularValor(valor){
        return valor
    }
}

let casa = new Casa("Rua zero", "04855220", 100, 2, 6, 20000, false)
let apartamentoUm = new Apartamento("Rua zero", "04855220", 100, 1, 2, 70000, 8, 1500)

// let nome = prompt(`Qual o nome?`)
// let cpf = prompt(`Qual o cpf?`)
// let dataNascimento = prompt(`Qual a data de nascimento?`)
// let pessoaUm = new Pessoa(nome, cpf, dataNascimento)
let pessoaUm = new Pessoa("Marcos", "44455544455", "21/10/1994")
let pessoaDois = new Pessoa("Junior", "44455522255", "04/05/1994")
casa.AdicionarPessoa(pessoaUm)
casa.AdicionarPessoa(pessoaDois)
casa.RemoverMorador(pessoaDois)



function ValidarBanheiros(quantParametro, tipo){
    switch (tipo) {
        case "K":
            if(quantParametro > 2)
            console.log(`Quantidade de quartos inválida para Kitnet!`)
            break;
        case "A":
            if(quantParametro > 3)
            console.log(`Quantidade de quartos inválida para Apartamento!`)
            beak;
        case "C":
            if(quantParametro > 5)
            console.log(`Quantidade de quartos inválida para Casa!`)
            break;
    }

}



