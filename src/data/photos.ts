import type { ImageMetadata } from 'astro';

export interface Photo {
  file: string;
  title: string;
  place: string;
  country: string;
  lat: number;
  lng: number;
}

// Single source of truth for the photography gallery, shared by the EN/FR/AR
// pages so the dataset can never drift between languages.
export const photos: Photo[] = [
  { file: 'tour_eiffel_paris-fr.jpg',                      title: 'Tour Eiffel',                       place: 'Paris',      country: 'France',  lat: 48.8584, lng:  2.2945 },
  { file: 'building_toulouse-fr.jpg',                      title: 'Building',                          place: 'Toulouse',   country: 'France',  lat: 43.6047, lng:  1.4442 },
  { file: 'basilique_st_sernin_toulouse-fr.jpg',           title: 'Basilique Saint-Sernin',            place: 'Toulouse',   country: 'France',  lat: 43.6083, lng:  1.4410 },
  { file: 'chapelle_saint-joseph_toulouse-fr.jpg',         title: 'Chapelle Saint-Joseph de la Grave', place: 'Toulouse',   country: 'France',  lat: 43.5974, lng:  1.4315 },
  { file: 'musee_augusting_toulouse-fr.jpg',               title: 'Musée des Augustins',               place: 'Toulouse',   country: 'France',  lat: 43.6062, lng:  1.4454 },
  { file: 'cathedrale_notre_dame_strasbourg-fr.jpg',       title: 'Cathédrale Notre-Dame',             place: 'Strasbourg', country: 'France',  lat: 48.5734, lng:  7.7521 },
  { file: 'building_marseille-fr.jpg',                     title: 'Building',                          place: 'Marseille',  country: 'France',  lat: 43.2965, lng:  5.3698 },
  { file: 'sculpture_marseille-fr.jpg',                    title: 'Sculpture',                         place: 'Marseille',  country: 'France',  lat: 43.2965, lng:  5.3698 },
  { file: 'beach_leucate-fr.jpg',                          title: 'Beach',                             place: 'Leucate',    country: 'France',  lat: 42.9103, lng:  3.0335 },
  { file: 'collioure-fr.jpg',                              title: 'Collioure',                         place: 'Collioure',  country: 'France',  lat: 42.5257, lng:  3.0824 },
  { file: 'building_casablanca-mar.jpg',                   title: 'Building',                          place: 'Casablanca', country: 'Morocco', lat: 33.5731, lng: -7.5898 },
  { file: 'mosquee_hassan2_from_plane_casablanca-mar.jpg', title: 'Mosquée Hassan II',                 place: 'Casablanca', country: 'Morocco', lat: 33.6086, lng: -7.6325 },
  { file: 'plane_casablanca-mar.jpg',                      title: 'Casablanca from the Air',           place: 'Casablanca', country: 'Morocco', lat: 33.5731, lng: -7.5898 },
  { file: 'tower_mohammed6_rabat-morocco.jpg',             title: 'Mohammed VI Tower',                 place: 'Salé',       country: 'Morocco', lat: 34.0191, lng: -6.8051 },
  { file: 'building_stuttgaret-Germany.jpg',               title: 'Building',                          place: 'Stuttgart',  country: 'Germany', lat: 48.7758, lng:  9.1829 },
  { file: 'porche_museum_stuttgart-ger.jpg',               title: 'Porsche Museum',                    place: 'Stuttgart',  country: 'Germany', lat: 48.8340, lng:  9.1529 },
  { file: 'porche_museum2_stuttgart-ger.jpg',              title: 'Porsche Museum',                    place: 'Stuttgart',  country: 'Germany', lat: 48.8340, lng:  9.1529 },
  { file: 'tv_tower_stuttgart-ger.jpg',                    title: 'Fernsehturm Stuttgart',             place: 'Stuttgart',  country: 'Germany', lat: 48.7557, lng:  9.1902 },
];

// Eagerly import every photo so Astro optimises (resize + WebP) at build time.
const imageModules = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/photography/*.jpg',
  { eager: true },
);
export const photoImages: Record<string, ImageMetadata> = {};
for (const path in imageModules) {
  photoImages[path.split('/').pop()!] = imageModules[path].default;
}
