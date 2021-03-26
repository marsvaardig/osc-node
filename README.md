# OSC-Node

[Raspberry Pi](https://www.raspberrypi.org/) video player controlled by [QLab](http://figure53.com/qlab/) over [OSC](http://opensoundcontrol.org/) written in [Node.js](https://nodejs.org/en/) using [Omxplayer](https://elinux.org/Omxplayer).

![QLab screenshot with OSC commands](screenshot.png)

## Install Raspbian

Install the latest [Raspberry Pi OS](https://www.raspberrypi.org/software/operating-systems/) on your SD card using the [Raspberry Pi Imager](https://www.raspberrypi.org/software/).

### Setup SSH Access

Create an empty file in the root of the SD card named `ssh` (without dot or extension).

    $ touch /Volumes/boot/ssh

## Install OSC-Node

SSH into your Pi and excecute:

    $ sudo apt-get install -y git
    $ git clone https://github.com/marsvaardig/osc-node.git osc-node && cd $_
    $ sh install.sh
    
## Copy videos onto Pi using AFP

Connect from your Mac with a simple command:

`open afp://pi:raspberry@{ip address}`

Or use Finder > Connect to Server

## Setup QLab

### Network

Network Cue Destionation Patches:

- Destination: IP address of the Raspberry Pi
- Port: 57121

### OSC message

Available OSC addresses & argements:

- `/play /home/pi/videos/big_buck_bunny.mp4`
- `/loop /home/pi/videos/big_buck_bunny.mp4`
- `/stop`
- `/pause` (pause & resume)
- `/cmd "{command to execute}"`


