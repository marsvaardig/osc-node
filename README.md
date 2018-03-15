# OSC-Node

Video player controlled by [OSC](http://opensoundcontrol.org/) using [QLab](http://figure53.com/qlab/) for the [Raspberry Pi](https://www.raspberrypi.org/) in [Node.js](https://nodejs.org/en/).

![QLab screenshot with OSC commands](screenshot.png)

## Install Raspbian

Install the latest [Raspbian Stretch Lite](https://www.raspberrypi.org/downloads/raspbian/) on your SD card.

### Setup SSH Access

Create an empty file in the root of the SD card named `ssh` (without dot or extension).

    $ touch /Volumes/boot/ssh

## Install OSC-Node

SSH into your Pi and excecute:

    $ sudo apt-get install -y git
    $ git clone https://github.com/tomjanssens/osc-node.git osc-node && cd $_
    $ sh install.sh

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

`open afp://123.456.78.9`

Or use Finder > Connect to Server
