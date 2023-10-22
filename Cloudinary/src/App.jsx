import { useState } from "react";
function App() {
  const [image, setImage] = useState("");
  const submitImage = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "chat-app");
    data.append("cloud_name", "dmdg88lx0");
    fetch("https://api.cloudinary.com/v1_1/dmdg88lx0/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <input
        type="file"
        onChange={(e) => {
          setImage(e.target.files[0]);
        }}
      />
      <br />
      <button onClick={submitImage} type="submit">
        Submit
      </button>
    </div>
  );
}

export default App;
