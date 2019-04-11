const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

const startUrl = process.env.ELECTRON_START_URL || url.format({
  pathname: path.join(__dirname, '../build/index.html'),
  protocol: 'file:',
  slashes: true,
});

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ height: 600, width: 800 });

  mainWindow.loadURL(startUrl);

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow();
  }
})