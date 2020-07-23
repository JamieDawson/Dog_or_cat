const nimbella = require('nim');
const redis = nimbella.redis()
const uuid = require('uuid');

//what s my api?
//Get / Get id and get value stored for id.

async function main(args) {
  const key = args.id;
 
  if (key) {
  const ret = await redis.getAsync(key);
  const value = JSON.parse(ret)
  return {
    body: value
  } 
} else {
      return {
          body: {
              error: 'you did not provide a key'
          }
      }
  }
}