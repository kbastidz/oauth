export const menuConfig: { [key: string]: any[] } = {
    admin: [      
      {
        label: 'Administración',
        items: [
          {
            label: 'Actualizar Información',
            icon: 'pi pi-fw pi-user',
            routerLink: ['/personal-info/actualizar-informacion']
          },
          {
              label: 'Consultar Usuarios',
              icon: 'pi pi-fw pi-user',
              routerLink: ['/personal-info/consultar-personas']
          }
        ]
      }
    ],
    marketing: [
      {
        label: 'KPI',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard-ml'] }
        ]
      }
    ],
    rrhh: [
      {
        label: 'KPI',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/dashboard-ml/dashboard-ml-rh'] }
        ]
      }
    ]
  };
  