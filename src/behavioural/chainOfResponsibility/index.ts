import { HTTPRequest, Authenticator, Logger, WebServer } from "./solution";

const server = new WebServer();
const s2 = new WebServer();
const auth = new Authenticator();
const log = new Logger();
// const handler = new Handler();

// handler.next = server;
// s2.next = auth;
server.next = auth;
auth.next = log;

// handler.handle(new HTTPRequest("user", "123"));
server.handle(new HTTPRequest("user", "123"));
