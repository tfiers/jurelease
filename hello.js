
const fs = require('fs')
const TOML = require('@iarna/toml')

const path = "/root/.julia/dev/PkgGraph/Project.toml"
const text = fs.readFileSync(path, "utf-8")
const obj = TOML.parse(text)
console.log(obj)
console.log(TOML.stringify(obj))
// This is not entirely idempotent.
// It makes
//      authors = ["…"]
// into
//      authors = [ "…" ]
// (Rest seems same)
