# OSC-Node

[Raspberry Pi](https://www.raspberrypi.org/) video player controlled by [QLab](http://figure53.com/qlab/) over [OSC](http://opensoundcontrol.org/) written in [Node.js](https://nodejs.org/en/) using [Omxplayer](https://elinux.org/Omxplayer).

![QLab screenshot with OSC commands](screenshot.png)

## Install Raspbian

Install the latest [Raspbian Stretch Lite](https://www.raspberrypi.org/downloads/raspbian/) on your SD card using the [Raspberry Pi Imager](https://www.raspberrypi.org/downloads/).

### Setup SSH Access

Create an empty file in the root of the SD card named `ssh` (without dot or extension).

    $ touch /Volumes/boot/ssh

## Install OSC-Node

SSH into your Pi and excecute:

    $ sudo apt-get install -y git
    $ git clone https://github.com/marsvaardig/osc-node.git osc-node && cd $_
    $ sh install.sh
    
### Enable AFP

Open the Netatalk config file
    
    $ sudo nano /etc/netatalk/afp.conf

To allow Netatalk to connect to /home/pi, all you have to do is uncomment two lines:
    
    [Homes]
    basedir regex = /home

Restart Netatalk with

    sudo systemctl restart netatalk

## Setup QLab

### Network

Network Cue Destionation Patches:

- Destination: IP address of the Raspberry Pi
- Port: 57121

### OSC message

Available OSC addresses & argements:

- `/play big_buck_bunny.mp4` or `/play /mnt/usb/my-video.mp4`
- `/loop big_buck_bunny.mp4` or `/loop /mnt/usb/my-video.mp4`
- `/stop`
- `/pause` (pause & resume)
- `/cmd "sudo reboot"`

## Access your Pi home directory

Connect from your Mac with a simple command:

`open afp://pi:raspberry@192.168.xxx.xxx`

Or use Finder > Connect to Server
