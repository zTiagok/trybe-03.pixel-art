

// FAZER EVENT LISTENER PARA SELECIONAR A COR QUE DESEJA


function footerConfig()
{
  // CONFIGURAÇÕES DO FOOTER
  
  const element = document.querySelector('footer')

  element.innerHTML = 'Developed by Tiago Braga Costa - 22, Abril de 2022<p> Total de Visitas: </p>'
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


function createPixel(quantity)
{
  // CRIA 25 ELEMENTOS COM CLASSNAME DE "PIXEL"


  const element = document.getElementById('pixel-board')

  for (let index = 0; index < quantity; index += 1)
  {

    const tag = document.createElement('div')
    element.appendChild(tag)
    tag.style.backgroundColor = 'white'

  }

  verifyPixelBoard()
}


function shadeInPixel(origin)
{

  origin.target.style.boxShadow = 'inset 0px 0px 10px black' 
}


function shadeOutPixel(origin)
{

    origin.target.style.boxShadow = 'inset 0px 0px 0px black' 
}


function selectedColor(origin)
{

  const element = document.querySelectorAll('.color')
  
  for (let index = 0; index < element.length; index += 1)
  {

    element[index].className = 'color'
  }

  origin.target.className = 'color selected'
}


function paintPixel(origin)
{

  const element = document.querySelector('.selected')
  origin.target.style.backgroundColor = element.style.backgroundColor
}


function clearPixel(origin)
{

  const pixel = document.querySelectorAll('.pixel')

  for (let index = 0; index < pixel.length; index += 1)
  {

    pixel[index].style.backgroundColor = 'white'
  }

}


function generateNewBoard(origin)
{

  const element = document.querySelector('#board-size')

    if (element.value < 1 || element.value > 50)
    {

      alert('Board inválida!')
      element.value = ""
    }
    else
    {

      createPixel(element.value)
      
    }

    verifyPixelBoard()
    addEventPixel()
}

// CALL FUNCTIONS

allFourColors()
createPixel(25)
footerConfig()


// EVENT LISTENERS
const pallet = document.querySelectorAll('.color')
const clear = document.querySelector('#clear-board')
const button = document.querySelector('#generate-board')

window.onload = pallet[0].className = 'color selected'
window.onload = addEventPallet(), addEventPixel()



function addEventPixel()
{

  const pixel = document.querySelectorAll('.pixel')

  for (let index = 0; index < pixel.length; index += 1)
  {

    pixel[index].addEventListener('mouseover', shadeInPixel)
    pixel[index].addEventListener('mouseout', shadeOutPixel)
    pixel[index].addEventListener('click', paintPixel)

  }
}

function addEventPallet()
{
  for (let index = 0; index < pallet.length; index += 1)
  {

    pallet[index].addEventListener('mouseover', shadeInPixel)
    pallet[index].addEventListener('mouseout', shadeOutPixel)
    pallet[index].addEventListener('click', selectedColor)
  }
}

clear.addEventListener('click', clearPixel)
button.addEventListener('click', generateNewBoard)


