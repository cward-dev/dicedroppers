import { useState, useEffect } from "react";
import { getImageUrl } from "../../utils/api-fetcher";
import "./ApiImage.css";

function ApiImage( { childKey, fileName } ) {

  const [imageObjectUrl, setImageObjectUrl] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const imageUrl = await getImageUrl(fileName);
      setImageObjectUrl(imageUrl);
    };
    fetchData();
  }, []);

  return (
    <img key={childKey} src={imageObjectUrl} alt={fileName} />
  );

}

export default ApiImage;