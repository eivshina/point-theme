/** Modeling page — portfolio grouped by shoot location. Edit mappings here. */

export interface ModelingPhoto {
  src: string;
  alt: string;
}

export interface ModelingLocation {
  id: string;
  label: string;
  photos: ModelingPhoto[];
}

const base = '/modeling';

function photos(
  locationId: string,
  label: string,
  filenames: string[],
): ModelingPhoto[] {
  return filenames.map((file) => ({
    src: `${base}/${locationId}/${file}`,
    alt: `Modeling in ${label} — Katya Ivshina`,
  }));
}

export const modelingLocations: ModelingLocation[] = [
  {
    id: 'milan',
    label: 'Milan',
    photos: photos('milan', 'Milan', [
      'img_1033.webp',
      'img_1034-2.webp',
      'img_1035-2.webp',
      'img_2126.webp',
      'img_2127.webp',
      'img_2128-2.webp',
      'img_2182.webp',
      'img_2183.webp',
      'l1180026-2.jpg',
      'l1180062-2.jpg',
    ]),
  },
  {
    id: 'harvard',
    label: 'Boston',
    photos: photos('harvard', 'Boston', [
      'dscf0558.jpg',
      'dscf0626-2.jpg',
      'dscf0637.jpg',
      'dscf0846.jpg',
      'dscf0881.jpg',
      'dscf1018.jpg',
    ]),
  },
  {
    id: 'new-york',
    label: 'New York',
    photos: photos('new-york', 'New York', [
      'dsc00355.jpg',
      'dsc00454.jpg',
      'dsc00533.jpg',
      'dsc00690.jpg',
      'dsc00832.jpg',
      'dsc00978-2.jpg',
      'dsc01470.jpg',
      'dsc01521-2.jpg',
      'dsc01546.jpg',
      'dsc01662.jpg',
      'dsc01674.jpg',
      'dsc01678.jpg',
      'dsc01829.jpg',
      'dsc01948.jpg',
      'dsc09891.jpg',
      'dsc01634.jpg',
    ]),
  },
  {
    id: 'london',
    label: 'London',
    photos: photos('london', 'London', [
      'dscf2769.jpg',
      'dscf2782.jpg',
      'dscf2841.jpg',
      'dscf2885.jpg',
      'dscf2888.jpg',
      'dscf2894.jpg',
      'dscf2895-2.jpg',
    ]),
  },
  {
    id: 'los-angeles',
    label: 'Los Angeles',
    photos: photos('los-angeles', 'Los Angeles', [
      'dscf8625.jpg',
      'screenshot-2026-06-26-at-11.46.58pm.jpg',
      'screenshot-2026-06-26-at-11.47.04pm.jpg',
    ]),
  },
];

export const allModelingPhotos: ModelingPhoto[] = modelingLocations.flatMap(
  (loc) => loc.photos,
);
