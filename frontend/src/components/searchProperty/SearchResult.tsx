import SearchPropertyCard from "./SearchPropertyCard"

function SearchResult(){
    return (
        <div className="flex flex-row my-32 ">
          <div className="w-fit">
            <h1>0 PROPERTIES</h1>
            <div className="grid grid-cols-4 gap-10 place-items-center">
              <SearchPropertyCard
                title="title"
                location="manila"
                price={150000}
                size="1 hectare"
              />
              <SearchPropertyCard
                title="title"
                location="manila"
                price={150000}
                size="1 hectare"
              />
              <SearchPropertyCard
                title="title"
                location="manila"
                price={150000}
                size="1 hectare"
              />
              <SearchPropertyCard
                title="title"
                location="manila"
                price={150000}
                size="1 hectare"
              />
              <SearchPropertyCard
                title="title"
                location="manila"
                price={150000}
                size="1 hectare"
              />
              <SearchPropertyCard
                title="title"
                location="manila"
                price={150000}
                size="1 hectare"
              />
            </div>
          </div>
        </div>
    )
}

export default SearchResult