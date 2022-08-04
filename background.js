

chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query(
    {
      active: true,
      lastFocusedWindow: true,
    },
    function (tabs) {
      var tab = tabs[0];
      var mySiteUrl = "https://ricohspaces.app/en/home";
      if (
        tab.url != mySiteUrl &&
        tab.url.startsWith("https://ricohspaces.app/en/")
      ) {
        alert("Please go to Home page!");
        chrome.runtime.reload();
      } else if (tab.url === mySiteUrl) {
        

        chrome.browserAction.setPopup({ popup: "./popup.html" });
        chrome.tabs.executeScript(null, { file: "./foreground.js" });
      } else if (
        tab.url != mySiteUrl &&
        !tab.url.startsWith("https://ricohspaces.app/en/")
      ) {
        alert("This extension is just for RICOH!");
        chrome.runtime.reload();
      }
    }
  );
});
