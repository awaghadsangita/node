/*************************************************************************************************
 * @purpose	:program to demonstrat asyn/await.
 * 
 * @author	:sangita awaghad
 * @version	:1.0
 * @since	:01-08-2019
 * 
 **************************************************************************************************/
function who() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('sangita');
      }, 2000);
    });
  }
  
//   async function msg() {
//     const msg = await scaryClown();
//     console.log('Message:', msg);
//   }
  
//   msg(); // Message: 🤡 <-- after 2 seconds
function what() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Mi');
      }, 300);
    });
  }
  
  function where() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('in the shadows');
      }, 500);
    });
  }
  
  async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();
  
    console.log(`${ a } ${ b } ${ c }`);
  }
  
  msg();