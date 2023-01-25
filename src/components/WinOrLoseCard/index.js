// Write your code here.
import './index.css'

const won = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const lose = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgin} = props

  const imageUrlWonOrLose = isWon ? won : lose
  const scoreBored = isWon ? 'Best Score' : 'Score'
  const title = isWon ? 'You Won' : 'You Lose'

  return (
    <div className="notice-container">
      <div>
        <h1 className="won-heading">{title}</h1>
        <div>
          <p className="best">{scoreBored}</p>
          <p className="total-score">{score}/12</p>
          <button className="button" type="button" onClick={onClickPlayAgin}>
            Play Again
          </button>
        </div>
      </div>
      <div>
        <img
          src={imageUrlWonOrLose}
          className="image-emoji"
          alt="win or lose"
        />
      </div>
    </div>
  )
}

export default WinOrLoseCard
