const enemyDisplay = document.getElementById('enemyDisplay')
const btnConsole = document.getElementById('btnConsole')
const healthBars = document.getElementById('healthBars')
const combatlog = document.getElementById('combatlog')


const skeletonSprite = document.createElement('div')
skeletonSprite.classList.add('skeleton-sprite')
enemyDisplay.appendChild(skeletonSprite)

let playerHealth = 100
let enemyHealth = 100

let playerHealthVisual = document.createElement('div')
playerHealthVisual.textContent = 'Player: ' + playerHealth
healthBars.appendChild(playerHealthVisual)

let enemyHealthVisual = document.createElement('div')
enemyHealthVisual.textContent = 'Skeleton: ' + enemyHealth
healthBars.appendChild(enemyHealthVisual)

let winCondition = function() {
    if (enemyHealth <= 0){
    combatlog.textContent = 'You win!'
    }
}

let swordAttack = function playerSelection(){
    let roll = Math.random()
    let computerMove = Math.random()

    if(roll < computerMove && enemyHealth !== 0){
        combatlog.textContent = 'Enemy dodged the attack!'
        winCondition();
        return
    } else if (roll == computerMove && enemyHealth !== 0){
        combatlog.textContent = 'Enemy blocked the attack!'
        winCondition();
        return
    } else if (roll > computerMove && enemyHealth !== 0) {
        combatlog.textContent = 'Enemy took damage!'
        enemyHealth = enemyHealth - 10
        enemyHealthVisual.textContent = 'Skeleton: ' + enemyHealth
        healthBars.appendChild(enemyHealthVisual)
        winCondition();
        return
    }
}

let magicAttack = function playerSelection(){
    let roll = Math.random()
    let computerMove = Math.random()

    if(roll < computerMove && enemyHealth !== 0){
        combatlog.textContent = 'Enemy dodged the attack!'
        winCondition();
        return
    } else if (roll == computerMove && enemyHealth !== 0){
        combatlog.textContent = 'Enemy dodged the attack!'
        winCondition();
        return
    } else if (roll > computerMove && enemyHealth !== 0) {
        combatlog.textContent = 'Enemy was burnt to a crisp!'
        enemyHealth = enemyHealth - 20
        enemyHealthVisual.textContent = 'Skeleton: ' + enemyHealth
        healthBars.appendChild(enemyHealthVisual)
        winCondition();
        return
    }
}

let blockAttack = function playerSelection(){
    let roll = Math.random()
    let computerMove = Math.random()

    if(roll < computerMove && enemyHealth !== 0){
        combatlog.textContent = 'Enemy ignored your block, you take damage'
        playerHealth = playerHealth - 10
        playerHealthVisual.textContent = 'Player: ' + playerHealth
        winCondition();
        return
    } else if (roll == computerMove && enemyHealth !== 0){
        combatlog.textContent = 'Enemy blocked, took some damage'
        playerHealth = playerHealth - 5
        playerHealthVisual.textContent = 'Player: ' + playerHealth
        winCondition();
        return
    } else if (roll > computerMove && enemyHealth !== 0) {
        combatlog.textContent = 'Enemy attack fully blocked'
        winCondition();
        return
    }
}


for (let i = 1; i<=3; i++){
    const div = document.createElement('div')
    div.classList.add('btn-action')

    if(i === 1){
        div.classList.add('sword')
        div.addEventListener('click', (e) => {
        swordAttack()
    })
    } else if (i === 2){
        div.classList.add('shield')
        div.addEventListener('click', (e) => {
        blockAttack()
    })
    } else {
        div.classList.add('fire')
        div.addEventListener('click', (e) => {
        magicAttack()
    })
    }

    btnConsole.appendChild(div)
}

