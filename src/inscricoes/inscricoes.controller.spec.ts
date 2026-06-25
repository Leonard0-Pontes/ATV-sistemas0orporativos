import { Test, TestingModule } from '@nestjs/testing';
import { InscricoesController } from './inscricoes.controller';

describe('InscricoesController', () => {
  let controller: InscricoesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InscricoesController],
    }).compile();

    controller = module.get<InscricoesController>(InscricoesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
