import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CurriculoService } from '../../../service/curriculo';
import { Curriculo } from '../../../model/curriculo.model';
import id from '@angular/common/locales/extra/id';

@Component({
  selector: 'app-curriculo-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './curriculo-list.html',
  styleUrls: ['./curriculo-list.scss'],
})
export class CurriculoListComponent implements OnInit {
  curriculos: Curriculo[] = [];

  constructor(private service: CurriculoService) {}

  ngOnInit(): void {
    this.carregarCurriculos();
  }

  carregarCurriculos(): void {
    this.service.getCurriculos().subscribe({
      next: (dados) => {
        this.curriculos = dados;
      },
      error: (err) => console.error('Erro ao listar currículos:', err),
    });
  }

  excluir(id: number): void {
    if (confirm('Tem certeza que deseja excluir este currículo?')) {
      this.service.deleteCurriculo(id).subscribe({
        next: () => {
          this.curriculos = this.curriculos.filter((c) => c.id !== id);
        },
        error: (err) => console.error('Erro ao deletar:', err),
      });
    }
  }
}
