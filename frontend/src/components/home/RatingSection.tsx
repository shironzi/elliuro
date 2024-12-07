import RateCard from "./RateCard"

function RatingSection() {
  return (
    <div>
      <h1>WHAT CLIENTS ARE SAYING</h1>
      <div>
        <RateCard ratingDesc="This is the best real state listing website" rate={5} name="MARIUS" />
      </div>
    </div>
  )
}

export default RatingSection
