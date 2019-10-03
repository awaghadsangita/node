/**************************************************************************************************************
 * @purpose :demonstrate event and event emitter
 * 
 * @author  :sangita awaghad
 * @version :1.0
 * @since   :25-08-2019
 * 
 **************************************************************************************************************/
const event=require('events');
const emitter=new event.EventEmitter();
//simple example start
emitter.on("myEvent",function(){
    console.log(`My Event fires`);
});

emitter.emit('myEvent');
//simple example end
 
let username="sangita";
let pwd="12345";
emitter.on("userLogin",function(username,pwd){
    console.log(`User ${username} is Loged in`);
});

emitter.emit('userLogin',username,pwd);

username="satish";
pwd="12345";
emitter.emit('userLogin',username,pwd);

//emitter once
username="sita";
pwd="12345";
emitter.once("userSignIn",function(username,pwd){
    console.log(`User ${username} is Signed in`);
});

emitter.emit('userSignIn',username,pwd);

username="nita";
pwd="12345";
emitter.emit('userSignIn',username,pwd);//In once not executed this line

//listenerCount(emitter, eventName)
class MyEmitter extends  event{};
const myEmitter = new MyEmitter();
myEmitter.on('events', () => {
    // console.log("events one");
});
myEmitter.on('events', () => {
    // console.log("event two");
});
console.log(emitter.listenerCount(myEmitter, 'events'));

