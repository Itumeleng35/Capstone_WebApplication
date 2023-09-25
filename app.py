from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)

# Load the dataset
dataset = pd.read_csv('dataset.csv')

@app.route('/get_dataset', methods=['GET'])
def get_dataset():
    # Convert the dataset to JSON
    dataset_json = dataset.to_json(orient='records')
    return jsonify({'dataset': dataset_json})

if __name__ == '__main__':
    app.run(debug=True)
