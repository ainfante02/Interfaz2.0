import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { FuseSharedModule } from '@fuse/shared.module';

import { ActoresComponent } from './actores.component';
import { MatIconModule } from '@angular/material/icon';

const routes = [
    {
        path     : 'actores',
        component: ActoresComponent
    }
];

@NgModule({
    declarations: [
        ActoresComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        TranslateModule,

        FuseSharedModule,
        
        MatIconModule
    ],
    exports     : [
        ActoresComponent
    ]
})

export class ActoresModule
{
}
