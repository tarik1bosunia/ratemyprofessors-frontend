# installs fnm (Fast Node Manager)
curl -fsSL https://fnm.vercel.app/install | bash
# activate fnm
source ~/.bashrc
# download and install Node.js
fnm use --install-if-missing 20
# verifies the right Node.js version is in the environment
node -v # should print `v20.17.0`
# verifies the right npm version is in the environment
npm -v # should print `10.8.2`

- Install PM2 (If required)
```sh
sudo npm install -g pm2

- Add PM2 Process on Startup
```sh
sudo pm2 startup
```
- Verify Nginx is Active and Running
```sh
sudo service nginx status
```
- Verify Web Server Ports are Open and Allowed through Firewall
```sh
sudo ufw status verbose
```
- Exit from Remote Server
```sh
exit

tata@csecdp:~$ pm2 startup

                        -------------

__/\\\\\\\\\\\\\____/\\\\____________/\\\\____/\\\\\\\\\_____
 _\/\\\/////////\\\_\/\\\\\\________/\\\\\\__/\\\///////\\\___
  _\/\\\_______\/\\\_\/\\\//\\\____/\\\//\\\_\///______\//\\\__
   _\/\\\\\\\\\\\\\/__\/\\\\///\\\/\\\/_\/\\\___________/\\\/___
    _\/\\\/////////____\/\\\__\///\\\/___\/\\\________/\\\//_____
     _\/\\\_____________\/\\\____\///_____\/\\\_____/\\\//________
      _\/\\\_____________\/\\\_____________\/\\\___/\\\/___________
       _\/\\\_____________\/\\\_____________\/\\\__/\\\\\\\\\\\\\\\_
        _\///______________\///______________\///__\///////////////__


                          Runtime Edition

        PM2 is a Production Process Manager for Node.js applications
                     with a built-in Load Balancer.

                Start and Daemonize any application:
                $ pm2 start app.js

                Load Balance 4 instances of api.js:
                $ pm2 start api.js -i 4

                Monitor in production:
                $ pm2 monitor

                Make pm2 auto-boot at server restart:
                $ pm2 startup

                To go further checkout:
                http://pm2.io/


                        -------------

[PM2] Init System found: systemd
[PM2] To setup the Startup Script, copy/paste the following command:
sudo env PATH=$PATH:/home/tata/.local/share/fnm/node-versions/v20.17.0/installation/bin /home/tata/.local/share/fnm/node-versions/v20.17.0/installation/lib/node_modules/pm2/bin/pm2 startup systemd -u tata --hp /home/tata
tata@csecdp:~$ sudo env PATH=$PATH:/home/tata/.local/share/fnm/node-versions/v20.17.0/installation/bin /home/tata/.local/share/fnm/node-versions/v20.17.0/installation/lib/node_modules/pm2/bin/pm2 startup systemd -u tata --hp /home/tata

                        -------------

__/\\\\\\\\\\\\\____/\\\\____________/\\\\____/\\\\\\\\\_____
 _\/\\\/////////\\\_\/\\\\\\________/\\\\\\__/\\\///////\\\___
  _\/\\\_______\/\\\_\/\\\//\\\____/\\\//\\\_\///______\//\\\__
   _\/\\\\\\\\\\\\\/__\/\\\\///\\\/\\\/_\/\\\___________/\\\/___
    _\/\\\/////////____\/\\\__\///\\\/___\/\\\________/\\\//_____
     _\/\\\_____________\/\\\____\///_____\/\\\_____/\\\//________
      _\/\\\_____________\/\\\_____________\/\\\___/\\\/___________
       _\/\\\_____________\/\\\_____________\/\\\__/\\\\\\\\\\\\\\\_
        _\///______________\///______________\///__\///////////////__


                          Runtime Edition

        PM2 is a Production Process Manager for Node.js applications
                     with a built-in Load Balancer.

                Start and Daemonize any application:
                $ pm2 start app.js

                Load Balance 4 instances of api.js:
                $ pm2 start api.js -i 4

                Monitor in production:
                $ pm2 monitor

                Make pm2 auto-boot at server restart:
                $ pm2 startup

                To go further checkout:
                http://pm2.io/


                        -------------

[PM2] Init System found: systemd
Platform systemd
Template
[Unit]
Description=PM2 process manager
Documentation=https://pm2.keymetrics.io/
After=network.target

[Service]
Type=forking
User=tata
LimitNOFILE=infinity
LimitNPROC=infinity
LimitCORE=infinity
Environment=PATH=/run/user/1001/fnm_multishells/136850_1725955216144/bin:/home/tata/.local/share/fnm:/run/user/1001/fnm_multishells/136841_1725955201354/bin:/home/tata/.local/share/fnm:/home/tata/.local/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin:/home/tata/.local/share/fnm/node-versions/v20.17.0/installation/bin:/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin
Environment=PM2_HOME=/home/tata/.pm2
PIDFile=/home/tata/.pm2/pm2.pid
Restart=on-failure

ExecStart=/home/tata/.local/share/fnm/node-versions/v20.17.0/installation/lib/node_modules/pm2/bin/pm2 resurrect
ExecReload=/home/tata/.local/share/fnm/node-versions/v20.17.0/installation/lib/node_modules/pm2/bin/pm2 reload all
ExecStop=/home/tata/.local/share/fnm/node-versions/v20.17.0/installation/lib/node_modules/pm2/bin/pm2 kill

[Install]
WantedBy=multi-user.target

Target path
/etc/systemd/system/pm2-tata.service
Command list
[ 'systemctl enable pm2-tata' ]
[PM2] Writing init configuration in /etc/systemd/system/pm2-tata.service
[PM2] Making script booting at startup...
[PM2] [-] Executing: systemctl enable pm2-tata...
Created symlink /etc/systemd/system/multi-user.target.wants/pm2-tata.service → /etc/systemd/system/pm2-tata.service.
[PM2] [v] Command successfully executed.
+---------------------------------------+
[PM2] Freeze a process list on reboot via:
$ pm2 save

[PM2] Remove init script via:
$ pm2 unstartup systemd
tata@csecdp:~$ pm2 save
[PM2] Spawning PM2 daemon with pm2_home=/home/tata/.pm2
[PM2] PM2 Successfully daemonized
[PM2] Saving current process list...
[PM2][WARN] PM2 is not managing any process, skipping save...
[PM2][WARN] To force saving use: pm2 save --force

sudo vim /etc/nginx/sites-available/rateteach.ru.ac.bd
sudo ln -s /etc/nginx/sites-available/rateteach.ru.ac.bd /etc/nginx/sites-enabled/rateteach.ru.ac.bd