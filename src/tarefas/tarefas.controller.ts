import { BadRequestException, Controller, Get,  Post, Query, Param, Body, Patch, Delete, ParseIntPipe, DefaultValuePipe } from "@nestjs/common";
import {TarefasService} from "./tarefas.service";
import { CreateTarefaDto } from "./dto/create-tarefa.dto";
import { UpdateTarefaDto } from "./dto/update-tarefa.dto";

@Controller('tarefas')
export class TarefasController {
    constructor(private readonly tarefasService: TarefasService) { }

    @Get()
    listar(
        @Query('status') status?: string,
        @Query('prioridade', new DefaultValuePipe(5), ParseIntPipe) 
            prioridadeMaxima?: number,
    ){
        return this.tarefasService.listar(status, prioridadeMaxima);
    }

    @Get(':id')
    buscarPorId(@Param('id', ParseIntPipe) id: number){
        
        return this.tarefasService.buscarPorId(id);
    }

    @Post()
    criar(
        @Body() body: CreateTarefaDto
    ){
    
        //return this.tarefasService.criar(body);
    }

    @Patch(':id')
    atualizarParcial(
        @Param('id', ParseIntPipe) id: number,
        @Body()
        body: UpdateTarefaDto
    ){
       

        return this.tarefasService.atualizarParcial(id, body);
    }   

    @Delete(':id')
    remover(@Param('id', ParseIntPipe) id: number){
        
        return this.tarefasService.remover(id);
    }
}