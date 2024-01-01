/* 
  problem WebServer tied to method, that too hardcoded
  extending requires changes to classes
*/

// class HTTPRequest {
//   private username: string;
//   private password: string;

//   constructor(username: string, password: string) {
//     this.username = username;
//     this.password = password;
//   }
//   getUserName() {
//     return this.username;
//   }

//   getPassword() {
//     return this.password;
//   }
// }

// class Authenticator {
//   public authenticate(request: HTTPRequest): boolean {
//     console.log("authenticating");
//     if (request.getUserName() === "user" && request.getPassword() === "123") {
//       return true;
//     }
//     return false;
//   }
// }

// class WebServer {
//   public handle(request: HTTPRequest) {
//     console.log("handling request");

//     const authenticator = new Authenticator();
//     authenticator.authenticate(request);
//     // encryption
//     // logger
//     // whatever...
//   }
// }

// class Logger {
//   public log() {
//     console.log("logger");
//   }
// }
