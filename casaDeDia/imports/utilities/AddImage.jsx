import React, {useState} from 'react';

export default function App() {
  const [image, setImage] = useState('')
  const [loading, setLoading] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'prueba_image')
    setLoading(true)
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dzue2mlpl/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setImage(file.secure_url) //URL de la imagen para agregarla a Mongo de ser necesario
    setLoading(false)
  }

  return (
    <div className="App">
      <input
        type="file"
        name="file"
        placeholder="Upload an image"
        onChange={uploadImage}
      />
      {loading ? (
        <h3>...</h3>
      ) : (
        <img src={image} style={{ width: '300px' }} />
      )}
    </div>
  )
}

