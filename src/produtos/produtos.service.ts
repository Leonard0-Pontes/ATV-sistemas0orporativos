import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';

type Produto = {
    id: number;
    nome: string;
    categoria: string;
    preco: number;
    ativo: boolean;
};

@Injectable()
export class ProdutosService {
    private produtos: Produto[] = [
        {id: 1, nome: 'Notebook', categoria: 'Eletrônicos', 
            preco: 2500, ativo: true},
        {id: 2, nome: 'Smartphone', categoria: 'Eletrônicos', 
            preco: 1500, ativo: true},    
        {id: 3, nome: 'Curso NestJS', categoria: 'Educação', 
            preco: 300, ativo: true}        
    ];

    listarTodos(){
        return this.produtos;
    }
    
    listarPorCategoria(categoria: string, limite?: number){
        let resultado = [...this.produtos];

        if(categoria){
            resultado = resultado.filter((p) => p.categoria === categoria);
        }

        if(limite && limite > 0){
            resultado = resultado.slice(0, limite);
        }

        return resultado;
    }

    buscarPorId(id: number){
        const produto  = this.produtos.find((p) => p.id === id);

        return produto;
    }

    criar(dados: CreateProdutoDto){ 
        const novoId = 
            this.produtos.length > 0 
                ? Math.max(...this.produtos.map((p) => p.id)) + 1
                : 1;

        const novoProduto : Produto = {id: novoId, ...dados};   
        this.produtos.push(novoProduto);
        
        return novoProduto;
    }

    atualizarCompleto(id: number, dados: CreateProdutoDto) {
        const indice = this.produtos.findIndex((p) => p.id === id);

        if(indice === -1){
            throw new Error('Produto não encontrado');
        }

        const atualizado : Produto = {id, ...dados};
        this.produtos[indice] = atualizado;

        return atualizado;
    }

    atualizarParcial(id: number, dados: UpdateProdutoDto) {
        const produto = this.buscarPorId(id);
        
        if(!produto){
            throw new Error('Produto não encontrado');
        }

        const atualizado : Produto = {...produto, ...dados};
        this.produtos = this.produtos.map((p) => p.id === id ? atualizado : p);

        return atualizado;
    }

    remover(id: number){
        const existe = this.produtos.some((p) => p.id === id);

        if(!existe){
            throw new NotFoundException('Produto não encontrado');
        }

        this.produtos = this.produtos.filter((p) => p.id !== id);        
        return {mensagem: `Produto com Id ${id} removido com sucesso`};
    }
}
