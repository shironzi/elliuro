import RateCard from "./RateCard"

function RatingSection() {
  return (
    <div className="py-36">
      <h1 className="text-center mb-32 text-3xl tracking-widest">WHAT CLIENTS ARE SAYING</h1>
      <div className="flex gap-20 justify-center">
        <RateCard ratingDesc="This is the best real state listing website" rate={5} name="MARIUS" />
        <RateCard ratingDesc="This is the best real state listing website" rate={5} name="MARIUS" />
        <RateCard ratingDesc="This is the best real state listing website" rate={5} name="MARIUS" />
      </div>
    </div>
  )
}

export default RatingSection
