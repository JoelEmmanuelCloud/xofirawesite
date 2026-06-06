import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { feature } from "topojson-client";
import { geoMercator, geoPath } from "d3-geo";

const VB_W = 480;
const VB_H = 540;
const NG_ID = "566";
const CI_ID = "384";
const NG_CITY_DEFS = [
  { name: "Lagos", lng: 3.3792, lat: 6.5244, hub: true },
  { name: "Abuja", lng: 7.4898, lat: 9.0765 },
  { name: "Kano", lng: 8.592, lat: 12.0022 },
  { name: "Port Harcourt", lng: 7.0498, lat: 4.8242 },
  { name: "Ibadan", lng: 3.947, lat: 7.3776 },
];

const CI_CITY_DEFS = [
  { name: "Abidjan", lng: -4.0083, lat: 5.3599, hub: true },
  { name: "Yamoussoukro", lng: -5.2767, lat: 6.8276 },
  { name: "Bouaké", lng: -5.03, lat: 7.69 },
  { name: "San-Pédro", lng: -6.6363, lat: 4.7485 },
  { name: "Korhogo", lng: -5.6294, lat: 9.458 },
];

const AFRICAN_IDS = new Set([
  "012", "024", "204", "072", "854", "108", "120", "140", "148", "178",
  "180", "384", "262", "818", "226", "232", "748", "231", "266", "270",
  "288", "324", "624", "404", "426", "430", "434", "450", "454", "466",
  "478", "504", "508", "516", "562", "566", "646", "686", "694", "706",
  "710", "728", "729", "834", "768", "788", "800", "732", "894", "716",
  "384",
]);

const ISLANDS = new Set(["132", "480", "690", "174"]);

const topo = JSON.parse(
  readFileSync("node_modules/world-atlas/countries-110m.json", "utf8"),
);
const fc = feature(topo, topo.objects.countries);

const african = fc.features.filter(
  (f) => AFRICAN_IDS.has(String(f.id)) && !ISLANDS.has(String(f.id)),
);

const projection = geoMercator();
projection.fitExtent(
  [
    [16, 16],
    [VB_W - 16, VB_H - 16],
  ],
  { type: "FeatureCollection", features: african },
);

const pathGen = geoPath(projection);

function round(d) {
  return d.replace(/-?\d+\.\d+/g, (n) => Number(n).toFixed(1));
}

const countries = african
  .map((f) => ({
    id: String(f.id),
    name: f.properties.name,
    d: round(pathGen(f) || ""),
  }))
  .filter((c) => c.d.length > 0);

function projectCities(defs) {
  return defs.map((c) => {
    const [x, y] = projection([c.lng, c.lat]);
    return {
      name: c.name,
      hub: Boolean(c.hub),
      x: Number(x.toFixed(1)),
      y: Number(y.toFixed(1)),
    };
  });
}

const ngCities = projectCities(NG_CITY_DEFS);
const ciCities = projectCities(CI_CITY_DEFS);

const out = `export const VB_W = ${VB_W};
export const VB_H = ${VB_H};
export const NG_ID = "${NG_ID}";
export const CI_ID = "${CI_ID}";

export interface Country {
  id: string;
  name: string;
  d: string;
}

export interface City {
  name: string;
  hub: boolean;
  x: number;
  y: number;
}

export const NG_CITIES: City[] = ${JSON.stringify(ngCities)};
export const CI_CITIES: City[] = ${JSON.stringify(ciCities)};

export const COUNTRIES: Country[] = ${JSON.stringify(countries)};
`;

mkdirSync("src/lib", { recursive: true });
writeFileSync("src/lib/mapPaths.ts", out);

console.log(
  `Generated ${countries.length} countries, ${ngCities.length} NG cities, ${ciCities.length} CI cities.`,
);
