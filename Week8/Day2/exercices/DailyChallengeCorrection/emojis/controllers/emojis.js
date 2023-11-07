import {emojis} from "../config/emojis.js"

export const getRandomAndOptions = (req, res) => {
    const randomIndex = Math.floor(Math.random() * emojis.length)
    const randomEmoji = emojis[randomIndex]

    const options = generateOptions(randomEmoji.name)

    res.json({emoji: randomEmoji, options})
}

export const guess = (req, res) => {
    const {name, guess} = req.body
    if (name === guess) return res.json({message: "Correct"})
    res.json({message: "Not correct"})
}

function generateOptions(currentEmoji) {
    const options = emojis.filter(item => {
        return item.name != currentEmoji
    })
    return options
}