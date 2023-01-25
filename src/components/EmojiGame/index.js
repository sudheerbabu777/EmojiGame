import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import NavBar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

// Write your code here.

class EmojiGame extends Component {
  state = {
    clickedEmojisList: [],
    isGameInProgress: true,
    topScore: 0,
  }

  resetGame = () => {
    this.setState({clickedEmojisList: [], isGameInProgress: true})
  }

  finishGameAndTopScore = currentScore => {
    const {topScore} = this.state
    let newTopScore = topScore

    if (currentScore > topScore) {
      newTopScore = currentScore
    }
    this.setState({
      topScore: newTopScore,
      isGameInProgress: false,
    })
  }

  onClickEmoji = id => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isEmojiPresent = clickedEmojisList.includes(id)
    const clickedEmojisListLength = clickedEmojisList.length

    if (isEmojiPresent) {
      this.finishGameAndTopScore(clickedEmojisListLength)
    } else {
      if (emojisList.length - 1 === clickedEmojisListLength) {
        this.finishGameAndTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojisList: [...prevState.clickedEmojisList, id],
      }))
    }
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderWinOrLose = () => {
    const {emojisList} = this.props
    const {clickedEmojisList} = this.state
    const isWon = clickedEmojisList.length === emojisList.length

    return (
      <div className="win-lose-container">
        <WinOrLoseCard
          isWon={isWon}
          score={clickedEmojisList.length}
          onClickPlayAgin={this.resetGame}
        />
      </div>
    )
  }

  renderEmojiList = () => {
    const shuffledEmojis = this.shuffledEmojisList()
    return (
      <ul className="emoji-list-container">
        {shuffledEmojis.map(each => (
          <EmojiCard
            emojiDetails={each}
            key={each.id}
            onClickEmoji={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  render() {
    const {clickedEmojisList, topScore, isGameInProgress} = this.state
    console.log(clickedEmojisList)
    return (
      <div className="app-container">
        <div className="bg-container">
          <NavBar
            currentScore={clickedEmojisList.length}
            topScore={topScore}
            isGameInProgress={isGameInProgress}
          />
          {isGameInProgress ? this.renderEmojiList() : this.renderWinOrLose()}
        </div>
      </div>
    )
  }
}

export default EmojiGame
