<frontmatter>
title: CS3281&2 - {{ year }} Batch
pageNav: 2
</frontmatter>

# CS3281 - {{ year }} Batch

{% set projects = [
    {name: 'CATcher', students: [
        ['ARIF KHALID', 'Arif-Khalid'],
        ['NEREUS NG WEI BIN', 'NereusWB922'],
        ['NGUYEN KHOI NGUYEN', 'nknguyenhc'],
        ['MISRA ADITYA', 'MadLamprey']
    ]},
    {name: 'MarkBind', students: [
        ['EYO KAI WEN, KEVIN', 'KevinEyo1'],
        ['LAM JIU FONG', 'LamJiuFong'],
        ['WANG YIWEN', 'yiwen101'],
        ['WANG JINGTING', 'jingting1412'],
        ['XU SHUYAO', 'Tim-Siu']
    ]},
    {name: 'RepoSense', students: [
        ['GEORGE TAY QUAN YAO', 'asdfghjkxd'],
        ['ALVIS NG', 'supermii2'],
        ['JONAS ONG SI WEI', 'jonasongg'],
        ['POON YIP HANG, RYAN', 'sopa301']
    ]},
    {name: 'TEAMMATES', students: [
        ['TYE JIA JUN, MARQUES', 'marquestye'],
        ['DOMINIC BERZIN CHUA WAY GIN', 'domoberzin'],
        ['ZHU YUANXI', 'yuanxi1'],
        ['YEO DI SHENG', 'dishenggg'],
        ['XENOS FIORENZO ANONG', 'xenosf'],
        ['CHING MING YUAN', 'mingyuanc']
    ]}
] %}

{% for project in projects %}
**{{ project.name }}:**
{% for student in project.students %}* [{{ student[0] }}](#{{ student[0] | lower | replace(' ', '-') | replace(',', '')}})
{% endfor %}
{% endfor %}

{% for project in projects %}
# {{ project.name }}
  {% for student in project.students %}

<include src="students/{{ student[1] }}/studentInfo.md" boilerplate >
  <span id="name">{{ student[0] }}</span>
  <span id="folder">{{ student[1] }}</span>
  <span id="mod">cs3281</span>
</include>
  {% endfor %}
{% endfor %}
