/** Cities Katya has lived in, studied in, or traveled through — plotted on the globe. */

export type City = {
  /** City name shown on the globe label and the accessible fallback list. */
  name: string;
  /** Country / region, used in the fallback list for context. */
  region: string;
  lat: number;
  lng: number;
};

/**
 * Ordered route. The globe connects consecutive cities with travel arcs and
 * loops the final city back to the first, so the order here is meaningful.
 */
export const travelCities: readonly City[] = [
  { name: 'Paris', region: 'France', lat: 48.8566, lng: 2.3522 },
  { name: 'Milan', region: 'Italy', lat: 45.4642, lng: 9.19 },
  { name: 'Florence', region: 'Italy', lat: 43.7696, lng: 11.2558 },
  { name: 'Venice', region: 'Italy', lat: 45.4408, lng: 12.3155 },
  { name: 'Rome', region: 'Italy', lat: 41.9028, lng: 12.4964 },
  { name: 'Barcelona', region: 'Spain', lat: 41.3851, lng: 2.1734 },
  { name: 'Nice', region: 'France', lat: 43.7102, lng: 7.262 },
  { name: 'Cannes', region: 'France', lat: 43.5528, lng: 7.0174 },
  { name: 'Almaty', region: 'Kazakhstan', lat: 43.222, lng: 76.8512 },
  { name: 'San Francisco', region: 'USA', lat: 37.7749, lng: -122.4194 },
  { name: 'Boston', region: 'USA', lat: 42.3601, lng: -71.0589 },
  { name: 'New York City', region: 'USA', lat: 40.7128, lng: -74.006 },
  { name: 'Vancouver', region: 'Canada', lat: 49.2827, lng: -123.1207 },
  { name: 'London', region: 'UK', lat: 51.5074, lng: -0.1278 },
  { name: 'Cambridge', region: 'UK', lat: 52.2053, lng: 0.1218 },
  { name: 'Oxford', region: 'UK', lat: 51.752, lng: -1.2577 },
] as const;
