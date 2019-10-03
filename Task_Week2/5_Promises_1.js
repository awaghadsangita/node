/*************************************************************************************************
 * @purpose	:program to demonstrat promises.
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:01-08-2019
 * 
 **************************************************************************************************/


const promise=new Promise(function(resolve, reject) {
      const value=Math.random();
      if(value<=1/3)
        resolve(value);
      else if(value<=2/3)
        reject(`value <=2/3 (reject)`);
      else
        throw 'value>2/3(throw)';
    
  });
  promise
    .then(value=> {
      console.log('Got Value!', value);
    })
    .catch(error=> {
      console.log('Caught an error!', error);
    });