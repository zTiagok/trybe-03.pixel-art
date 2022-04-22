function footerConfig()
{
  // CONFIGURAÇÕES DO FOOTER
  
  const element = document.querySelector('footer')

  element.innerHTML = 'Developed by Tiago Braga Costa <p> Total de Visitas: </p>'
}

function allFourColors()
{

  // INSERE AS CORES UTILIZÁVEIS

  const color = document.getElementsByClassName('color')

  color[0].style.backgroundColor = "black"
  color[1].style.backgroundColor = "blue"
  color[2].style.backgroundColor = "green"
  color[3].style.backgroundColor = "orange"

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
footerConfig()
// //////////////