import { Injectable } from '@nestjs/common';

export type Papel = 'solicitante' | 'gestor' | 'auditor';

export type Usuario = {
  id: number;
  nome: string;
  email: string;
  senhaHash: string;
  papel: Papel;
  ativo: boolean;
};

export type UsuarioAutenticado = Omit<Usuario, 'senhaHash'>;

@Injectable()
export class UsuariosService {
  private readonly usuarios: Usuario[] = [
    {
      id: 1,
      nome: 'Ana Lima',
      email: 'ana@empresa.com',
      senhaHash: '$2b$12$J57O7dZNtzhOo3IwclwNKOj9Xp8n3t75A1j/8lpT7WlmvJoya0oJe',
      papel: 'gestor',
      ativo: true,
    },
    {
      id: 2,
      nome: 'Bruno Silva',
      email: 'bruno@empresa.com',
      senhaHash:
        '$2b$12$5S9LDbR3FznMAsZY5P..2OKE932dOHeVvGrmlfklgquClbkKgUidC',
      papel: 'solicitante',
      ativo: true,
    },
    {
    id: 3,
    nome: 'leonardo pontes',
    email: 'leonardo.pontes@escolar.ifrn.com',
    //2025103806005
    senhaHash:
      '$2b$12$zqjInxEzlLTqQCZs2DJDo.EiJItxD8A8GT4xA63fkjsaWsiFo6s8e',
    papel: 'gestor',
    ativo: true,
    },
    {
    id: 4,
    nome: 'leonardo pontes',
    email: 'leonardo.pontes@escolar.ifrn.com',
    // 50006083015202
    senhaHash:
      '$2b$12$dYtU26UsxRIl6hWjOWLDZOSxshsxgX.PP.8vXYL1.wDdSSwCLhNaa',
    papel: 'gestor',
    ativo: true,
    },
  ];

  buscarPorEmail(email: string) {
    return this.usuarios.find((usuario) => usuario.email === email);
  }
}