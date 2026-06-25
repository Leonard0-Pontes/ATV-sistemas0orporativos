import { IsNotEmpty, IsOptional, IsString, IsIn, IsInt, Min, Max } from 'class-validator';

export class CreateTarefaDto {

    @IsString()
    @IsNotEmpty()
    titulo!: string;

    @IsOptional()
    @IsString()
    descricao?: string;

    @IsIn(['aberta', 'em_andamento', 'concluida'])
    status!: 'aberta' | 'em_andamento' | 'concluida';

    @IsInt()
    @Min(1)
    @Max(5)
    prioridade!: number;
}