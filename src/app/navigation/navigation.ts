
            
            import { FuseNavigation } from '@fuse/types';

            export const navigation: FuseNavigation[] = [
                {
                    id       : 'applications',
                    title    : '',
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
                type     : 'item',
                icon     : 'email',
                url      : '/sample',
             
            },

            {
                id       : 'Actores',
                title    : 'Actores',
                type     : 'item',
                icon     : 'web_asset',
                url      : '/actores'
            },
            // {
            //     id   : 'forms',
            //     title: 'Formulario',
            //     type : 'item',
            //     icon : 'web_asset',
            //     url  : '/ui/forms'
            // },
         
                       
                    ]
                },
               
            ];
            
            
            
            
         
           
    
 

