<frontmatter>
title: CS3282 - {{ year }} Batch
pageNav: 2
</frontmatter>

# CS3282 - {{ year }} Batch

{% set projects = [
    {name: 'CATcher', students: [
        ['WONG CHEE HONG', 'cheehongw', 'A2', 'B2', 'C2'],
        ['GOH YEE CHONG, GABRIEL', 'gycgabriel', 'A1', 'B1', 'C1'],
        ['LEE XIONG JIE, ISAAC', 'luminousleek', 'A1', 'B1', 'C1'],
        ['VIGNESH SANKAR IYER', 'vigneshsankariyer1234567890', 'A3', 'B3', 'C3']
    ]},
    {name: 'MarkBind', students: [
        ['LEE WEI, DAVID', 'itsyme', 'A3', 'B3', 'C3'],
        ['ELTON GOH JUN HAO', 'EltonGohJH', 'A1', 'B1', 'C1'],
        ['CHAN YU CHENG', 'yucheng11122017', 'A1', 'B1', 'C1'],
        ['HANNAH CHIA KAI XIN', 'kaixin-hc', 'A3', 'B3', 'C3']
    ]},
    {name: 'RepoSense', students: [
        ['MARCUS TANG XIN KYE', 'MarcusTXK', 'A2', 'B2', 'C2'],
        ['GOKUL RAJIV', 'gok99', 'A2', 'B2', 'C2'],
        ['CHARISMA KAUSAR', 'ckcherry23', 'A3', 'B3', 'C3'],
        ['DAVID GARETH ONG', 'vvidday', 'A3', 'B3', 'C3']
    ]},
    {name: 'TEAMMATES', students: [
        ['JAY ALJELO SAEZ TING', 'jayasting98', 'A1', 'B1', 'C1'],
        ['MOK KHENG SHENG FERGUS', 'FergusMok', 'A1', 'B1', 'C1'],
        ['ONG JUN HENG, CEDRIC', 'cedricongjh', 'A3', 'B3', 'C3'],
        ['NEO WEI QING', 'weiquu', 'A2', 'B2', 'C2'],
        ['KEVIN FOONG WEI TONG', 'kevin9foong', 'A3', 'B3', 'C3'],
        ['CHANG WENG YEW, NICOLAS', 'Nicolascwy', 'A2', 'B2', 'C2'],
        ['DOMINIC LIM KAI JUN', 'domlimm', 'A2', 'B2', 'C2'],
        ['ZHANG ZIQING', 'ziqing26', 'A2', 'B2', 'C2'],
        ['SIM SING YEE, EUNICE', 'EuniceSim142', 'A1', 'B1', 'C1']
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
  <span id="mod">cs3282</span>
</include>
  {% endfor %}
{% endfor %}
