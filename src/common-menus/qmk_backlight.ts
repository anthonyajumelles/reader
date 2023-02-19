import {VIAMenu} from '../menu-types';

export const qmk_backlight: VIAMenu[] = [
  {
    label: 'Lighting',
    content: [
      {
        label: 'Backlight',
        content: [
          {
            label: 'Backlight Brightness',
            type: 'range',
            options: [0, 255],
            content: ['id_qmk_backlight_brightness', 1, 1],
          },
          {
            label: 'Backlight Effect',
            type: 'dropdown',
            content: ['id_qmk_backlight_effect', 1, 2],
            options: [
              ['Off', 0],
              ['Breathing', 1],
            ],
          },
        ],
      },
    ],
  },
];
