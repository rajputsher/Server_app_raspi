# Server to control LEDs using Google assistant

Followed the steps in this [tutorial](https://www.instructables.com/Google-Home-Controlled-LEDs/). Exported as [Server.pdf](https://github.com/rajputsher/Server_app_raspi/blob/master/Server.pdf) file.


## Running the server at each reboot.

1. Edit the file etc/rc.local
    ```
    sudo nano etc/rc.local
    ```

2. Add the following line at the end of the file:
    ```
    cd /home/..../webApp
    DEBUG=webapp:* npm start  & 
    exit 0
    ```

## To send commands using app

1. Download the app [HTTP Request Shortcuts](https://play.google.com/store/apps/details?id=ch.rmy.android.http_shortcuts&hl=de&gl=US)
2. Import [this](https://github.com/rajputsher/Server_app_raspi/blob/master/LED_Strips.json) json file to the app. Make sure the raspberry-pi IP is used in the HTTP request.
