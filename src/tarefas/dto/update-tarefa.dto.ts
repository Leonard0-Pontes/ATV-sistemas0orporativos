import { IsOptional, IsString, IsIn, IsInt, Min, Max } from 'class-validator';

export class UpdateTarefaDto {

    @IsString()
    @IsOptional()
    titulo?: string;

    @IsOptional()
    @IsString()
    descricao?: string;

    @IsOptional()
    @IsIn(['aberta', 'em_andamento', 'concluida'])
    status?: 'aberta' | 'em_andamento' | 'concluida';

    @IsOptional()
    @IsInt()
    @Min(1)
    @Max(5)
    prioridade?: number;
}