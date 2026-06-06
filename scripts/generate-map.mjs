import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { feature } from "topojson-client";
import { geoMercator, geoPath } from "d3-geo";

const VB_W = 480;
const VB_H = 540;
const NG_ID = "566";
const CI_ID = "384";
const LAGOS = [3.3792, 6.5244];
const ABIDJAN = [-4.0083, 5.3599];

const AFRICAN_IDS = new Set([
  "012", "024", "204", "072", "854", "108", "120", "140", "148", "178",
  "180", "384", "262", "818", "226", "232", "748", "231", "266", "270",
  "288", "324", "624", "404", "426", "430", "434", "450", "454", "466",
  "478", "504", "508", "516", "562", "566", "646", "686", "694", "706",
  "710", "728", "729", "834", "768", "788", "800", "732", "894", "716",
  "384",
]);

const ISLANDS = new Set(["132", "480", "690", "174"]);

const WEST_FIT_IDS = new Set([
  "324", "430", "384", "288", "768", "204", "566", "854", "120", "562",
]);

const topo = JSON.parse(
  readFileSync("node_modules/world-atlas/countries-110m.json", "utf8"),
);
const fc = feature(topo, topo.objects.countries);

const african = fc.features.filter(
  (f) => AFRICAN_IDS.has(String(f.id)) && !ISLANDS.has(String(f.id)),
);

const fitFeatures = african.filter((f) => WEST_FIT_IDS.has(String(f.id)));

const projection = geoMercator();
projection.fitExtent(
  [
    [38, 38],
    [VB_W - 38, VB_H - 38],
  ],
  { type: "FeatureCollection", features: fitFeatures },
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

const lagos = projection(LAGOS);
const abidjan = projection(ABIDJAN);

const out = `export const VB_W = ${VB_W};
export const VB_H = ${VB_H};
export const NG_ID = "${NG_ID}";
export const CI_ID = "${CI_ID}";

export interface Country {
  id: string;
  name: string;
  d: string;
}

export const LAGOS = { x: ${lagos[0].toFixed(1)}, y: ${lagos[1].toFixed(1)} };
export const ABIDJAN = { x: ${abidjan[0].toFixed(1)}, y: ${abidjan[1].toFixed(1)} };

export const COUNTRIES: Country[] = ${JSON.stringify(countries)};
`;

mkdirSync("src/lib", { recursive: true });
writeFileSync("src/lib/mapPaths.ts", out);

console.log(
  `Generated ${countries.length} countries. Lagos=${lagos.map((n) => n.toFixed(1))} Abidjan=${abidjan.map((n) => n.toFixed(1))}`,
);
