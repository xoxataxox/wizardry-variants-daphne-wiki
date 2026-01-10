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
        'equipment/alteration',
        'equipment/tradeoffs',
      ],
    },
    {
      type: 'category',
      label: '心器之淵',
      items: [
        'mind/GuidingLight',
        'mind/mindwell',
      ],
    },
    {
      type: 'category',
      label: '刷刷刷',
      items: [
        'farming/exp',
        'farming/explist',
        'farming/equipment',
        'farming/money',
        'farming/ore',
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
