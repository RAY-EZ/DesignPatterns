// import { CloudStream, Operation, Compress, EncryptStream} from './solution';
import { CloudStream, EncryptStream, CompressStream } from "./solution";
//@ts-ignore
title.innerHTML = "Decorator Pattern";

// const stream = new CloudStream();
// const compress = new Compress();
// const encrypt = new EncryptStream();

// encrypt.next = compress;
// compress.next = stream;
// encrypt.write('sushil');

const stream = new EncryptStream(new CompressStream(new CloudStream()));
stream.write("sushil");
