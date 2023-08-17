from flask import Flask, request, jsonify
from langchain.document_loaders import CSVLoader
from langchain.indexes import VectorstoreIndexCreator
from langchain.chains import RetrievalQA
from langchain.llms import OpenAI
from flask_cors import CORS
import os

app = Flask(__name__)

CORS(app)
os.environ["OPENAI_API_KEY"] = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"


@app.route('/ask', methods=['POST'])
def ask_question():
    data = request.json
    query = data.get('question')

    if not query:
        return jsonify({"error": "Missing 'question' parameter"}), 400

    loader = CSVLoader(file_path="D:/walmart/myapp/backend/MOCK_DATA.csv")

    index_creator = VectorstoreIndexCreator()
    docsearch = index_creator.from_loaders([loader])

    chain = RetrievalQA.from_chain_type(
        llm=OpenAI(),
        chain_type="stuff",
        retriever=docsearch.vectorstore.as_retriever(),
        input_key="question",
    )

    response = chain({"question": query})
    return jsonify({"response": response})


if __name__ == '__main__':
    app.run(debug=True)
