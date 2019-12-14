var data = [
  {
    type: "sunburst",
    labels: [
      "Top Fermenting",
      "Bottom Fermenting",
      "Wheat",
      "Stout",
      "Porter",
      "Ales",
      "Lager",
      "Vienna",
      "Munich",
      "Pure Yeasts",
      "Lactic Fermentation",
      "Spontaneous Fermanetation",
      "Belgian Witbier / White / Blanche",
      "German Weissbier",
      "Hefe-Weizen",
      "Dunkel-Weizen",
      "Weizenbock",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    parents: [
      "",
      "",
      "Top Fermenting",
      "Top Fermenting",
      "Top Fermenting",
      "Top Fermenting",
      "Bottom Fermenting",
      "Bottom Fermenting",
      "Bottom Fermenting",
      "Wheat",
      "Wheat",
      "Wheat",
      "Pure Yeasts",
      "Pure Yeasts",
      "Pure Yeasts",
      "Pure Yeasts",
      "Pure Yeasts",
      "",
      "",
      "",
      "",
      "",
      "",
      ""
    ],
    values: [10, 14, 12, 10, 4, 6, 6, 4, 4, 3, 5, 6, 7, 6, 5, 4, 3],
    outsidetextfont: { size: 20, color: "#377eb8" },
    leaf: { opacity: 0.4 },
    marker: { line: { width: 2 } }
  }
];

var layout = {
  margin: { l: 0, r: 0, b: 0, t: 0 },
  width: 500,
  height: 500
};

Plotly.newPlot("myDiv", data, layout, { showSendToCloud: true });
