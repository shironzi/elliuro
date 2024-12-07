function InvestWithUs() {
  return (
    <div className="flex items-center h-max">
      <div
        className="text-center gap-11 flex flex-col bg-secondary-400 justify-center -mr-32 z-10 px-5"
        style={{ height: '591px' }}
      >
        <h1 className="text-beige-400 text-4xl tracking-widest">
          INVEST YOUR FUTURE WITH US
        </h1>
        <p className="text-beige-400 text-xl tracking-widest">
          Unlock access to premium properties and expert guidance tailored to
          your financial goals. Start building a secure future with a trusted
          partner focused on your success.
        </p>
        <a
          href=""
          className="border border-beige-400 p-5 text-lg w-fit mx-auto hover:border-primary-400 hover:text-beige-400 transition duration-500"
        >
          Explore Investment Opportunities
        </a>
      </div>
      <img src="/images/landscapeCityBuildings.png" className="" alt="" />
    </div>
  )
}

export default InvestWithUs
