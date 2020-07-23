
  const nimbella = require('nim');
  const redis = nimbella.redis()
 
  async function main(args) {
    const dog = await redis.getAsync("dog"); //increment a key dog or cat
    const cat = await redis.getAsync("cat");
   

    return {
      "body": { "dog": dog, "cat": cat
    } 
  } 
  }
