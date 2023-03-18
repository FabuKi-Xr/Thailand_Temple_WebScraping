from flask import Flask, request, render_template 
from dotenv import load_dotenv
from pathlib import Path
import json
import csv
import os

app = Flask(__name__)
_province = ["เชียงใหม่", "กระบี่", "กาญจนบุรี", "นครราชสีมา", "อุดรธานี"]
@app.route("/temple", methods=["GET"])
def temple():
    data = {"temple" : []}
    for p in _province:
        with open(f"./data/{p}.csv", encoding="utf8") as f:
            reader = csv.reader(f)
            next(reader)
            for row in reader:
                data["temple"].append(row[0])
    json_data = json.dumps(data, ensure_ascii=False,indent=3)
    return json_data

@app.route("/temple/<province>", methods=["GET"])
def get_temple_by_province(province):
    print(province)
    if province not in _province:
        return {"status":"404", 
                "message":"Oops! ไม่มีข้อมูลจังหวัดนี้"
                }
    data = {province: []}
    with open(f"./data/{province}.csv", encoding="utf8") as f:
        reader = csv.reader(f)
        next(reader)
        for row in reader:
            data[province].append(row[0])
    json_data = json.dumps(data, ensure_ascii=False,indent=3)
    return json_data

if __name__ == "__main__":
    path = Path(".env")
    load_dotenv(dotenv_path=path)
    app.run(debug=True,port=os.environ.get('PORT'),host='0.0.0.0')