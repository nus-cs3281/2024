
    var pageVueRenderFn = function anonymous(
) {
with(this){return _c('div',{attrs:{"id":"app"}},[_c('header',{attrs:{"fixed":""}},[_c('navbar',{attrs:{"placement":"top","type":"primary"},scopedSlots:_u([{key:"brand",fn:function(){return [_c('a',{staticClass:"navbar-brand",attrs:{"href":"/2024/index.html","title":"Home"}},[_v("CS3281&2-2024/Students")])]},proxy:true},{key:"right",fn:function(){return [_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://github.com/nus-cs3281/2024"}},[_c('span',[_c('span',{staticClass:"fab fa-github",attrs:{"aria-hidden":"true"}})])])])]},proxy:true}])},[_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3281")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/knowledge.html"}},[_v("Knowledge")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"https://nus-cs3281.github.io/2024-dashboard/?search=&sort=groupTitle&sortWithin=title&timeframe=commit&mergegroup=&groupSelect=groupByAuthors&breakdown=false"}},[_v("Code Dashboard")])])]),_v(" "),_c('dropdown',{staticClass:"nav-link",scopedSlots:_u([{key:"header",fn:function(){return [_v("CS3282")]},proxy:true}])},[_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/cs3282-index.html"}},[_v("Students")])]),_v(" "),_c('li',[_c('a',{staticClass:"dropdown-item",attrs:{"href":"/2024/students/talksSchedule.html"}},[_v("Lightning Talks")])])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"/2024/instructions.html"}},[_v("Instructions")])]),_v(" "),_c('li',[_c('a',{staticClass:"nav-link",attrs:{"href":"https://nus-cs3281.github.io/website/"}},[_v("CS3281&2 Website "),_c('span',[_c('span',{staticClass:"glyphicon glyphicon-share-alt",attrs:{"aria-hidden":"true"}})])])])],1)],1),_v(" "),_c('div',{attrs:{"id":"flex-body"}},[_m(0),_v(" "),_c('overlay-source',{staticClass:"fixed-header-padding",attrs:{"id":"page-nav","tag-name":"nav","to":"page-nav"}},[_c('div',{staticClass:"nav-component slim-scroll"})])],1),_v(" "),_m(1)])}
};
    var pageVueStaticRenderFns = [function anonymous(
) {
with(this){return _c('div',{staticClass:"fixed-header-padding",attrs:{"id":"content-wrapper"}},[_c('h3',{attrs:{"id":"hibernate"}},[_v("Hibernate"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#hibernate","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("As part of the "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("v9-migration")]),_v(", I had to familiarise myself with the Hibernate ORM")]),_v(" "),_c('p',[_v("Aspects Learnt:")]),_v(" "),_c('ul',[_c('li',[_v("Learnt the fundamentals of Object-Relational Mapping (ORM), enabling the conversion of data between the database and object-oriented programming languages, in particular Java")]),_v(" "),_c('li',[_v("Usage of "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("persist")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("merge")]),_v(" to insert or update an entity respectively")]),_v(" "),_c('li',[_v("Learnt about Hibernate's internal caching mechanisms")])]),_v(" "),_c('p',[_v("Resources")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.geeksforgeeks.org/hibernate-caching/"}},[_v("GeeksForGeeks Article on Hibernate Caching")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://hibernate.org/orm/"}},[_v("Hibernate docs")])])]),_v(" "),_c('h3',{attrs:{"id":"solr"}},[_v("Solr"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#solr","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("TEAMMATES uses Solr for full-text search, and is structured to function for both the datastore and SQL databases.")]),_v(" "),_c('p',[_v("Aspects Learnt:")]),_v(" "),_c('ul',[_c('li',[_v("Gained proficiency in Solr's query syntax to perform powerful searches, including filtering, sorting, and faceting to retrieve relevant documents efficiently")]),_v(" "),_c('li',[_v("Understood how Solr is integrated into the TEAMMATES backend for searching or indexing")])]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://solr.apache.org/guide/solr/latest/query-guide/json-request-api.html"}},[_v("Solr JSON Request API guide")])]),_v(" "),_c('li',[_c('a',{attrs:{"href":"https://solr.apache.org/docs/6_0_0/quickstart.html"}},[_v("Solr Quickstart guide")])])]),_v(" "),_c('h3',{attrs:{"id":"postgresql"}},[_v("PostgreSQL"),_c('a',{staticClass:"fa fa-anchor",attrs:{"href":"#postgresql","onclick":"event.stopPropagation()"}})]),_v(" "),_c('p',[_v("Having only used "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SQLite")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MySQL")]),_v(" in the past, I had to familiarise myself with PostgreSQL as it is the SQL database used in TEAMMATES.")]),_v(" "),_c('p',[_v("Aspects Learnt:")]),_v(" "),_c('ul',[_c('li',[_v("Learnt about PostgreSQL's architecture, including its use of processes for client connections, MVCC (Multiversion Concurrency Control), and its write-ahead logging (WAL) for data integrity")]),_v(" "),_c('li',[_v("Learnt about the differences between the 3 SQL database engines")])]),_v(" "),_c('p',[_v("Resources:")]),_v(" "),_c('ul',[_c('li',[_c('a',{attrs:{"href":"https://www.digitalocean.com/community/tutorials/sqlite-vs-mysql-vs-postgresql-a-comparison-of-relational-database-management-systems"}},[_v("Differences between "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("MySQL")]),_v(", "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("SQLite")]),_v(" and "),_c('code',{pre:true,attrs:{"class":"hljs inline no-lang"}},[_v("PostgreSQL")])])])])])}
},function anonymous(
) {
with(this){return _c('footer',[_c('div',{staticClass:"text-center"},[_c('p',[_v("["),_c('strong',[_v("This site was generated using "),_c('img',{attrs:{"src":"https://markbind.org/favicon.ico","width":"25"}}),_v(" "),_c('a',{attrs:{"href":"https://markbind.org/"}},[_v("MarkBind 5.3.0")])]),_v(" on Thu, 28 Mar 2024, 20:08:23 UTC]"),_c('br'),_v(" "),_c('span',{staticClass:"dimmed"},[_c('small',[_c('small',[_v("favicon.ico of this site was made by "),_c('a',{attrs:{"href":"https://www.flaticon.com/authors/smashicons","title":"Smashicons"}},[_v("Smashicons")]),_v(" from "),_c('a',{attrs:{"href":"https://www.flaticon.com/","title":"Flaticon"}},[_v("www.flaticon.com")]),_v(" is licensed by "),_c('a',{attrs:{"href":"http://creativecommons.org/licenses/by/3.0/","title":"Creative Commons BY 3.0","target":"_blank"}},[_v("CC 3.0 BY")])])])])])])])}
}];
  