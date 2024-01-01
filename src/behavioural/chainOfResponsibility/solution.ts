/**
 * mine- solution
 * like express, handler method recieves request object
 *  and next methods in pipeline recieves modified request object
 */

/**
 * actual solution
 * a better approach
 *  class Handler[ handle ] --> Handler [ handle ] -- XX end of pipeline
 *  like a linked list
 */

export abstract class Handler {
  next: Handler;
  // constructor(next: Handler){
  //   this.next = next;
  // }
  handle(req: HTTPRequest) {
    this.doHandle(req);
    if (this.next && typeof this.next.handle === "function") {
      this.next.handle(req);
    }
  }
  abstract doHandle(req: HTTPRequest): void;
}

export class HTTPRequest {
  private username: string;
  private password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
  getUserName() {
    return this.username;
  }

  getPassword() {
    return this.password;
  }
}

export class Authenticator extends Handler {
  public doHandle(request: HTTPRequest): boolean {
    console.log("authenticating");
    if (request.getUserName() === "user" && request.getPassword() === "123") {
      return true;
    }
    return false;
  }
}

export class WebServer extends Handler {
  public doHandle(request: HTTPRequest) {
    console.log("handling request");
  }
}

export class Logger extends Handler {
  public doHandle(request: HTTPRequest) {
    console.log("loging request url with params");
  }
}
