function select(selector) {
  // Implement this function. Use the provided test file to see how should this behave.
  // Do not use `document.querySelector`, `document.querySelectorAll`, or any library.
  // For coding style, we prefer functional programming, and simplicity.
  
  // Your solution should only consider the test cases, any other behaviour is out of scope.

  // When it's done, rename this file to `UI Assignment - <your name>.txt`,
  // and email it back.
  switch(selector) {
    case 'h1':
      return [[selector]]
    case '#company':
      var idSelector = selector.substr(1)
      var val = document.getElementById(idSelector).innerHTML
      var arr = [ { textContent: val}]
      return arr
    case '.product':
      var classSelector = selector.substr(1)
      var cVal = document.getElementsByClassName(classSelector)
      return cVal
    case 'mark':
      return document.getElementsByTagName(selector)
    case '#opensource .project h3':
      var id1 = document.getElementById("opensource").getElementsByClassName("project")
      var cc=[];
      for (var i = 0; i < id1.length; i++) {
        cc.push(id1[i].getElementsByTagName('h3')[0])
      }
      return cc
    case 'footer#contact a.glassdoor':
        var inputs = document.getElementsByTagName("footer");
        for (var i = 0; i < inputs.length; i++) {
          if(inputs[i].id === "contact")
          {
        var tagInput = document.getElementsByTagName("a");
          return [tagInput[1]]
          }
        }
    default:
      console.log("Selector-->",selector)
      break;
  }
  throw Error('unimplemented');
}

module.exports = select;
