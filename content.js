// Content script - runs on YouTube pages
// This script provides additional ad-blocking support

(function () {
    'use strict';

    // Check if we're on the dotted domain
    const isDotted = window.location.hostname.endsWith('.');

    if (isDotted) {
        console.log('YouTube Ad Skipper: Running on ad-free domain');
    }

    // Monitor for any ad elements that might still appear
    const observer = new MutationObserver(() => {
        // Remove any ad overlays if they appear
        const adOverlays = document.querySelectorAll('.ytp-ad-overlay-container, .ytp-ad-text-overlay');
        adOverlays.forEach(ad => ad.remove());
    });

    // Start observing when DOM is ready
    if (document.body) {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    } else {
        document.addEventListener('DOMContentLoaded', () => {
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }
})();
