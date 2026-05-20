import { Image } from "@heroui/react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function convertGoogleDrive(url) {
  if (!url) return "";

  url = url.trim();

  // file/d/ID/view
  let match = url.match(/\/file\/d\/([^/]+)/);
  if (match?.[1]) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
  }

  // open?id=ID
  match = url.match(/[?&]id=([^&]+)/);
  if (match?.[1]) {
    return `https://drive.google.com/thumbnail?id=${match[1]}&sz=w1000`;
  }

  return url;
}

function MemberCard({
  imgSource = "",
  name = "Name",
  position = "Position",
  domain = "",
  github = "",
  linkedin = "",
  instagram = "",
  membersPage = false,
}) {
  const finalImage = imgSource
    ? convertGoogleDrive(imgSource)
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(
        name
      )}&background=ff6a00&color=fff&size=300`;

  return (
    <div className="flex justify-center items-center group h-full">
      <div className="w-[240px] flex flex-col justify-center items-center border-2 border-textColor1 rounded-2xl backdrop-blur-lg h-full">

        <div className="p-5">
          <Image
            className="overflow-hidden group-hover:scale-105 group-hover:shadow-md group-hover:shadow-textColor1 transition-all duration-200"
            src={finalImage}
            alt={name}
            radius="lg"
            isBlurred
          />
        </div>

        <div
          className={`flex flex-col justify-center items-center ${
            !membersPage ? "h-[170px]" : "h-[130px]"
          } mx-3 gap-3 mb-4`}
        >
          <h1 className="text-xl font-extrabold text-textColor1 text-center">
            {name.toUpperCase()}
          </h1>

          <div className="flex flex-col items-center">
            <p className="text-lg text-textColor2 font-medium">
              {position.toUpperCase()}
            </p>

            {!membersPage && domain && (
              <p className="text-base text-textColor1 font-black text-center">
                {domain.toUpperCase()}
              </p>
            )}
          </div>

          <div className="flex gap-5 text-textColor2">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <FaGithub className="text-[22px] hover:text-textColor1" />
              </a>
            )}

            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-[22px] hover:text-textColor1" />
              </a>
            )}

            {instagram && (
              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-[22px] hover:text-textColor1" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MemberCard;