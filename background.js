// Open the Naukri page when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.tabs.create({ url: "https://www.naukri.com/jobs-in-india" });
});

// Open the Naukri page every time Chrome starts
chrome.runtime.onStartup.addListener(() => {
  chrome.tabs.create({ url: "https://www.naukri.com/jobs-in-india" });
});
