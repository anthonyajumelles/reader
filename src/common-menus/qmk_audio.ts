import {VIAMenu} from '../menu-types';

export const qmk_audio: VIAMenu[] = [
  {
    label: 'Audio',
    content: [
      {
        label: 'General',
        content: [
          {
            label: 'Audio Enable',
            type: 'toggle',
            content: ['id_qmk_audio_enable', 4, 1],
          },
          {
            label: 'Audio Clicky Enable',
            type: 'toggle',
            content: ['id_qmk_audio_clicky_enable', 4, 2],
          },
        ],
      },
    ],
  },
];
