import React from 'react';

interface ImageDisplayProps {
  image: File;
}

const ImageDisplay: React.FC<ImageDisplayProps> = ({ image }) => {
  const [imageUrl, setImageUrl] = React.useState<string | null>(null);

  React.useEffect(() => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result as string);
    };
    reader.readAsDataURL(image);
  }, [image]);

  return (
    <div className="mb-4">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Uploaded Spectrogram"
          className="max-w-full h-auto rounded shadow"
        />
      )}
    </div>
  );
};

export default ImageDisplay;