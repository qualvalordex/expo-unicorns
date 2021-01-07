import json

with open('../../data/uucards.json', encoding='utf8') as json_file:
    data = json.load(json_file)

f = "export default function getCardImage(cardID) {\n\tswitch(cardID) {\n"

for n, item in enumerate(data):
    f += "\t\tcase " + str(n+1) + ":\n\t\t\treturn require('../../assets/images" + data[n]['card_path'] + "');\n"

f += "\t\tdefault:\n\t\t\treturn require('../../assets/images/unicorn_not_found.png');\n\t}\n}"

with open('getCardImage.js', 'w') as js_file:
    js_file.write(f)
    js_file.close()