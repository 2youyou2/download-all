(function () {
    'use strict';

    var localRequire = require;

    var Electron = localRequire('electron');
    var IpcRenderer = Electron.ipcRenderer;

    IpcRenderer.on('get-entries', function() {
        var es = window.performance.getEntries();
        // es = es.map(function (e) {
        //     return e.name;
        // });

        es = JSON.stringify(es, null, 2);

        IpcRenderer.sendToHost('reply-get-entries', es);
    });
})();
