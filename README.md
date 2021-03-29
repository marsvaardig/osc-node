# OSC-Node

[Raspberry Pi](https://www.raspberrypi.org/) media player controlled by [QLab](http://figure53.com/qlab/) over [OSC](http://opensoundcontrol.org/) written in [Node.js](https://nodejs.org/en/) using [Omxplayer](https://elinux.org/Omxplayer).

![QLab screenshot with OSC commands](screenshot.png)

## Install Raspberry Pi OS
Install the latest [Raspberry Pi OS](https://www.raspberrypi.org/software/operating-systems/) on your SD card using the [Raspberry Pi Imager](https://www.raspberrypi.org/software/).

## Install OSC-Node

SSH into your Pi and excecute:

    $ sudo apt-get install -y git
    $ git clone https://github.com/marsvaardig/osc-node.git osc-node && cd $_
    $ sh install.sh
    
This will install OSC-Node, Omxplayer and any OSC-Node dependencies.
    
## Copy videos onto Pi using AFP

Connect from your Mac with a simple command:

`open afp://pi@{ip address}`

Or use Finder > Connect to Server

## Setup QLab

### Network

Network Cue Destionation Patches:

- Destination: IP address of the Raspberry Pi
- Port: 57121

### OSC message

Available OSC addresses & argements:

- `/play {file location} {sound interface}`
- `/loop {file location} {sound interface}`
- `/stop`
- `/pause` (pause & resume)
- `/cmd "{command to execute}"`

Sound Interfaces:
- `hdmi`
- `local`
- `both`
- `alsa{:device}`

Examples:

`/play /home/pi/videos/big_buck_bunny.mp4 both`
`/play /home/pi/videos/big_buck_bunny.mp4`
