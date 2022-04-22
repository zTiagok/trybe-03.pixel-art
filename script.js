document.querySelector('#board-size').value = 5

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

  for (let index = 1; index < color.length; index += 1)
  {
    let randColor1 = Math.round(Math.random()*225)
    let randColor2 = Math.round(Math.random()*225)
    let randColor3 = Math.round(Math.random()*225)

    color[index].style.backgroundColor = "rgba("+randColor1+", "+randColor2+', '+randColor3+")"

  }
  // color[1].style.backgroundColor = "rgba("+randColor1+", "+randColor2+', '+randColor3+")"
  // color[2].style.backgroundColor = "rgba("+randColor1+", "+randColor2+', '+randColor3+")"
  // color[3].style.backgroundColor = "rgba("+randColor1+", "+randColor2+', '+randColor3+")"




}

function verifyPixelBoard()
{
  // FAZ ALGUMAS VERIFICAÇÕES DENTRO DO 'PIXEL-BOARD'

  const element = document.querySelector('#pixel-board')
  const child = element.children
  const input = document.querySelector('#board-size')

  for (let index = 0; index < child.length; index += 1)
  {

    if (child[index].className !== "pixel")
    {

      child[index].className = "pixel"
    }
  } 

  if (input.value >= 5 && input.value <= 50)
  {

    let size = parseInt(input.value) * 42
    element.style.width = size+'px'
    element.style.height = size+'px'
  }
  else if (input.value < 5)
  {

    element.style.width = (5 * 42)+'px'
    element.style.height = (5 * 42)+'px'
  }
  else if (input.value > 50)
  {

    element.style.width = (50 * 42)+'px'
    element.style.height = (50 * 42)+'px'    
  }

  
  // console.log(parseInt(input.value));
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
  const element2 = document.querySelector('#pixel-board')
  const child = document.querySelectorAll('.pixel')

    if (element.value < 1)
    {

      alert('Board inválido!')
      element.value = ""
    }
    else
    {

      for (let index = 0; index < child.length; index += 1)
        {
          
        element2.removeChild(child[index])
        }
      if (element.value >= 5 && element.value <= 50)
      {

        createPixel(element.value * element.value)
      }
      else if (element.value < 5)
      {

        createPixel(5 * 5)
      }
      else if (element.value > 50)
      {

        createPixel(50 * 50)
      }
      
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


document.querySelector('#board-size').value = clear