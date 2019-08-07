
            
            import { FuseNavigation } from '@fuse/types';

            export const navigation: FuseNavigation[] = [
                {
                    id       : 'applications',
                    title    : '',
                    translate: 'NAV.APPLICATIONS',
                    type     : 'group',
                    icon     : 'apps',
                    children : [

                        
                        {
                            id       : 'contacts',
                            title    : 'Hechos',
                            type     : 'item',
                            icon     : 'account_box',
                            url      : '/apps/contacts'
                        },
                           
            {
                id       : 'Organizaciones',
                title    : 'Organizaciones',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
             
            },

            {
                id       : 'Actores',
                title    : 'Actores',
                translate: 'NAV.SAMPLE.TITLE',
                type     : 'item',
                icon     : 'email',
                url      : '/actores',
            
            }


                       
                       
                    ]
                },
               
            ];
            
            
            
            
         
           
    
 

