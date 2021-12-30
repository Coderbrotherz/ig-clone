function Suggestion({
  userImg,
  userImg2,
  userImg3,
  userImg4,
  userImg5,
  username,
  username2,
  username3,
  username4,
  username5,
  description,
  description2,
  description3,
  description4,
  description5,
}) {
  return (
    <div>
      <div className="flex items-center justify-between mt-3 pb-1">
        <img
          src={userImg}
          className="w-10 h-10 rounded-full border p-[2px]"
          alt=""
        />
        <div className="flex-1 ml-4">
          <h2 className="font-semibold text-sm">{username}</h2>
          <h3 className="text-xs text-gray-400">{description}</h3>
        </div>
        <button className="text-blue-400 text-xs font-bold">Follow</button>
      </div>

      <div className="flex items-center justify-between mt-3 pb-1">
        <img
          src={userImg2}
          className="w-10 h-10 rounded-full border p-[2px]"
          alt=""
        />
        <div className="flex-1 ml-4">
          <h2 className="font-semibold text-sm">{username2}</h2>
          <h3 className="text-xs text-gray-400">{description2}</h3>
        </div>
        <button className="text-blue-400 text-xs font-bold">Follow</button>
      </div>
      <div className="flex items-center justify-between mt-3 pb-1">
        <img
          src={userImg3}
          className="w-10 h-10 rounded-full border p-[2px]"
          alt=""
        />
        <div className="flex-1 ml-4">
          <h2 className="font-semibold text-sm">{username3}</h2>
          <h3 className="text-xs text-gray-400">{description3}</h3>
        </div>
        <button className="text-blue-400 text-xs font-bold">Follow</button>
      </div>
      <div className="flex items-center justify-between mt-3 pb-1">
        <img
          src={userImg4}
          className="w-10 h-10 rounded-full border p-[2px]"
          alt=""
        />
        <div className="flex-1 ml-4">
          <h2 className="font-semibold text-sm">{username4}</h2>
          <h3 className="text-xs text-gray-400">{description4}</h3>
        </div>
        <button className="text-blue-400 text-xs font-bold">Follow</button>
      </div>
      <div className="flex items-center justify-between mt-3 pb-1">
        <img
          src={userImg5}
          className="w-10 h-10 rounded-full border p-[2px]"
          alt=""
        />
        <div className="flex-1 ml-4">
          <h2 className="font-semibold text-sm">{username5}</h2>
          <h3 className="text-xs text-gray-400">{description5}</h3>
        </div>
        <button className="text-blue-400 text-xs font-bold">Follow</button>
      </div>
    </div>
  );
}

export default Suggestion;
