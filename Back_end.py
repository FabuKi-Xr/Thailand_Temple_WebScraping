from flask import Flask, request, render_template
import json
import pandas as pd
import csv

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
        data = {"data": "Hello World"}
        return data

@app.route('/temple', methods=['GET'])
def temple():
    data = {"temple": []}
    with open("เชียงใหม่.csv", encoding="utf8") as f:
        reader = csv.reader(f)
        next(reader)
        for row in reader:
            data["temple"].append({"country_name": "เชียงใหม่", "temple_name": row[0]})
    with open("กระบี่.csv", encoding="utf8") as f:
        reader = csv.reader(f)
        next(reader)
        for row in reader:
            data["temple"].append({"country_name": "กระบี่", "temple_name": row[0]})
    with open("กาญจนบุรี.csv", encoding="utf8") as f:
        reader = csv.reader(f)
        next(reader)
        for row in reader:
            data["temple"].append({"country_name": "กาญจนบุรี", "temple_name": row[0]})
    with open("นครราชสีมา.csv", encoding="utf8") as f:
        reader = csv.reader(f)
        next(reader)
        for row in reader:
            data["temple"].append({"country_name": "นครราชสีมา", "temple_name": row[0]})
    with open("อุดรธานี.csv", encoding="utf8") as f:
        reader = csv.reader(f)
        next(reader)
        for row in reader:
            data["temple"].append({"country_name": "อุดรธานี", "temple_name": row[0]})
    json_data = json.dumps(data, ensure_ascii=False,indent=3)
    return json_data

if __name__ == '__main__':
    app.run(debug=True)
