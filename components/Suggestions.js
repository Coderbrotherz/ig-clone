import Suggestion from "./Suggestion";

function Suggestions() {
  const suggestionsData = [
    {
      id: "123",
      userImg:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142",
      username: "Jeff Bezos",
      description: "I am the owner of amazon",

      userImg2:
        "https://images.english.elpais.com/resizer/5DO82rz-Fg0gx_XUcPN4tiQ4D5c=/980x735/cloudfront-eu-central-1.images.arcpublishing.com/prisa/F34R4EEJ2RG3DKUGSVKBLC2GXA.jpeg",
      username2: "Bill Gates",
      description2: "i am the owner of microsoft",

      userImg3:
        "https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5c76b7d331358e35dd2773a9%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D0%26cropX2%3D4401%26cropY1%3D0%26cropY2%3D4401",
      username3: "Mark Zuckerberg",
      description3: "i am the owner of instagram, facebook and whatsapp",

      userImg4:
        "https://media1.popsugar-assets.com/files/thumbor/AK19MHoD8cv7k9tglCxOrwbbf_Y/733x204:2802x2273/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2019/09/04/019/n/1922398/7c2241aa5d7048792c0e23.11693945_/i/Shawn-Mendes.jpg",
      username4: "Shawn Mendes",
      description4: "i am a songwriter and singer",

      userImg5:
        "https://i1.sndcdn.com/avatars-3mXHB9G3lNghE8cJ-MZfcbw-t500x500.jpg",
      username5: "Selena Gomez",
      description5: "I am a songwriter,a singer and an actress",
    },
  ];

  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between text-sm mb-5">
        <h3 className="text-sm font-bold text-gray-400">Suggestions for you</h3>
        <button className="text-gray-600 font-semibold">See all</button>
      </div>

      {suggestionsData.map((suggestionsData) => (
        <Suggestion
          userImg={suggestionsData.userImg}
          username={suggestionsData.username}
          description={suggestionsData.description}
          userImg2={suggestionsData.userImg2}
          userImg3={suggestionsData.userImg3}
          userImg4={suggestionsData.userImg4}
          userImg5={suggestionsData.userImg5}
          username2={suggestionsData.username2}
          username3={suggestionsData.username3}
          username4={suggestionsData.username4}
          username5={suggestionsData.username5}
          userImg5={suggestionsData.userImg5}
          description2={suggestionsData.description2}
          description3={suggestionsData.description3}
          description4={suggestionsData.description4}
          description5={suggestionsData.description5}
        />
      ))}
    </div>
  );
}

export default Suggestions;
