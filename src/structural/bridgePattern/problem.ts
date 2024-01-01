//problem
// repeated implentation of features
// classes growing in two directions
// remoteControl --> sony
//  ||
//  advandedControl -->sony

// we created two classes to support single brand

abstract class RemoteConrtol {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

abstract class AdvancedRemoteControl extends RemoteConrtol {
  abstract setChannel(number: number): void;
}

abstract class MovieRemoteControl extends RemoteConrtol {
  abstract play(): void;
  abstract pause(): void;
}

class SonyRemote implements RemoteConrtol {
  turnOn() {
    console.log("sony: turn on");
  }
  turnOff() {
    console.log("sony: turn off");
  }
}

class SonyAdvancedRemote implements AdvancedRemoteControl {
  turnOn() {
    console.log("sony: turn on");
  }
  turnOff() {
    console.log("sony: turn off");
  }
  setChannel() {
    console.log("sony: setting channel");
  }
}
