// Background script to handle navigation and redirect logic
chrome.webNavigation.onBeforeNavigate.addListener(
  (details) => {
    // Only process main frame requests (actual page navigation)
    if (details.frameId !== 0) return;
    
    const url = new URL(details.url);
    
    // Only redirect if it's a regular youtube.com URL (not already dotted)
    // and it's a video page or playlist
    if (
      (url.hostname === 'www.youtube.com' || url.hostname === 'youtube.com') &&
      (url.pathname.startsWith('/watch') || url.pathname.startsWith('/playlist') || url.pathname.startsWith('/shorts'))
    ) {
      // Add the dot after .com
      const newHostname = url.hostname + '.';
      const newUrl = url.protocol + '//' + newHostname + url.pathname + url.search + url.hash;
      
      // Redirect to the dotted version
      chrome.tabs.update(details.tabId, { url: newUrl });
    }
  },
  {
    url: [
      { hostEquals: 'www.youtube.com' },
      { hostEquals: 'youtube.com' }
    ]
  }
);

console.log('YouTube Ad Skipper: Background script loaded');
