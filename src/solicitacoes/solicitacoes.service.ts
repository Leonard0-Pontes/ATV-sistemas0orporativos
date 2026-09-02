import { Injectable, NotFoundException } from '@nestjs/common';

type StatusSolicitacao = 'pendente' | 'aprovada';

type Solicitacao = {
  id: number;
  titulo: string;
  status: StatusSolicitacao;
};

@Injectable()
export class SolicitacoesService {
  private readonly solicitacoes: Solicitacao[] = [
    { id: 1, titulo: 'Aquisição de notebook', status: 'pendente' },
  ];

  buscarPorId(id: number) {
    const solicitacao = this.solicitacoes.find((item) => item.id === id);

    if (!solicitacao) {
      throw new NotFoundException('Solicitação não encontrada');
    }

    return solicitacao;
  }

  relatorio() {
  const porStatus = this.solicitacoes.reduce(
    (resultado, solicitacao) => {
      resultado[solicitacao.status] =
        (resultado[solicitacao.status] ?? 0) + 1;

      return resultado;
    },
    {} as Record<StatusSolicitacao, number>,
  );

  return {
    total: this.solicitacoes.length,
    porStatus,
  };
  }
  aprovar(id: number) {
    const solicitacao = this.buscarPorId(id);
    solicitacao.status = 'aprovada';
    return solicitacao;
  }
}