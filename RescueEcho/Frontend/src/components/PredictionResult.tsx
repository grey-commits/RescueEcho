import React from 'react';

interface PredictionResultProps {
  result: {
    label: string;
    confidence: number;
  };
}

const PredictionResult: React.FC<PredictionResultProps> = ({ result }) => {
  return (
    <div className="mt-6 p-4 bg-gray-100 rounded shadow">
      <p className="text-lg font-semibold">Prediction: {result.label}</p>
      <p className="text-sm text-gray-600">
        Confidence: {(result.confidence * 100).toFixed(2)}%
      </p>
    </div>
  );
};

export default PredictionResult;