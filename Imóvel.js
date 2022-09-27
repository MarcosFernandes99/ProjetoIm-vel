class Imóvel{
    Endereco
    Cep
    Area
    QuantidadeDeBanheiros
    QuantidadeDeQuartos
    QuantidadesDePessoas
    Valor

    constructor(endereco, cep, area, quantidadeDeBanheiros, quantidadadeDeQuartos, quantidadeDePessoas, valor){
        this.Endereco = endereco
        this.Cep = cep
        this.Area = area
        this.QuantidadeDeBanheiros = quantidadeDeBanheiros
        this.QuantidadeDeQuartos = quantidadadeDeQuartos
        this.QuantidadesDePessoas = quantidadeDePessoas
        this.Valor = valor
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

    constructor(endereco, cep, area, quantidadeDeBanheiros, quantidadadeDeQuartos, quantidadeDePessoas, valor, comQuintal){
        super(endereco, cep, area, quantidadeDeBanheiros, quantidadadeDeQuartos, quantidadeDePessoas, valor)
        this.ComQuintal = comQuintal
    }    

}

class Apartamento extends Imóvel{
    Andar
    ValorCondominio

    constructor(endereco, cep, area, quantidadeDeBanheiros, quantidadadeDeQuartos, quantidadeDePessoas, valor, andar, valorCondominio){
        super(endereco, cep, area, quantidadeDeBanheiros, quantidadadeDeQuartos, quantidadeDePessoas, valor)
        this.Andar = andar
        this.ValorCondominio = valorCondominio

    }
}