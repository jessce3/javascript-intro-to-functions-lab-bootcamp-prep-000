function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

var string = "I love you, Grandma"

function sayHiToGrandma(string) {
	if (string === string.toLowerCase()) {
	   return "I can't hear you!"
  } else if (string === "I love you, Grandma") {
      return ("I love you, too")
  } else (string === string.toUpperCase()) {
      return "YES INDEED!"
  }
}
