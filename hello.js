
const fs = require('fs')

// From /root/.julia/dev/PkgGraph/Project.toml
const path = "test/Project.toml"
const text = fs.readFileSync(path, "utf-8")

// Matches a line `version = "…"`, but w/ arbitrary whitespace.
const re = /^\s*version\s*=\s*"(.*)"\s*$/m
const m = text.match(re)
const matchedLine = m[0]
const currentVersion = m[1]
const versionToRelease = currentVersion.split('-', limit=1)[0]
const newLine = matchedLine.replace(currentVersion, versionToRelease)
const newText = text.replace(matchedLine, newLine)

fs.writeFileSync("test/out/Project.toml", newText)
