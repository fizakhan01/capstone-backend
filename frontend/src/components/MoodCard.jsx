function MoodCard({ moodName, emoji, onSelect }) {
  return (
    <button
      className={`mood-btn mood-${moodName}`}
      onClick={() => onSelect(moodName)}
    >
      <span className="emoji">{emoji}</span>
      {moodName}
    </button>
  );
}

export default MoodCard;