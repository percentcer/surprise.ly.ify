chrome.browserAction.onClicked.addListener(
    function( tab ) {
        var srcURL = tab.url;
        
        if ( !srcURL.match(/^https?:\/\/.*youtube.com\/watch/) ) {
            alert("must be run from a youtube.com watch page");
            return;
        }

        var dstURL = 'http://surprise.ly/v/?';

        var qstring = srcURL.split("?")[1];

        var ytid   = qstring.match(/v=([^&#]+)/)[1];

        chrome.tabs.create({ 'url' : dstURL + ytid });
    }
);
