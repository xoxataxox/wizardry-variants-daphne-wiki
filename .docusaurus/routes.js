import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/wizardry-variants-daphne-wiki/markdown-page',
    component: ComponentCreator('/wizardry-variants-daphne-wiki/markdown-page', '8ea'),
    exact: true
  },
  {
    path: '/wizardry-variants-daphne-wiki/docs',
    component: ComponentCreator('/wizardry-variants-daphne-wiki/docs', '410'),
    routes: [
      {
        path: '/wizardry-variants-daphne-wiki/docs',
        component: ComponentCreator('/wizardry-variants-daphne-wiki/docs', '6ed'),
        routes: [
          {
            path: '/wizardry-variants-daphne-wiki/docs',
            component: ComponentCreator('/wizardry-variants-daphne-wiki/docs', '343'),
            routes: [
              {
                path: '/wizardry-variants-daphne-wiki/docs',
                component: ComponentCreator('/wizardry-variants-daphne-wiki/docs', 'f65'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wizardry-variants-daphne-wiki/docs/changelog',
                component: ComponentCreator('/wizardry-variants-daphne-wiki/docs/changelog', '637'),
                exact: true
              },
              {
                path: '/wizardry-variants-daphne-wiki/docs/equipment/armor',
                component: ComponentCreator('/wizardry-variants-daphne-wiki/docs/equipment/armor', 'aac'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wizardry-variants-daphne-wiki/docs/equipment/upgrade',
                component: ComponentCreator('/wizardry-variants-daphne-wiki/docs/equipment/upgrade', '68b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wizardry-variants-daphne-wiki/docs/equipment/weapons',
                component: ComponentCreator('/wizardry-variants-daphne-wiki/docs/equipment/weapons', 'cd2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wizardry-variants-daphne-wiki/docs/mainstory/chapter1',
                component: ComponentCreator('/wizardry-variants-daphne-wiki/docs/mainstory/chapter1', '8fb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wizardry-variants-daphne-wiki/docs/mainstory/chapter2',
                component: ComponentCreator('/wizardry-variants-daphne-wiki/docs/mainstory/chapter2', 'a9b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wizardry-variants-daphne-wiki/docs/newbie',
                component: ComponentCreator('/wizardry-variants-daphne-wiki/docs/newbie', 'c7a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wizardry-variants-daphne-wiki/docs/system/restraint',
                component: ComponentCreator('/wizardry-variants-daphne-wiki/docs/system/restraint', '4e6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/wizardry-variants-daphne-wiki/docs/system/sameification',
                component: ComponentCreator('/wizardry-variants-daphne-wiki/docs/system/sameification', '64c'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/wizardry-variants-daphne-wiki/',
    component: ComponentCreator('/wizardry-variants-daphne-wiki/', '4bd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
