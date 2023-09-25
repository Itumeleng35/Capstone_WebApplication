import pandas as pd

def load_dataset(file_path):
    try:
        dataset = pd.read_csv(file_path)
        return dataset
    except Exception as e:
        print(f"Error loading dataset: {str(e)}")
        return None

# Example usage
dataset = load_dataset('C:/Users/Itumeleng Maanela/Desktop/Projects/Capstone_WebApplication/public/Model/Linear Regression model Sales dataset-checkpoint.csv')
