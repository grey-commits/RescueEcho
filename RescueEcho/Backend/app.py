from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import tensorflow as tf
import numpy as np
import io
from models.model import model

app = FastAPI()

# Enable CORS for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins for demo
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Define class names (adjust based on your dataset)
class_names = ['Non-Living', 'Human']

@app.post("/predict")
async def predict(file: UploadFile = File(...)):
    try:
        # Read the uploaded image
        image_bytes = await file.read()
        image = tf.io.decode_image(image_bytes, channels=3)
        
        # Preprocess the image
        image = tf.image.resize(image, [224, 224])
        image = tf.cast(image, tf.float32) / 255.0
        image = tf.expand_dims(image, axis=0)  # Add batch dimension
        
        # Make prediction
        prediction = model.predict(image)
        predicted_class = np.argmax(prediction[0])
        confidence = prediction[0][predicted_class]
        
        # Return result as JSON
        return {"label": class_names[predicted_class], "confidence": float(confidence)}
    except Exception as e:
        return {"error": f"Processing failed: {str(e)}"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)