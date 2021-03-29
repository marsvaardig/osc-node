var osc = require("osc"),
  cmd = require("node-cmd"),
  Omx = require("node-omxplayer"),
  omxplayer = Omx();

/****************
 * OSC Over UDP *
 ****************/

var getIPAddresses = function () {
  var os = require("os"),
    interfaces = os.networkInterfaces(),
    ipAddresses = [];

  for (var deviceName in interfaces) {
    var addresses = interfaces[deviceName];
    for (var i = 0; i < addresses.length; i++) {
      var addressInfo = addresses[i];
      if (addressInfo.family === "IPv4" && !addressInfo.internal) {
        ipAddresses.push(addressInfo.address);
      }
    }
  }

  return ipAddresses;
};

var udpPort = new osc.UDPPort({
  localAddress: "0.0.0.0",
  localPort: 57121, // sets the port number used for osc/qlab.
});

udpPort.on("ready", function () {
  var ipAddresses = getIPAddresses();

  console.log("Listening for OSC over UDP.");
  ipAddresses.forEach(function (address) {
    console.log(" Host:", address + ", Port:", udpPort.options.localPort);
  });

  // Make the screen blank
  cmd.run("/opt/vc/bin/tvservice -p");
});

udpPort.on("message", function (oscMessage) {
  if (oscMessage.address == "/play") {
    if (
      oscMessage.args[1] == "both" ||
      oscMessage.args[1] == "hdmi" ||
      oscMessage.args[1] == "local" ||
      oscMessage.args[1].includes("alsa")
    ) {
      omxplayer.newSource(oscMessage.args[0], oscMessage.args[1], false, 100);
    } else {
      omxplayer.newSource(oscMessage.args[0], "both", false, 100);
    }
  }

  if (oscMessage.address == "/loop") {
    if (
      oscMessage.args[1] == "both" ||
      oscMessage.args[1] == "hdmi" ||
      oscMessage.args[1] == "local" ||
      oscMessage.args[1].includes("alsa")
    ) {
      omxplayer.newSource(oscMessage.args[0], oscMessage.args[1], true, 100);
    } else {
      omxplayer.newSource(oscMessage.args[0], "both", true, 100);
    }
  }

  if (oscMessage.address == "/pause" && omxplayer.running) {
    omxplayer.pause();
  }

  if (oscMessage.address == "/stop" && omxplayer.running) {
    omxplayer.quit();
  }

  if (oscMessage.address == "/cmd") {
    cmd.run(oscMessage.args[0]);
  }
});

udpPort.on("error", function (err) {
  console.log(err);
});

udpPort.open();
