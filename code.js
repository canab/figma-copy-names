"use strict";
figma.showUI(__html__);
const selectedLayers = figma.currentPage.selection;
const layerNames = selectedLayers.map(layer => layer.name);
figma.ui.postMessage({ type: "selected_layers", data: layerNames });
figma.ui.onmessage = msg => {
    figma.closePlugin();
};
