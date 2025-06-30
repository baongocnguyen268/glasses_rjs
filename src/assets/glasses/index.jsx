import { useState } from "react";

export default function GlassesTryOn() {
  const [imgPath, setImgPath] = useState("./image/v1.png");

  const handleChangeGlasses = (path) => {
    setImgPath(path);
  };

  return (
    <div
      className="min-h-screen bg-black/60 text-white flex flex-col items-center py-10 px-4 bg-cover bg-center"
      style={{ backgroundImage: `url('./image/background.jpg')` }}
    >
      <h1 className="text-3xl font-bold mb-8">TRY GLASSES APP ONLINE</h1>

      <div className="relative w-64 h-auto mb-6">
        <img
          src="./image/model.jpg"
          alt="Model"
          className="w-full h-auto rounded border"
        />
        <img
          src={imgPath}
          alt="Selected Glasses"
          className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[180px] pointer-events-none"
        />
      </div>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-5xl mx-auto mt-8">
        <div className="flex flex-wrap gap-4 justify-center">
          <img
            src="/image/v1.png"
            onClick={() => handleChangeGlasses("/image/v1.png")}
            className="cursor-pointer hover:scale-110 transition w-20 border rounded"
          />
          <img
            src="/image/v2.png"
            onClick={() => handleChangeGlasses("/image/v2.png")}
            className="cursor-pointer hover:scale-110 transition w-20 border rounded"
          />
          <img
            src="/image/v3.png"
            onClick={() => handleChangeGlasses("/image/v3.png")}
            className="cursor-pointer hover:scale-110 transition w-20 border rounded"
          />
          <img
            src="/image/v4.png"
            onClick={() => handleChangeGlasses("/image/v4.png")}
            className="cursor-pointer hover:scale-110 transition w-20 border rounded"
          />
          <img
            src="/image/v5.png"
            onClick={() => handleChangeGlasses("/image/v5.png")}
            className="cursor-pointer hover:scale-110 transition w-20 border rounded"
          />
          <img
            src="/image/v6.png"
            onClick={() => handleChangeGlasses("/image/v6.png")}
            className="cursor-pointer hover:scale-110 transition w-20 border rounded"
          />
          <img
            src="/image/v7.png"
            onClick={() => handleChangeGlasses("/image/v7.png")}
            className="cursor-pointer hover:scale-110 transition w-20 border rounded"
          />
          <img
            src="/image/v8.png"
            onClick={() => handleChangeGlasses("/image/v8.png")}
            className="cursor-pointer hover:scale-110 transition w-20 border rounded"
          />
          <img
            src="/image/v9.png"
            onClick={() => handleChangeGlasses("/image/v9.png")}
            className="cursor-pointer hover:scale-110 transition w-20 border rounded"
          />
        </div>
      </div>
    </div>
  );
}
