// can use template here
/**
 *  Framework - do not touch part
 */

export class Button {
  command: Command;
  constructor(command: Command) {
    this.command = command;
  }
  click() {
    this.command.execute();
  }
}

abstract class Command {
  abstract execute(...args: any[]): void;
}

/**
 * our code
 *  creating a server and command which extends command base
 */

export class BlackAndWhiteCommand extends Command {
  execute() {
    console.log("black and white command");
  }
}

export class CropCommand extends Command {
  execute() {
    console.log("crop command");
  }
}

export class CompositeCommand implements Command {
  commands: Command[];
  constructor(commands: Command[] = []) {
    this.commands = commands;
  }

  add(command: Command) {
    this.commands.push(command);
  }
  execute() {
    console.log("composite command");
    for (let command of this.commands) {
      command.execute();
    }
  }
}
