import { useState } from 'react';

export const useLikeToogle = (initialValue: boolean = false) => {
  const [isLiked, setIsLiked] = useState(initialValue);

  const handleLikeToogle = () => {
    setIsLiked(!isLiked);
  };

  return { isLiked, handleLikeToogle };
}