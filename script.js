function allFourColors()
{

  const color = document.getElementsByClassName('color')
  const backgroundColor = [color[0], color[1], color[2], color[3]]

  backgroundColor[0].style.backgroundColor = "black"
  backgroundColor[1].style.backgroundColor = "blue"
  backgroundColor[2].style.backgroundColor = "green"
  backgroundColor[3].style.backgroundColor = "orange"

  //   for (let index = 0; index < backgroundColor.length; index += 1)
//   {
    
//     if (backgroundColor[index].style.backgroundColor === backgroundColor[index].style.backgroundColor)
//     {

//       backgroundColor[0].style.backgroundColor = "black"
//       backgroundColor[1].style.backgroundColor = "blue"
//       backgroundColor[2].style.backgroundColor = "green"
//       backgroundColor[3].style.backgroundColor = "orange"
//     }
//   }
//
}

function verifyPixelBoard()
{
  // FAZ ALGUMAS VERIFICAÇÕES DENTRO DO 'PIXEL-BOARD'

  const element = document.querySelector('#pixel-board')
  const child = element.children


  for (let index = 0; index < child.length; index += 1)
  {

    if (child[index].className !== "pixel")
    {

      child[index].className = "pixel"
    }
  }

  

}


function createPixel()
{
  // CRIA 25 ELEMENTOS COM CLASSNAME DE "PIXEL"


  const element = document.getElementById('pixel-board')

  for (let index = 0; index < 25; index += 1)
  {

    const tag = document.createElement('div')
    element.appendChild(tag)
    tag.style.backgroundColor = 'white'
    
  }

  verifyPixelBoard()
}




// CALL FUNCTIONS
allFourColors()
createPixel()
// //////////////