var globalShopifyValueSolis = window.Shopify || null;
const data = {
  themeId: window.Shopify.theme.id,
  shop: window.Shopify.shop,
}

if (globalShopifyValueSolis) {
  document.dispatchEvent(new CustomEvent('GlobalVarValue', {detail: JSON.stringify(data)}));
}
