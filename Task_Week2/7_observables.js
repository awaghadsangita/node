/*************************************************************************************************
 * @purpose	:program to demonstrat observable
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:01-08-2019
 * 
 **************************************************************************************************/
const{Observable} =require('rxjs');
 
const observable = new Observable(observer => {
  const value=Math.random();
  if(value<=1/3)
    observer.next(value);
  else if(value<=2/3)
    observer.error(`value <=2/3 (error)`);
  else
    throw 'value>2/3(throw)';
    observer.complete();
});
 
console.log('just before subscribe');
observable.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('cought error: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');