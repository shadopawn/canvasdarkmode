var urlScheme = "https://*.instructure.com/*";

function blockCSS(request)
{
  console.log("Blocking CSS...");
  return
  {
    cancel: true;
  };
}


chrome.webRequest.onBeforeRequest.addListener(
  blockCSS,
	{
    urls: [urlScheme],
    types: ["stylesheet"]
  },
	["blocking"]
);
