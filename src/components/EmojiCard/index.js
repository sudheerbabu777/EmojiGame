// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiUrl, emojiName} = emojiDetails

  const onClickButton = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji">
      <button className="emoji-button" type="button" onClick={onClickButton}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
