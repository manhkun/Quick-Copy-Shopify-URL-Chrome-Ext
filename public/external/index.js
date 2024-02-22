if (window.Shopify) {
  const data = {
    themeId: window.Shopify.theme.id,
    shop: window.Shopify.shop,
  }
  document.dispatchEvent(new CustomEvent('GlobalVarValue', {detail: JSON.stringify(data)}));
}

