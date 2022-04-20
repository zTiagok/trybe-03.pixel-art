function allFourColors()
{

  const color = document.getElementsByClassName('color')
  const backgroundColor = [color[0], color[1], color[2], color[3]]


  for (let index = 0; index < backgroundColor.length; index += 1)
  {
    
    if (backgroundColor[index].style.backgroundColor === backgroundColor[index].style.backgroundColor)
    {

      backgroundColor[0].style.backgroundColor = "black"
      backgroundColor[1].style.backgroundColor = "blue"
      backgroundColor[2].style.backgroundColor = "green"
      backgroundColor[3].style.backgroundColor = "orange"
    }
  }
}


// CALL FUNCTIONS
allFourColors()

// //////////////