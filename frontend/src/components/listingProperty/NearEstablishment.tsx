import { useCallback, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router'

interface ContextOutlet {
  formData: {
    establishments: string[]
  }
  updateFromData: (key: string, value: string[]) => void
}

function NearEstablishment() {
  const navigate = useNavigate()

  const { formData, updateFromData } = useOutletContext<ContextOutlet>()
  const [establishment, setEstablishments] = useState<string[]>(
    formData.establishments || [],
  )
  const [inputValue, setInputValue] = useState('')

  const handleAddEstablishment = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      try {
        if (inputValue === '') return
        setEstablishments([...establishment, inputValue])
        setInputValue('')
      } catch (error) {
        throw Error(String(error))
      }
    },
    [establishment, inputValue],
  )

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      updateFromData('establishments', establishment)
      navigate('/property-listing/images')
    },
    [navigate, updateFromData, establishment],
  )

  return (
    <div className="bg-darkGray-400 pt-10 pb-20 h-screen">
      <div className="container mx-auto">
        <h1 className="text-3xl border-b border-beige-400 w-fit pr-10 pb-2">
          Highlight What Makes Your Property Special
        </h1>
        <div className="mt-5 mx-10 flex flex-col gap-20 font-proximaNova">
          <p className="text-xs" style={{ color: 'rgba(224, 224, 224, 0.60)' }}>
            Is your property part of an exclusive community, or does it offer
            unique amenities? Let buyers know what makes it stand out.
          </p>
          <form
            action=""
            className="flex flex-row gap-5"
            onSubmit={handleAddEstablishment}
          >
            <input
              type="text"
              id="establishment"
              name="establishment"
              placeholder="ENTER AN ESTABLISHMENT"
              className="w-3/5 px-5 py-3 bg-transparent outline-none border"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button
              type="submit"
              className="bg-beige-400 py-3 px-10 border border-beige-400 hover:bg-secondary-400 hover:border-secondary-400 duration-500 transition-colors"
            >
              ADD
            </button>
          </form>
          <div className="h-80">
            <ul className="list-disc text-lg">
              {establishment.length > 1 ? (
                establishment.map((value, index) => (
                  <li key={index}>{value}</li>
                ))
              ) : establishment.length === 1 ? (
                <li>{establishment[0]}</li>
              ) : (
                <></>
              )}
            </ul>
          </div>
          <form action="" onSubmit={handleSubmit} className="mx-auto">
            <button
              type="submit"
              className="px-28 py-3 bg-beige-400 w-fit  hover:bg-secondary-400 transition-colors duration-300 ease-out bottom-0"
            >
              NEXT
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default NearEstablishment
