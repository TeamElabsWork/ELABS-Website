import React from "react";
import { FaRegUser } from "react-icons/fa";

function FeedbackCard({
  name,
  feedback,
  // imgSource = "https://res.cloudinary.com/dpqdgcipi/image/upload/v1720237114/1676480037898_jypfgp.jpg",
}) {
  return (
    <div className="feedback-card-gradient">
      <p className="text-textColor2 dark:text-black text-[16px] w-full text-left line-clamp-5">{feedback}</p>
      <div className="w-full flex items-center justify-end gap-2 mt-3">
        <figure className="rounded-full dark:text-black">
          {/* <img className="rounded-full aspect-square object-cover" src={imgSource} alt="" width={24} height={24} /> */}
          <FaRegUser />
        </figure>
        <p className="text-end text-textColor1 font-semibold">{name}</p>
      </div>
    </div>
  );
}

export default FeedbackCard;
