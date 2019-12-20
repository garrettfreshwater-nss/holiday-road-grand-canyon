
const directionComponent = (direction) => {
debugger
    return `
  
${direction.instructions.map(instruction => `

<div class="direction__name">${instruction.text}</div>

`).join("")
}
  
  
  `
}


export default directionComponent