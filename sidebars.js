const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',
    },
    {
      type: 'category',
      label: '主線攻略',
      items: [
        'mainstory/chapter1',
        'mainstory/chapter2',
      ],
    },
    {
      type: 'category',
      label: '裝備',
      items: [
        'equipment/weapons',
        'equipment/armor',
        'equipment/upgrade',
      ],
    },
    {
      type: 'category',
      label: '系統',
      items: [
        'system/sameification',
        'system/restraint',
      ],
    },
    'newbie',
  ],
};

module.exports = sidebars;
