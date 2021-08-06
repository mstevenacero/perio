import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {path:'',redirectTo:'autenticacion',pathMatch:'full'},

  {
    path: 'autenticacion',
    loadChildren: () => import('./autenticacion/autenticacion.module').then( m => m.AutenticacionPageModule)
  },

  {
    path: 'perfil',
    loadChildren: () => import('./perfil/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'administrativo',
    loadChildren: () => import('./administrativo/administrativo.module').then( m => m.AdministrativoPageModule)
  },
  {
    path: 'perioperatorio',
    children:[
      
      { path:"",

          loadChildren: () => import('./perioperatorio/perioperatorio.module').then( m => m.PerioperatorioPageModule)

    },
    
  {
    path:':idperio',
    loadChildren:()=>import('./perioperatorio/detallesperio/detallesperio.module').then(m=>m.DetallesperioPageModule)}]
   

},
  {
    path: 'reporte',
    loadChildren: () => import('./reporte/reporte.module').then( m => m.ReportePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'agregar-sintomas',
    loadChildren: () => import('./agregar-sintomas/agregar-sintomas.module').then( m => m.AgregarSintomasPageModule)
  },
  {
    path: 'nuevo-sintoma',
    loadChildren: () => import('./nuevo-sintoma/nuevo-sintoma.module').then( m => m.NuevoSintomaPageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
