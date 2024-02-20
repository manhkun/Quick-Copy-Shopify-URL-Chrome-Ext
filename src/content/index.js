const script = document.createElement('script');
script.src = chrome.runtime.getURL('src/external/index.js');
(document.body || document.documentElement).appendChild(script);

let previewURL = ''
let themeEditorURL = ''
let currentURL = ''

document.addEventListener('GlobalVarValue', function (e) {
  const Shopify = JSON.parse(e.detail)

  previewURL = 'https://' + Shopify.shop + '/?preview_theme_id=' + Shopify.theme.id
  themeEditorURL = 'https://' + Shopify.shop + '/admin/themes/' + Shopify.theme.id
  currentURL = 'https://' + Shopify.shop + window.location.pathname + '/?preview_theme_id=' + Shopify.theme.id
});

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message === "copyPreview")
        copyToTheClipboard(previewURL)

      if (request.message === "copyThemeEditor")
        copyToTheClipboard(themeEditorURL)

      if (request.message === "copyCurrentPageURL")
        copyToTheClipboard(currentURL)
    }
);

async function copyToTheClipboard(textToCopy){
  const el = document.createElement('textarea');
  el.value = textToCopy;
  el.setAttribute('readonly', '');
  el.style.position = 'absolute';
  el.style.left = '-9999px';
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}
