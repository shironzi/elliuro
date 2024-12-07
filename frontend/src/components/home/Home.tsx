import Banner from './Banner'
import FeatureProperties from './FeatureProperties'
import InvestWithUs from './InvestWithUs'
import RatingSection from './RatingSection'

function Home() {
  return (
    <div className="bg-darkGray-400">
      <Banner />
      <FeatureProperties />
      <InvestWithUs />
      <RatingSection />
    </div>
  )
}

export default Home
