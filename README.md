# 🚀 YouTube Ad Skipper

> **Skip YouTube ads without premium** - A lightweight Chrome extension that automatically bypasses YouTube advertisements

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-brightgreen)](https://github.com)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-blue)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

## 🔍 Keywords

`youtube ad blocker` • `skip youtube ads` • `youtube ad skipper` • `chrome extension` • `ad-free youtube` • `youtube without ads` • `block youtube ads` • `youtube ad remover` • `free youtube premium` • `youtube ad bypass` • `manifest v3` • `declarative net request` • `youtube tools` • `browser extension` • `ad blocker chrome`

---

A lightweight Chrome extension that automatically skips YouTube ads by adding a dot after `.com` in YouTube URLs.

## ✨ Features

- **Automatic Ad Skipping**: No manual URL editing required
- **Zero Configuration**: Install and forget - it just works
- **Lightweight**: Minimal performance impact
- **Privacy Focused**: No data collection, works entirely offline
- **Universal**: Works on all YouTube videos and playlists

## 📦 Installation

### Method 1: Load Unpacked Extension (For Development/Testing)

1. **Download the Extension**
   - Download or clone this repository to your computer

2. **Open Chrome Extensions Page**
   - Open Chrome and navigate to `chrome://extensions/`
   - Or click the three dots menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top-right corner

4. **Load the Extension**
   - Click "Load unpacked" button
   - Navigate to the `yt-prem-extension` folder and select it
   - The extension will now appear in your extensions list

5. **Verify Installation**
   - You should see the "YouTube Ad Skipper" extension with a rocket icon
   - Click the extension icon to see the status popup

### Method 2: Package as .crx (For Distribution)

1. Go to `chrome://extensions/`
2. Enable Developer Mode
3. Click "Pack extension"
4. Select the extension folder
5. Share the generated `.crx` file

## 🎮 Usage

Once installed, the extension works automatically:

1. **Just browse YouTube normally** - no setup required
2. Navigate to any YouTube video
3. The extension automatically redirects the URL
4. Enjoy ad-free content! 🎉

**Note**: If you occasionally see an ad, simply refresh the page and the extension will re-apply the redirect.

## 📁 Project Structure

```
yt-prem-extension/
├── manifest.json       # Extension configuration
├── rules.json         # URL redirect rules
├── popup.html         # Extension popup UI
├── icons/            # Extension icons (16, 32, 48, 128px)
└── README.md         # This file
```

## 🔧 Technical Details

- **Manifest Version**: 3 (latest Chrome extension standard)
- **Permissions**: 
  - `declarativeNetRequest` - For URL redirection
  - `host_permissions` - Access to YouTube domains
- **Resource Types**: Only redirects main frame requests (actual page navigation)

## ❓ FAQ

**Q: Does this work on mobile?**  
A: No, this is a Chrome desktop extension. Mobile browsers don't support Chrome extensions.

**Q: Is this against YouTube's Terms of Service?**  
A: This extension simply modifies URLs. Use at your own discretion.

**Q: Why do I sometimes still see ads?**  
A: The redirect happens on navigation. If YouTube dynamically loads ads, you may need to refresh the page.

**Q: Does this affect YouTube Premium features?**  
A: No, this only adds a dot to URLs. It doesn't interfere with Premium subscriptions.

## 🛠️ Development

Want to modify the extension?

1. Edit the files in the extension folder
2. Go to `chrome://extensions/`
3. Click the refresh icon on the extension card
4. Test your changes

## 📝 License

This project is provided as-is for educational purposes.

## 🤝 Contributing

Feel free to submit issues or pull requests if you find bugs or have improvements!

---

**Enjoy ad-free YouTube! 🎬**
