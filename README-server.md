# Commands

## Basis

- debian basiertes Linux System (hier: Ubuntu)

## Software

### nginx (reverse proxy)

#### Installation

`apt install nginx`

#### Konfiguration

_/etc/nginx/sites-enabled/blockly-oop.config_:
```
server {
    # unverschlüsselte Verbindungen
    listen 80 default_server;
    server_name _;
    # auf https umleiten
    return 301 https://$host$request_uri;
}

server {
    # verschlüsselte Verbindungen
    listen 443 ssl;
    server_name praktomat.informatik.unibw-muenchen.de;

    # SSL settings
    ssl_certificate     /etc/ssl/certs/praktomat.Informatik.UniBw-Muenchen.de.2024.pem;
    ssl_certificate_key /etc/ssl/private/praktomat.Informatik.UniBw-Muenchen.de.2023.nopw.key;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
    ssl_ciphers 'EECDH+AESGCM:EDH+AESGCM:AES256+EECDH:AES256+EDH';
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    # reverse proxy settings
    location / {
        # 5173 port des NodeJS Servers
        proxy_pass http://localhost:5173;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # upgrade der Verbindung auf Websockets
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Dienst automatisch starten:
`systemctl enable nginx`

Dienst starten:
`systemctl start nginx`


### nodejs

#### Installation

`apt install nodejs`

### pm2 (Prozessmanager)

#### Installation

`npm install pm2 -g`

#### Konfiguration

_/etc/systemd/system/multi-user.target.wants/pm2.service_:
```
[Unit]
Description=PM2 process manager
Documentation=https://pm2.keymetrics.io/
After=network.target

[Service]
Type=forking
User=praktomat
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
Environment=PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/snap/bin:/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin
Environment=PM2_HOME=/home/praktomat/.pm2
PIDFile=/home/praktomat/.pm2/pm2.pid
Restart=on-failure

ExecStart=/usr/lib/node_modules/pm2/bin/pm2 resurrect
ExecReload=/usr/lib/node_modules/pm2/bin/pm2 reload all
ExecStop=/usr/lib/node_modules/pm2/bin/pm2 kill

[Install]
WantedBy=multi-user.target
```

Dienst automatisch starten:
`systemctl enable pm2`

Dienst starten:
`systemctl start pm2`

### blockly-oop

#### Installation

1. zip-Datei auf Server kopieren
2. zip-Datei entpacken
3. `npm install`

#### Konfiguration

Als Dienst im pm2 einrichten:
`pm2 start "npm run dev" --name blockly-oop`

pm2 Konfiguration speichern (Autostart)
`pm2 save`

## Ergebnis/Status:

`pm2 ls`:
```
┌────┬────────────────────┬──────────┬──────┬───────────┬──────────┬──────────┐
│ id │ name               │ mode     │ ↺    │ status    │ cpu      │ memory   │
├────┼────────────────────┼──────────┼──────┼───────────┼──────────┼──────────┤
│ 0  │ blockly-oop        │ fork     │ 0    │ online    │ 0%       │ 51.6mb   │
└────┴────────────────────┴──────────┴──────┴───────────┴──────────┴──────────┘
```

`systemctl status pm2`:
```
● pm2.service - PM2 process manager
     Loaded: loaded (/etc/systemd/system/pm2.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2024-06-07 08:47:08 UTC; 5 days ago
[...]
```

`systemctl status nginx`:
```
● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2024-06-07 08:47:07 UTC; 5 days ago
[...]
```