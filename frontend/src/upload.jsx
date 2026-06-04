import axios from "axios"

function Upload() {

    async function uploadImage(e) {

        const formData = new FormData()

        formData.append(
            "file",
            e.target.files[0]
        )

        await axios.post(
            "http://127.0.0.1:8000/upload-image",
            formData
        )

        alert("Uploaded")
    }

    return (

        <div>

            <h1>Upload Medical Image</h1>

            <input
                type="file"
                onChange={uploadImage}
            />

        </div>
    )
}

export default Upload