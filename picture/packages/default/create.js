const nimbella = require('nim');
const redis = nimbella.redis()
const uuid = require('uuid');

//what s my api?
//Call / create and it will store random value under some  random key.

async function main(args) {
  const key = uuid.v4();
  const value = JSON.stringify(args.value || {} )
  const ret = await redis.setAsync(key, value);
  return {
    status: ret,
    id: key
  }
}
  