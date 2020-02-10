import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from 'src/app/header/head.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListsComponent } from './recipes/recipe-lists/recipe-lists.component';
import { RecipeDetailsComponent } from './recipes/recipe-lists/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListsComponent,
    RecipeDetailsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
