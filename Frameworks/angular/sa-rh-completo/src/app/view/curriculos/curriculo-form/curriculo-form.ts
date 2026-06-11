import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CurriculoService } from '../../../service/curriculo';
import { Curriculo } from '../../../model/curriculo.model';

@Component({
  selector: 'app-curriculo-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './curriculo-form.html',
  styleUrls: ['./curriculo-form.scss'],
})
export class CurriculoFormComponent implements OnInit {
  // Propriedade para o formulário se ligar via [(ngModel)]
  curriculo: Curriculo = {
    nomeCompleto: '',
    email: '',
    telefone: '',
    formacao: '',
    experiencia: '',
    habilidades: [],
  };

  editando: boolean = false;

  constructor(
    private service: CurriculoService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.editando = true;
      this.service.buscarPorId(Number(id)).subscribe({
        next: (res: Curriculo) => {
          this.curriculo = res;
        },
        error: (err: unknown) => console.error('Erro ao buscar currículo:', err),
      });
    }
  }

  salvar(): void {
    if (this.editando) {
      const id = this.curriculo.id;
      if (id == null) {
        console.error('ID do currículo não informado para atualização.');
        return;
      }

      this.service.editar(id, this.curriculo).subscribe({
        next: () => this.router.navigate(['/curriculos']),
        error: (err: unknown) => console.error('Erro ao atualizar:', err),
      });
    } else {
      this.service.cadastrar(this.curriculo).subscribe({
        next: () => this.router.navigate(['/curriculos']),
        error: (err: unknown) => console.error('Erro ao salvar:', err),
      });
    }
  }
}
