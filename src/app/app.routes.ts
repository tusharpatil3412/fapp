import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { authGuard, empAuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { RecordsComponent } from './records/records.component';
import { AdmindefaultrouteComponent } from '../admindefaultroute/admindefaultroute.component';
import { EmployeeComponent } from '../employee/employee.component';
import { UserHomeComponent } from '../user-home/user-home.component';
import { EmprecordsComponent } from './emprecords/emprecords.component';
import{ AddEmployeeComponent} from '../add-employee/add-employee.component';
import { AdminrecordComponent} from './adminrecord/adminrecord.component'
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'employee', component: LoginComponent },
    { path: 'empHome', component: UserHomeComponent,canActivate:[empAuthGuard] },
    { path: 'emprecord', component: EmprecordsComponent,canActivate:[empAuthGuard] },
    {
        path: 'Admin', component: AdminHomeComponent, children: [
            { path: '', component: AdmindefaultrouteComponent },
             { path: 'records', component: RecordsComponent },
             { path: 'employee', component: EmployeeComponent },
             { path: 'AdminRecord/:id', component: AdminrecordComponent },
             { path: 'addEmployee', component: AddEmployeeComponent}
        ], canActivate: [authGuard]
    },

   
    { path: 'records', component: RecordsComponent, canActivate: [authGuard], outlet: 'outletad' }

];
