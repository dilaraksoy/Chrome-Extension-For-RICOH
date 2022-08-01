chrome.tabs.query(
  {
    active: true,
    lastFocusedWindow: true,
  },
  function (tabs) {
    var tab = tabs[0];
  }
);

let i = 0;
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query(
    {
      active: true,
      lastFocusedWindow: true,
    },
    function (tabs) {
      // and use that tab to fill in out title and url
      var tab = tabs[0];
      var mySiteUrl = "https://ricohspaces.app/en/home";
      if (tab.url === mySiteUrl) {
        alert("Please click again to enter your surname!");

        chrome.browserAction.setPopup({ popup: "./popup.html" });
        chrome.tabs.executeScript(null, { file: "./foreground.js" });
      } else {
        if (i === 0) {
          alert("This extension is just for RICOH!");
        }
        i = 1;
      }
    }
  );
  var mySiteUrl = "https://ricohspaces.app/en/home";

  chrome.browserAction.setIcon({ path: "./icon.png", tabId: tab.id });
});
