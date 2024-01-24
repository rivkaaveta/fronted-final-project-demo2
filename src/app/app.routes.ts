import { Routes } from '@angular/router';
import { BindingComponent } from './binding/binding.component';
import { CommunicationComponent } from './communication/communication.component';
import { NgclassDemoComponent } from './ngclass-demo/ngclass-demo.component';
import { NgforDemoComponent } from './ngfor-demo/ngfor-demo.component';
import { NgifDemoComponent } from './ngif-demo/ngif-demo.component';
import { HomeComponent } from './home/home.component';
import { RouterParamDemoComponent } from './router-param-demo/router-param-demo.component';
import { FormsDemoComponent } from './forms-demo/forms-demo.component';
import { PersonsListComponent } from './persons-list/persons-list.component';
import { PersonFormComponent } from './person-form/person-form.component';

export const routes: Routes = [
    {path: 'binding', component: BindingComponent},
    {path: 'communication', component: CommunicationComponent},
    {path: 'ngclass', component: NgclassDemoComponent},
    {path: 'ngfor', component: NgforDemoComponent},
    {path: 'ngif', component: NgifDemoComponent},
    {path: '', component: HomeComponent},
    {path: 'router/:id', component: RouterParamDemoComponent},
    
    {path: 'person/:id', component : PersonFormComponent},
    {path: 'newperson', component : PersonFormComponent},
    {path: 'persons', component : PersonsListComponent}
];
