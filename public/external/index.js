var globalShopifyValueSolis = window.Shopify;

if (globalShopifyValueSolis) {
  document.dispatchEvent(new CustomEvent('GlobalVarValue', {detail: JSON.stringify(globalShopifyValueSolis)}));
}
