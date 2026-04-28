class Veiculo{
    // atributos
    marca;
    modelo;
    ano;

    //métodos
    exibirInfo(){
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Ano: ${this.ano}`);
    }
}

// exemplo de uso
const meuCarro = new Veiculo();
meuCarro.marca = "Toyota";
meuCarro.modelo = "Corolla";
meuCarro.ano = 2020;

console.log("\nInformações do meu carro:\n");
meuCarro.exibirInfo();

class Carro extends Veiculo{
    //atributo adicional
    quantidadePortas;

    //método sobrescrito
    exibirInfo(){
        super.exibirInfo(); // chama o método da classe pai
        console.log(`Quantidade de Portas: ${this.quantidadePortas}`);
    }
}

// exemplo de uso da subclasse
const meuCarro2 = new Carro();
meuCarro2.marca = "Honda";
meuCarro2.modelo = "Civic";
meuCarro2.ano = 2021;
meuCarro2.quantidadePortas = 4;

console.log("\nInformações do meu segundo carro:\n");
meuCarro2.exibirInfo();