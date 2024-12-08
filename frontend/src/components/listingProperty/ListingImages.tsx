import { useCallback, useState } from 'react'
import { LuUpload } from 'react-icons/lu'
import { FaRegImage } from 'react-icons/fa6'
import { MdDelete } from 'react-icons/md'

function ListingImages() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])

  const handleFileUpload = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      const validFileTypes = ['image/png', 'image/jpeg', 'image/webp'];
      const maxSizeInBytes = 10 * 1024 * 1024;
      try {
        if (files) {
          const newImage = Array.from(files).filter((file) => {
            if(!validFileTypes.includes(file.type)){
              return false;
            }

            if(file.size > maxSizeInBytes){
              return false;
            }

            return true;
          })
          
          if(newImage.length > 0){
            setUploadedFiles([...uploadedFiles, ...newImage])
          }
        }
      } catch (error) {
        throw Error(String(error))
      }
    },
    [uploadedFiles],
  )

  return (
    <div className="bg-darkGray-400">
      <div className="container mx-auto">
        <h1>Listing Image Form</h1>
        <div>
          <p>
            Upload high-quality images of your property to capture its best
            features and appeal to potential buyers or renters.
          </p>
          <div className="flex flex-row gap-10 justify-center">
            <form action="" className="mt-8">
              <label
                htmlFor="image1"
                className="flex flex-col p-5 gap-3 cursor-pointer bg-transparent border border-dashed w-fit font-proximaNova"
              >
                <LuUpload className="mx-auto" />
                <h1 className="text-center bg-beige-400 px-5 py-1 rounded-3xl w-fit mx-auto">
                  Browse
                </h1>
                <p
                  className="mx-auto text-xs"
                  style={{ color: 'rgba(224, 224, 224, 0.60)' }}
                >
                  Drop a file here
                </p>
                <h1 className="mx-auto text-sm">
                  <span className="text-red-600">*</span>File supported .png,
                  .jpg & .webp
                </h1>
              </label>
              <input
                type="file"
                id="image1"
                name="image1"
                className="hidden"
                onChange={handleFileUpload}
              />
            </form>
            <div className="flex flex-col gap-2 font-proximaNova w-72">
              <h1>Uploaded Files</h1>
              <ul className="flex flex-col gap-1">
                {uploadedFiles.map((file, index) => (
                  <li key={index} className="flex items-center gap-5 text-sm justify-between">
                    <FaRegImage size={35} /> <h1 className='w-full'>{file.name}</h1>
                    <button>
                      <MdDelete size={20} color="#bb2124" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingImages
