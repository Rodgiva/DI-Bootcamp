import json
import os

# Init the json file "sample.json"
dir_path = os.path.dirname(os.path.realpath(__file__))
with open(dir_path + r"\sample.json", "w") as file:
    json.dump({}, file)

sampleJson = """{ 
    "company":{ 
        "employee":{ 
            "name":"emma",
            "payable":{ 
                "salary":7000,
                "bonus":800
            }
        }
    }
}"""

dict_data = json.loads(sampleJson)
print(dict_data["company"]["employee"]["payable"]["salary"])
dict_data["company"]["employee"]["birth_date"] = None
print(dict_data)

dir_path = os.path.dirname(os.path.realpath(__file__))
with open(dir_path + r"\sample.json", "w") as file:
    json.dump(dict_data, file)