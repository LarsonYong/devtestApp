export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0,
          },
        },
      },
      {
        path: 'gateway',
        data: {
          menu: {
            title: 'Gateway',
            icon: 'ion-monitor',
            pathMatch: 'prefix',
            selected: false,
            order: 0,
          },
        },
      },
      {
        path: 'build',
        data: {
          menu: {
            title: 'Build',
            icon: 'ion-document',
            pathMatch: 'prefix',
            selected: false,
            expand: false,
            order: 0,
          },
        },
        children: [
          {
            path: 'list',
            data: {
              menu: {
                title: 'List',
              },
            },
          },
          {
            path: 'detail',
            data: {
              menu: {
                title: 'Add build',
              },
            },
          },
        ],
      },
      {
        path: 'unit',
        data: {
          menu: {
            title: 'Unit',
            icon: 'ion-nuclear',
            pathMatch: 'prefix',
            selected: false,
            expand: false,
            order: 10,
          },
        },
        children: [
          {
            path: 'history',
            data: {
              menu: {
                title: 'History',
              },
            },
          },
          {
            path: 'Info',
            data: {
              menu: {
                title: 'Update',
              },
            },
          },
        ],
      },
      {
        path: 'userAdmin',
        data: {
          menu: {
            title: 'User',
            icon: 'ion-ios-personadd',
            pathMatch: 'prefix',
            selected: false,
            order: 800,
          },
        },
      },
    ],
  },
];
