
const ADJECTIVES =[
    'daffy' , 'discreet','callous','labored','snotty','impressive','outrageous','roomy','futuristic'
]

const ANIMALS =[
    'hamster','okapi','muskrat','tapir','lion','boar','coati','hyena','basilisk',
]

function genRandomUsername(){
    const adj = ADJECTIVES[Math.floor(Math.random()*9)]
    const obj = ANIMALS[Math.floor(Math.random()*9)]
    return `${adj}-${obj}`
}

module.exports = {
    genRandomUsername
}