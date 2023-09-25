from flask import request, jsonify
from app import app
from public.model import load_model, predict

model = load_model('your_model.pkl')

@app.route('/predict', methods=['POST'])
def predict_route():
    data = request.get_json()
    # Perform preprocessing on 'data' if needed
    prediction = predict(model, data)
    return jsonify({'prediction': prediction.tolist()})

@app.route('/get_dataset', methods=['GET'])
def get_dataset():
    # Convert the dataset to JSON and return it
    dataset_json = dataset.to_json(orient='records')
    return jsonify({'dataset': dataset_json})

if __name__ == '__main__':
    app.run(debug=True)

