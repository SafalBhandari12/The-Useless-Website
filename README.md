# 🌿 Plant-Disease-Detection
Plant disease detection is crucial for farmers to ensure healthy crop yields. This project leverages deep learning, specifically a Convolutional Neural Network (CNN) built using the PyTorch framework, to classify leaf images into 39 different categories. The model is trained on the Plant Village dataset.

## 🚀 How to Run the Project on Your Machine
1. **Prerequisites:** Ensure you have **Python 3.8** installed.
2. **Setup Virtual Environment:**
   - Create and activate a Python virtual environment using this [guide](https://docs.python.org/3/tutorial/venv.html).
3. **Install Dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
4. **Model Setup:**
   - Navigate to the `Flask Deployed App` folder.
   - Download the pre-trained model `plant_disease_model_1.pt` from [this link](https://drive.google.com/drive/folders/1ewJWAiduGuld_9oGSrTuLumg9y62qS6A?usp=share_link).
   - Place the downloaded file in the `Flask Deployed App` folder.
5. **Run the Flask App:**
   ```bash
   python3 app.py
   ```
6. **Jupyter Notebook:**
   - You can also experiment with the model in the `Model` section using Jupyter Notebook.

## 🤝 Contribution (Open Source)
This project is open-source! Contributions are welcome to improve the UI, enhance the deep learning model, or add informative markdown files.
- Ensure your code is error-free and functional.
- Fork this project, test your changes, and create a pull request.
- How to make a pull request: [Guide](https://opensource.com/article/19/7/create-pull-request-github)

## 🧪 Testing Images
If you don't have leaf images, you can use the test images in the `test_images` folder. Each image has a corresponding disease name to verify model accuracy.

## 📱 Web App Preview (Mobile View)
### Main Page
<img src = "demo_images/mobile_1.png" style="width: 300px;"> <br>
### AI Engine
<img src = "demo_images/mobile_2.png" style="width: 300px;"> <br>
### Results Page
<img src = "demo_images/mobile_3.png" style="width: 300px;"> <br>
### Supplements/Fertilizer Store
<img src = "demo_images/mobile_4.png" style="width: 300px;"> <br>

This updated documentation offers a cleaner and more mobile-friendly presentation for enhanced user experience!
