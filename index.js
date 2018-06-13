function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
  } else
  {return "There is nobody waiting to be served!"}
}

function currentLine(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    var lineArr = []
    for (var i = 0, l = katzDeliLine.length; i<l; i++) {
      lineArr.push(`${i+1}.katzDeliLine[])
    }
    
    return "The line is currently: "
  }
}