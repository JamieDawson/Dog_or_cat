const nimbella = require('nim');
const redis = nimbella.redis()

async function main(args) {
  let name = args.for //dog or cat
  const ret = await redis.incrAsync(name);
  return {
    "body": ret
  }
}