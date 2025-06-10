import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import ImageDisplay from './components/ImageDisplay';
import PredictionResult from './components/PredictionResult';
import Alert from './components/Alert';

interface PredictionResultType {
  label: string;
  confidence: number;
}

const App: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [result, setResult] = useState<PredictionResultType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (file: File | null) => {
    setImage(file);
    setResult(null);
    setError(null);
  };

  const handleSubmit = async () => {
    if (!image) {
      setError('Please select an image to upload.');
      return;
    }
    setLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('file', image);
    try {
      const response = await fetch('[invalid url, do not cite] {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      if (data.error) {
        setError(data.error);
      } else {
        setResult(data);
      }
    } catch (error) {
      setError('Failed to connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center">RescueEcho</h1>
      <FileUpload onFileChange={handleFileChange} />
      {image && <ImageDisplay image={image} />}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`w-full py-2 px-4 rounded text-white font-semibold ${
          loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
        }`}
      >
        {loading ? 'Processing...' : 'Predict'}
      </button>
      {error && <p className="mt-4 text-red-500">{error}</p>}
      {result && <PredictionResult result={result} />}
      {result && result.label === 'Human' && <Alert message="Survivor Found!" type="success" />}
      {result && result.label === 'Non-Living' && <Alert message="No Survivor Detected" type="error" />}
    </div>
  );
};

export default App;