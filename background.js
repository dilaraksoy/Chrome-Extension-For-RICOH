
chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function(tabs) {
    // and use that tab to fill in out title and url
    var tab = tabs[0];

    
});

let i=0;
  var toggle = false;
  chrome.browserAction.onClicked.addListener(function(tab) {
    toggle = !toggle;
    if(toggle){
        alert("The extension is on!")
        chrome.tabs.query({
            active: true,
            lastFocusedWindow: true
        }, function(tabs) {
            // and use that tab to fill in out title and url
            var tab = tabs[0];
            var mySiteUrl='https://ricohspaces.app/en/home';
            alert(tab);
              if(tab.url===mySiteUrl){
                
                alert("The extension is working!");
                chrome.tabs.executeScript(null,{file:'./foreground.js'})  ;
                
                
              }
              else{
                 
                  if(i===0){
                      alert("This extension is just for RICOH!");
                  };
                  i=1;
                  
              }
        });
          var mySiteUrl='https://ricohspaces.app/en/home';
          
          
    
      
      chrome.browserAction.setIcon({path: "./icon.png", tabId:tab.id});
      
    }
    else{
      chrome.browserAction.setIcon({path: "./disable.png", tabId:tab.id});
      chrome.tabs.executeScript(tab.id, {code:"alert('extension is off')"});
      
    }
  });
  