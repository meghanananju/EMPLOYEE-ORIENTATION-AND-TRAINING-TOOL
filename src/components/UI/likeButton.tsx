 /*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : likeButton.tsx
*
* Description      : Like Button Component
*
* Author(s)        : Chetan Biradar
*
* Version History:
* <Version Number>                 <Author>                <date>        <defect Number>      <Modification
*                                                                                           made and the
*                                                                                           reason for
*                                                                                           modification >
*  1.0                            Chetan Biradar          14-04-2025         --              initial version
*
* References        :
*                     
* Assumption(s)     : None.
*                     
* Constraint(s)     : None.
*                     
 ****************************************************************************
*/
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";

interface LikeButtonProps {
  initiallyLiked?: boolean;
  onToggle?: (liked: boolean) => void;
  className?: string;
}

export const LikeButton: React.FC<LikeButtonProps> = ({
  initiallyLiked = false,
  onToggle,
  className = "",
}) => {
  const [liked, setLiked] = useState(initiallyLiked);

  const toggleLike = () => {
    const newLiked = !liked;
    setLiked(newLiked);
    onToggle?.(newLiked);
  };

  return (
    <button
      onClick={toggleLike}
      className={`text-xl transition-colors duration-200 ease-in-out focus:outline-none cursor-pointer ${
        liked ? "text-red-500" : "text-gray-400 hover:text-red-400"
      } ${className}`}
      aria-label={liked ? "Unlike" : "Like"}
    >
      <FontAwesomeIcon icon={liked ? solidHeart : regularHeart} />
    </button>
  );
};
