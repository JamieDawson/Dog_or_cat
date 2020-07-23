function main(args) {
    let name = args.for || 'stranger'
    let voteFor = 'you voted for  ' + name + '!'
    console.log(voteFor)
    return {"body": voteFor}
  }
  