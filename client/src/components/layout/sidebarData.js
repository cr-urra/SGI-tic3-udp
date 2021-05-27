import React from 'react';
import {IconDash,
        IconPedido,
        IconProveedor,
        IconProducto,
        IconReporte,
        IconRoles,
        IconAduana,
        IconBanco} from './IconSVG';

export const SidebarData = [
    {
        title: 'Dashboard',
        path: '/users/dashboard' ,
        icon: <IconDash/>
    },
    {
        title: 'Pedidos',
        //path: '/pedidos' ,
        icon : <IconPedido/>,
        subNav : [
            {
                title: 'Crear Pedidos',
                path: '/users/Crear_Pedido'
            },
            {
                title: 'Buscar Pedido',
                path: '/users/Buscar_Pedido' ,
            }
        ]
    },
    {
        title : 'Proveedor',
        //path : '/proveedor',
        icon : <IconProveedor/>,
        subNav : [
            {
                title: 'Crear Proveedor',
                path: '/users/Ingresar_Proveedor'  
            },
            {
                title: 'Buscar Proveedor',
                path: '/users/Buscar_Proveedor'
            }
        ]

    },
    {
        title: 'Productos',
        //path: '/productos',
        icon: <IconProducto/>,
        subNav : [
            {
                title: 'Crear Producto',
                path: '/users/Ingresar_Producto'
            },
            {
                title: 'Buscar Producto',
                path: '/users/Buscar_Producto' 
            },
        ]
    },
    {
        title: 'Reportes',
        //path: '/reportes',
        icon: <IconReporte/>,
        subNav : [
            {
                title: 'Costos Finales',
                path: '/users/Reporte_Costos_Finales'
            },
            {
                title: 'Status Agente Aduana',
                path: '/users/Reporte_Status_Agente_Aduana'
            },
            {
                title: 'Montos de Importaciones',
                //path: '/reportes/monto_import',
                subsubNav: [
                    {
                        title:'Por proveedor',
                        path: '/users/Reporte_Importacion_Proveedor'
                    },
                    {
                        title:'Por producto',
                        path: '/users/Reporte_Importacion_Producto'
                    }
                ]

            }
        ]

    },
    {
        title : 'Usuarios',
        //path : '/asignar_roles',
        icon: <IconRoles/>,
        subNav : [
            {
                title: 'Crear Usuario',
                path: '/users/Crear_Usuario'
            },
            {
                title: 'Buscar Usuario',
                path: '/users/Buscar_Usuario'
            }
        ]

    },
    {
        title : 'Agentes de Aduana',
        //path : '/agente_aduana',
        icon : <IconAduana/>,
        subNav : [
            {
                title: 'Ingresar Agente Aduana',
                path: '/users/Ingresar_Agente_Aduana'
            },
            {
                title: 'Buscar Agente Aduana',
                path: '/users/Buscar_Agente_Aduana'
            }
        ]

    },
    {
        title : 'Banco',
        path : '/users/Bancos',
        icon : <IconBanco/>

    }
    
    
]