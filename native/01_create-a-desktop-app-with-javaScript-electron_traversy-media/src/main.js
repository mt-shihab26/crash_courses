const path = require("node:path");
const { app, BrowserWindow, Menu } = require("electron");

const is_mac = process.platform === "darwin";
const is_dev = process.env.NODE_ENV === "dev";

const create_main_window = () => {
    const win = new BrowserWindow({
        title: "Image Resizer",
        width: is_dev ? 1000 : 500,
        height: 600,
    });

    if (is_dev) {
        win.webContents.openDevTools();
    }

    win.loadFile(path.join(__dirname, "./renderer/index.html"));
};

const create_about_window = () => {
    const win = new BrowserWindow({
        title: "About Image Resizer",
        width: 300,
        height: 300,
    });

    win.loadFile(path.join(__dirname, "./renderer/about.html"));
};

app.whenReady().then(() => {
    create_main_window();

    const menu = Menu.buildFromTemplate([
        ...(is_mac
            ? [
                  {
                      label: app.name,
                      submenu: [
                          {
                              label: "About",

                              click: create_about_window,
                          },
                      ],
                  },
              ]
            : []),
        {
            role: "fileMenu",
        },
        ...(!is_mac
            ? [
                  {
                      label: "Help",
                      submenu: [
                          {
                              label: "About",
                              click: create_about_window,
                          },
                      ],
                  },
              ]
            : []),
    ]);

    Menu.setApplicationMenu(menu);

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) create_main_window();
    });
});

app.on("window-all-closed", () => {
    if (!is_mac) app.quit();
});
