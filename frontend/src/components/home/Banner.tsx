import Banner_property_card from './Banner-property-card'

function Banner() {
  return (
    <div
      className="relative h-screen bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: "url('/images/banner.png')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute bottom-20 z-10 w-full pl-36">
        <ul className="flex gap-x-10 overflow-x-auto scroll-smooth overscroll-auto pb-1 mr-32">
          <li>
            <Banner_property_card
              image={'/images/property-card.jpg'}
              title={'Real Estate 1'}
            />
          </li>

          <li>
            <Banner_property_card
              image={'/images/property-card.jpg'}
              title={'Real Estate 2'}
            />
          </li>
          <li>
            <Banner_property_card
              image={'/images/property-card.jpg'}
              title={'Real Estate 3'}
            />
          </li>
          <li>
            <Banner_property_card
              image={'/images/property-card.jpg'}
              title={'Real Estate 4'}
            />
          </li>
          <li>
            <Banner_property_card
              image={'/images/property-card.jpg'}
              title={'Real Estate 5'}
            />
          </li>
          <li>
            <Banner_property_card
              image={'/images/property-card.jpg'}
              title={'Real Estate 6'}
            />
          </li>
          <li>
            <Banner_property_card
              image={'/images/property-card.jpg'}
              title={'Real Estate 7'}
            />
          </li>
          <li>
            <Banner_property_card
              image={'/images/property-card.jpg'}
              title={'Real Estate 8'}
            />
          </li>
          <li>
            <Banner_property_card
              image={'/images/property-card.jpg'}
              title={'Real Estate 9'}
            />
          </li>
          <li>
            <Banner_property_card
              image={'/images/property-card.jpg'}
              title={'Real Estate 10'}
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Banner
