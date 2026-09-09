/* Genera sitemap.xml con las imágenes de contenido publicadas por el sitio. */
"use strict";

var fs = require("fs");
var path = require("path");
var root = path.resolve(__dirname, "..");
var site = "https://jesuszambranop.github.io/rigelsa/";

global.window = {};
require(path.join(root, "js", "data.js"));
require(path.join(root, "js", "inventario-bilingue.js"));

var data = global.window.RIGEL_DATA;
var homeImages = [
  "assets/slides/nuevos/equipos-codificacion-rigel.webp",
  "assets/slides/nuevos/codificacion-fechas-lotes-frasco-vidrio.webp",
  "assets/slides/nuevos/codificadora-industrial-k600-linea-produccion.webp",
  "assets/slides/nuevos/codificacion-envases-cosmeticos.webp",
  "assets/slides/nuevos/codificadora-banda-transportadora-envases.webp",
  "assets/slides/nuevos/codificadora-automatica-huevos.webp",
  "assets/aplicaciones/codificacion-fechas-lotes-botellas.webp",
  "assets/aplicaciones/codificacion-trazabilidad-latas-metalicas.webp",
  "assets/aplicaciones/codificacion-fecha-lote-carne-envasada.webp",
  "assets/aplicaciones/codificacion-fecha-caducidad-pan.webp",
  "assets/aplicaciones/codificacion-lotes-envases-farmaceuticos.webp",
  "assets/soporte/soporte-tecnico-rigel.webp"
];

function absolute(relative) {
  return new URL(String(relative).replace(/^\//, ""), site).href;
}

function escapeXml(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

function unique(values) {
  return values.filter(function (value, index, list) { return list.indexOf(value) === index; });
}

var pages = [
  { loc: "index.html", images: homeImages },
  { loc: "productos.html", images: data.productos.map(function (product) { return product.imagen; }) },
  { loc: "blog.html", images: data.articulos.map(function (article) { return article.imagen; }) },
  { loc: "quienes-somos.html", images: ["assets/nosotros/mapa-america.webp"] },
  { loc: "contacto.html", images: [] },
  { loc: "politica-cookies.html", images: [] },
  { loc: "politica-privacidad.html", images: [] },
  { loc: "devoluciones-reembolsos.html", images: [] }
];

data.productos.forEach(function (product) {
  pages.push({
    loc: "producto.html?slug=" + encodeURIComponent(product.slug) + "&lang=es",
    images: [product.imagen].concat(product.galeria || [])
  });
});

data.articulos.forEach(function (article) {
  pages.push({
    loc: "articulo.html?slug=" + encodeURIComponent(article.slug) + "&lang=es",
    images: [article.imagen].concat(article.imagenes || [])
  });
});

var xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">'
];

pages.forEach(function (page) {
  xml.push("  <url>");
  xml.push("    <loc>" + escapeXml(absolute(page.loc)) + "</loc>");
  xml.push("    <lastmod>2026-09-09</lastmod>");
  unique(page.images).forEach(function (image) {
    xml.push("    <image:image>");
    xml.push("      <image:loc>" + escapeXml(absolute(image)) + "</image:loc>");
    xml.push("    </image:image>");
  });
  xml.push("  </url>");
});
xml.push("</urlset>");

fs.writeFileSync(path.join(root, "sitemap.xml"), xml.join("\n") + "\n", "utf8");
fs.writeFileSync(path.join(root, "robots.txt"), "User-agent: *\nAllow: /\n\nSitemap: " + site + "sitemap.xml\n", "utf8");
console.log("sitemap.xml: " + pages.length + " URLs");
