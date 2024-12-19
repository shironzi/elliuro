import { useCallback, useState } from 'react';
import { LuUpload } from 'react-icons/lu';
import { FaRegImage } from 'react-icons/fa6';
import { MdDelete } from 'react-icons/md';
import { useNavigate, useParams } from 'react-router';
import { propertyImages } from '../../apis/propertyApi';

function ListingImages() {
  const { propertyId } = useParams();
  const navigate = useNavigate();
  const [imageFormData, setImageFormData] = useState<File[]>([]);

  const handleFileUpload = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      const validFileTypes = ['image/png', 'image/jpeg', 'image/webp'];
      const maxSizeInBytes = 10 * 1024 * 1024;
      try {
        if (files) {
          const newImage = Array.from(files).filter((file) => {
            if (!validFileTypes.includes(file.type)) {
              return false;
            }

            if (file.size > maxSizeInBytes) {
              return false;
            }

            return true;
          });

          if (newImage.length > 0) {
            setImageFormData([...imageFormData, ...newImage]);
          }
        }
      } catch (error) {
        throw Error(String(error));
      }
    },
    [imageFormData],
  );

  const handleFileDelete = useCallback(
    async (fileName: string): Promise<void> => {
      try {
        const updatedFiles = imageFormData.filter(
          (file) => file.name !== fileName,
        );
        setImageFormData(updatedFiles);
      } catch (error) {
        throw Error(String(error));
      }
    },
    [imageFormData],
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (propertyId) {
        await propertyImages(imageFormData, propertyId);
      } else {
        console.error('Property ID is undefined');
      }

      navigate('/property-listing/review');
    },
    [navigate, imageFormData, propertyId]
  );

  return (
    <div className="bg-darkGray-400">
      <div className="container mx-auto">
        <h1 className="text-3xl border-b border-beige-400 w-fit pr-10 pb-1 mb-8">
          Showcase Your Property with Stunning Photos
        </h1>
        <form
          className="px-16 flex flex-col gap-10 pb-20"
          onSubmit={handleSubmit}
          encType='multipart/form-data'
        >
          <p className="text-xs" style={{ color: 'rgba(224, 224, 224, 0.60)' }}>
            Upload high-quality images of your property to capture its best
            features and appeal to potential buyers or renters.
          </p>
          <div className="flex flex-row gap-10 p-10 justify-center w-fit mx-auto border border-beige-400 shadow-lg">
            <form action="" className="mt-8 items-center">
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
                {imageFormData?.map((file, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-5 text-sm justify-between"
                  >
                    <FaRegImage size={35} />{' '}
                    <h1 className="w-full">{file.name}</h1>
                    <button>
                      <MdDelete
                        size={20}
                        color="#bb2124"
                        onClick={() => handleFileDelete(file.name)}
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button
            type="submit"
            className="bg-beige-400 w-fit px-28 py-3 text-xl mx-auto transition-all hover:bg-secondary-400 duration-500"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}

export default ListingImages;