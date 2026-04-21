import { Component } from '@angular/core';

type Recipe = {
  name: string;
  prepTime: string;
  ingredients: string[];
};

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Meu Livro de Receitas';

  protected readonly recipes: Recipe[] = [
    {
      name: 'Panqueca de Banana',
      prepTime: '15 min',
      ingredients: ['2 bananas maduras', '2 ovos', '2 colheres de aveia', 'Canela a gosto']
    },
    {
      name: 'Macarrão Alho e Óleo',
      prepTime: '20 min',
      ingredients: ['200g de macarrão', '3 dentes de alho', 'Azeite', 'Salsinha e sal']
    },
    {
      name: 'Salada Colorida',
      prepTime: '10 min',
      ingredients: ['Alface', 'Tomate', 'Cenoura ralada', 'Pepino', 'Azeite e limão']
    }
  ];
}
