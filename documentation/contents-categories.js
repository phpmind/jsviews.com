﻿var content = $.views.documentation.content;

content.categories = content.useStorage && $.parseJSON(localStorage.getItem("JsViewsDocCategories")) ||
[
  {
    "jsrender": {
      "loaded": true,
      "name": "home",
      "label": "JsRender",
      "heading": "Best-of-breed templating",
      "description": "Simple and intuitive, powerful and extensible, lightning fast",
      "key": "jsrender",
      "class": "home",
      "home": {
        "prefix": "jsr",
        "next": "jsrplaying",
        "leftsections": [
          {
            "_type": "para",
            "title": "Here's a first example of the power and simplicity of JsRender templates:",
            "text": ""
          },
          {
            "_type": "data",
            "title": "Some data:",
            "data": [
              {
                "name": "Robert",
                "nickname": "Bob",
                "showNickname": true
              },
              {
                "name": "Susan",
                "nickname": "Sue",
                "showNickname": false
              }
            ]
          },
          {
            "_type": "template",
            "title": "A template (with a conditional section using an {{if...}} tag):",
            "markup": "<div>\n   <em>Name:</em> {{:name}}\n   {{if showNickname && nickname}}\n      (Goes by <em>{{:nickname}}</em>)\n   {{/if}}\n</div>"
          }
        ],
        "sections": [
          {
            "_type": "para",
            "title": "",
            "text": "<em>And a working demo, you can play with and modify:</em>"
          },
          {
            "_type": "sample",
            "typeLabel": "Sample:",
            "sectionTypes": {
              "para": "para",
              "data": "data",
              "template": "template",
              "code": "code",
              "links": "links"
            },
            "sections": [
              {
                "_type": "para",
                "title": "",
                "text": "```jsr\n{{:name}}\n```\n\nRender the `name` property of the current data item\n\n```jsr\n{{if showNickname && nickname}}...{{/if}}\n```\n\nAn `{{if}}` tag: Render the block content only if the expression (`showNickname && nickname`) is true..."
              }
            ],
            "data": [
              {
                "name": "Robert",
                "nickname": "Bob",
                "showNickname": true
              },
              {
                "name": "Susan",
                "nickname": "Sue",
                "showNickname": false
              }
            ],
            "markup": "<div>\n   <em>Name:</em> {{:name}}\n   {{if showNickname && nickname}}\n      (Goes by <em>{{:nickname}}</em>)\n   {{/if}}\n</div>",
            "onlyJsRender": true,
            "height": "85"
          }
        ],
        "title": ""
      },
      "loading": ""
    },
    "jsviews": {
      "loaded": true,
      "name": "home",
      "label": "JsViews",
      "heading": "The next-generation MVVM framework - bringing templates to life",
      "description": "The power of MVVM, the flexibility of JavaScript, the speed and ease of JsRender templates",
      "key": "jsviews",
      "class": "home",
      "home": {
        "prefix": "jsv",
        "next": "jsvplaying",
        "leftsections": [
          {
            "_type": "code",
            "title": "The JsViews framework brings declarative data-binding to JsRender templates, supports MVVM and MVP (custom tag controls), and much more...<br/><br/>Here's a small example. We'll start with some data:",
            "code": "...\n{\n  \"name\": \"Robert\",\n  \"nickname\": \"Bob\",\n  \"showNickname\": true\n}\n..."
          },
          {
            "_type": "template",
            "title": "and a data-bound template:",
            "markup": "<div>\n  <em>Name:</em> {^{:name}}\n  {^{if showNickname && nickname}}\n    (Goes by <em data-link=\"nickname\"></em>)\n  {{/if}}\n</div>\n"
          },
          {
            "_type": "template",
            "title": "And within the template we will use two-way binding to allow editing of the underlying data:",
            "markup": "{^{if editable}}\n  <div>\n    <input data-link=\"name\"/>\n    <input data-link=\"nickname\"/>\n    <input type=\"checkbox\" data-link=\"showNickname\"/>\n  </div>\n{{/if}}\n"
          }
        ],
        "sections": [
          {
            "_type": "sample",
            "typeLabel": "Sample:",
            "sectionTypes": {
              "para": "para",
              "data": "data",
              "template": "template",
              "code": "code",
              "links": "links"
            },
            "sections": [
              {
                "_type": "para",
                "title": "",
                "text": "```jsr\n{^{name}} ... {^{if showNickname && nickname}}...\n```\n\nThese are data-bound tags. When the underlying data changes the data-value within the rendered template automatically updates too.\n\nChanging `{{if ...}}` to `{^{if ...}}` makes it data-bound. Now, when the underlying data value or expression changes the whole rendered block content is automatically removed or reinserted.\n\n```jsr\n<em data-link=\"nickname\">\n```\n\nYou can use element-based data-linking too. Here, the inner-text of the `<em>` element is data-bound to the `nickname` data value.\n\n```jsr\n<input data-link=\"name\"/>\n```\n\nAnd here, the input is automatically two-way data-bound to the `name` property of the underlying data. Change the value in the text box, and the underlying data automatically updates. Any other parts of the template that are data-linked to the same data property will then immediately update too."
              }
            ],
            "data": [
              {
                "name": "Robert",
                "nickname": "Bob",
                "showNickname": true
              },
              {
                "name": "Susan",
                "nickname": "Sue",
                "showNickname": false
              }
            ],
            "markup": "",
            "onlyJsRender": false,
            "height": "106",
            "html": "<div id=\"result\"></div>\n\n<script id=\"theTmpl\" type=\"text/x-jsrender\">\n<div>\n  Edit: <input type=\"checkbox\" data-link=\"editable\"/>\n  <em>Name:</em> {^{:name}}\n  {^{if showNickname && nickname}}\n    (Goes by <em data-link=\"nickname\"></em>)\n  {{/if}}\n  {^{if editable}}\n    <div>\n      <input data-link=\"name\"/>\n      <input data-link=\"nickname\"/>\n      Show nickname: <input type=\"checkbox\" data-link=\"showNickname\"/>\n    </div>\n  {{/if}}\n</div>\n</script>",
            "code": "var data = [\n  {\n    \"name\": \"Robert\",\n    \"nickname\": \"Bob\",\n    \"showNickname\": true\n  },\n  {\n    \"name\": \"Susan\",\n    \"nickname\": \"Sue\",\n    \"showNickname\": false\n  }\n];\n\nvar template = $.templates(\"#theTmpl\");\n\ntemplate.link(\"#result\", data);"
          }
        ]
      },
      "loading": ""
    },
    "jsobservable": {
      "loaded": true,
      "name": "home",
      "label": "JsObservable",
      "heading": "Live observable data in the browser",
      "description": "Code and declarative data-binding working hand-in-hand, adding interactivity and responsiveness to your single-page apps",
      "key": "jsobservable",
      "class": "home",
      "home": {
        "prefix": "jso",
        "next": "getstarted",
        "leftsections": [
          {
            "_type": "para",
            "title": "The JsObservable library is part of JsViews.",
            "text": "It is used by JsViews to provide the declarative data-binding. And it also allows your code in a JsViews app to trigger data changes, or to 'observe' data-changes programmatically."
          },
          {
            "_type": "code",
            "title": "We'll add some code to a \"declarative\" JsViews sample. Take some data, and a data-bound template:",
            "code": "var people = [\n  {name: \"Adriana\"},\n  {name: \"Robert\"}\n];"
          },
          {
            "_type": "template",
            "title": "",
            "markup": "{^{for people}}\n  ...\n  <button class=\"change\">Change</button>\n  ...\n{{/for}}"
          },
          {
            "_type": "code",
            "title": "And add some button click handlers which call JsObservable APIs to make observable changes to the underlying data:",
            "code": "$(\"#result\")\n  .on(\"click\", \".change\", function() {\n    var dataItem = $.view(this).data;\n    $.observable(dataItem).setProperty(\"name\", ...);\n  })\n  .on(\"click\", \".remove\", function() {\n    var index = $.view(this).index;\n    $.observable(people).remove(index);\n  });\n"
          },
          {
            "_type": "code",
            "title": "",
            "code": "$.observable(people).insert({name: ...});\n"
          }
        ],
        "sections": [
          {
            "_type": "sample",
            "typeLabel": "Sample:",
            "sectionTypes": {
              "para": "para",
              "data": "data",
              "template": "template",
              "code": "code",
              "links": "links"
            },
            "sections": [
              {
                "_type": "para",
                "title": "",
                "text": "```js\n$.observable(object).setProperty(...);\n```\n\n`$.observable(dataItem)` makes `dataItem` *\"observable\"*, by providing a `setProperty(...)` method. Use `setProperty` to change a value, and the change will be *\"observed\"* by the declarative data-binding in the template.\n\n`$.observable(people)` makes the `people` array *\"observable\"*, by providing methods like `insert(...)` and `remove(...)`. Use them to make changes to arrays, and the changes will be *\"observed\"* by data-bound elements and tags in the template - such as the `{^{for people}}` tag. Here the rendered block content of the tag will be incrementally added/removed for each added/removed array item - in response to your change.\n\n```js\n$.observable(array).insert(...);\n```\n\n`$.view(elem)` allows you to get from any DOM element to the *view* object for that part of the rendered content, and hence to the underlying data, index, etc."
              }
            ],
            "data": {},
            "markup": "",
            "onlyJsRender": false,
            "height": "175",
            "html": "<table><tbody id=\"result\"></tbody></table>\n\n<script id=\"theTmpl\" type=\"text/x-jsrender\">\n  <tr><td>\n    <button id=\"addBtn\">Add</button>\n  </td></tr>\n  {^{for people}}\n    <tr><td>\n      <button class=\"change\">Change</button>\n      <button class=\"remove\"></button>\n      {^{:name}} \n    </td></tr>\n  {{/for}}\n</script>",
            "code": "var template = $.templates(\"#theTmpl\");\n\nvar people = [\n    {\n      name: \"Adriana\"\n    },\n    {\n      name: \"Robert\"\n    }\n  ];\n\nvar counter = 1;\n\ntemplate.link(\"#result\", {people: people});\n\n$(\"#addBtn\").on(\"click\", function() {\n  $.observable(people).insert({name: \"name\" + counter++});\n})\n\n$(\"#result\")\n  .on(\"click\", \".change\", function() {\n    var dataItem = $.view(this).data;\n    $.observable(dataItem).setProperty(\"name\", dataItem.name + \"*\");\n  })\n  .on(\"click\", \".remove\", function() {\n    var index = $.view(this).index;\n    $.observable(people).remove(index);\n  });"
          }
        ]
      },
      "loading": ""
    }
  },
  {
    "name": "getstarted",
    "label": "Getting started",
    "heading": "Getting Started",
    "description": "First steps with JsRender, JsViews and JsObservable",
    "categories": [
      {
        "name": "jsrplaying",
        "label": "Playing with JsRender"
      },
      {
        "name": "jsr-quickstart",
        "label": "JsRender Quickstart",
        "categories": [],
        "expanded": true
      },
      {
        "name": "jsr-node-quickstart",
        "label": "JsRender Node.js Quickstart"
      },
      {
        "name": "jsvplaying",
        "label": "Playing with JsViews"
      },
      {
        "name": "jsv-quickstart",
        "label": "JsViews Quickstart",
        "hidden": false
      },
      {
        "name": "temp",
        "label": "JsViews QS end",
        "hidden": true
      }
    ],
    "expanded": true
  },
  {
    "filter": "jsr",
    "name": "jsrapi",
    "label": "JsRender API - Templated UI",
    "heading": "JsRender API documentation",
    "description": "Detailed API docs on using JsRender templates",
    "categories": [
      {
        "name": "tmplsyntax",
        "label": "Template syntax and structure",
        "categories": [
          {
            "name": "tagsyntax",
            "label": "Tag syntax"
          },
          {
            "name": "paths",
            "label": "Paths and expressions"
          },
          {
            "name": "views",
            "label": "View hierarchy",
            "categories": [
              {
                "name": "getindex",
                "label": "getIndex()"
              },
              {
                "name": "contextualparams",
                "label": "Contextual parameters"
              },
              {
                "name": "parentdata",
                "label": "Accessing parent data"
              }
            ],
            "expanded": true
          }
        ],
        "expanded": true
      },
      {
        "name": "jsrtags",
        "label": "Template tags",
        "categories": [
          {
            "name": "assigntag",
            "label": "{{: ...}}"
          },
          {
            "name": "htmltag",
            "label": "{{> ...}}"
          },
          {
            "name": "includetag",
            "label": "{{include ...}}"
          },
          {
            "name": "fortag",
            "label": "{{for ...}}"
          },
          {
            "name": "propstag",
            "label": "{{props ...}}"
          },
          {
            "name": "iftag",
            "label": "{{if ...}}"
          },
          {
            "name": "elsetag",
            "label": "{{else ...}}"
          },
          {
            "name": "allowcodetag",
            "label": "{{* ... }} and {{*: ...}}"
          },
          {
            "name": "customtagsapi",
            "label": "Custom tags"
          },
          {
            "name": "commenttag",
            "label": "{{!-- ... --}}"
          }
        ],
        "expanded": true
      },
      {
        "name": "rendertmpl",
        "label": "Render a template",
        "categories": [
          {
            "name": "tmplrender",
            "label": "myTmpl.render()"
          },
          {
            "name": "d.render",
            "label": "$.render.myTmpl()"
          },
          {
            "name": "db.render",
            "label": "$(\"#myTmpl\").render()"
          }
        ],
        "expanded": true
      },
      {
        "name": "apps",
        "label": "Building apps",
        "categories": [
          {
            "name": "jsrmodel",
            "label": "Data / View Model",
            "categories": [
              {
                "name": "viewmodelsapi",
                "label": "$.views.viewModels"
              }
            ],
            "expanded": true
          },
          {
            "name": "compiletmpl",
            "label": "Templates",
            "categories": [
              {
                "name": "d.templates",
                "label": "$.templates()"
              }
            ],
            "expanded": false
          },
          {
            "name": "helpers",
            "label": "Helpers",
            "categories": [
              {
                "name": "helpersapi",
                "label": "$.views.helpers()"
              }
            ],
            "expanded": false
          },
          {
            "name": "converters",
            "label": "Converters",
            "categories": [
              {
                "name": "convertersapi",
                "label": "$.views.converters()"
              }
            ],
            "expanded": false
          },
          {
            "name": "tags",
            "label": "Custom tags"
          }
        ],
        "expanded": true
      },
      {
        "name": "settings",
        "label": "Settings",
        "hidden": false,
        "categories": [
          {
            "name": "settings/delimiters",
            "label": "Delimiters"
          },
          {
            "name": "settings/debugmode",
            "label": "Debug mode"
          },
          {
            "name": "settings/allowcode",
            "label": "Allow code"
          }
        ],
        "expanded": false
      },
      {
        "name": "advanced",
        "label": "Advanced",
        "categories": [
          {
            "name": "onerror",
            "label": "Error handling"
          },
          {
            "name": "settings/advanced",
            "label": "Advanced settings"
          },
          {
            "name": "nojqueryapi",
            "label": "JsRender without jQuery",
            "hidden": true
          },
          {
            "name": "jsrobjects",
            "label": "JsRender objects",
            "categories": [
              {
                "name": "viewsobject",
                "label": "$.views object",
                "categories": [
                  {
                    "name": "settingsobject",
                    "label": "$.views.settings object"
                  },
                  {
                    "name": "subobject",
                    "label": "$.views.sub object"
                  }
                ],
                "expanded": true,
                "hidden": true
              },
              {
                "name": "templateobject",
                "label": "template object",
                "hidden": true
              },
              {
                "name": "viewobject",
                "label": "view object"
              },
              {
                "name": "tagobject",
                "label": "tag object",
                "hidden": true
              },
              {
                "name": "viewcontextobject",
                "label": "view context object",
                "hidden": true
              },
              {
                "name": "tagcontextobject",
                "label": "tag context object",
                "hidden": true
              }
            ],
            "expanded": true
          },
          {
            "name": "lifecycle",
            "label": "Life-cycle events",
            "hidden": true
          }
        ],
        "expanded": false
      },
      {
        "name": "jsrnode",
        "label": "JsRender on Node.js",
        "categories": [
          {
            "name": "node/install",
            "label": "Installation and usage"
          },
          {
            "name": "node/filetmpls",
            "label": "File-based templates"
          },
          {
            "name": "node/express-hapi",
            "label": "Express and Hapi integration"
          },
          {
            "name": "node/server-browser",
            "label": "Server/browser shared templates"
          },
          {
            "name": "node/browserify",
            "label": "Browserify support",
            "categories": [],
            "expanded": true
          },
          {
            "name": "node/webpack",
            "label": "Webpack support"
          }
        ],
        "expanded": true
      }
    ],
    "expanded": true
  },
  {
    "filter": "jsv",
    "name": "jsvapi",
    "label": "JsViews API - Data-driven UI",
    "heading": "JsViews API documentation",
    "description": "Detailed API docs on using JsViews for dynamic data-driven sites, or MVVM",
    "categories": [
      {
        "name": "linked-template-syntax",
        "label": "Data-linked template syntax",
        "categories": [
          {
            "name": "linked-tag-syntax",
            "label": "Data-linked tags"
          },
          {
            "name": "linked-elem-syntax",
            "label": "Data-linked elements"
          },
          {
            "name": "linked-paths",
            "label": "Data-linked paths"
          },
          {
            "name": "link2way",
            "label": "Two-way binding",
            "hidden": false
          },
          {
            "name": "link-events",
            "label": "Event bindings",
            "hidden": false
          },
          {
            "name": "jsvviews",
            "label": "View hierarchy",
            "categories": [
              {
                "name": "jsvgetindex",
                "label": "getIndex()"
              },
              {
                "name": "jsvcontextualparams",
                "label": "Contextual parameters"
              },
              {
                "name": "jsvparentdata",
                "label": "Accessing parent data"
              }
            ],
            "expanded": false,
            "hidden": true
          }
        ],
        "expanded": true
      },
      {
        "name": "jsvtags",
        "label": "Template tags",
        "categories": [
          {
            "name": "jsvassigntag",
            "label": "{^{: ...}}",
            "hidden": false
          },
          {
            "name": "jsvhtmltag",
            "label": "{^{> ...}}",
            "hidden": false
          },
          {
            "name": "jsvincludetag",
            "label": "{^{include ...}}",
            "hidden": false
          },
          {
            "name": "jsvfortag",
            "label": "{^{for ...}}",
            "hidden": false
          },
          {
            "name": "jsviftag",
            "label": "{^{if ...}}",
            "hidden": false
          },
          {
            "name": "jsvpropstag",
            "label": "{^{props ...}}",
            "hidden": false
          },
          {
            "name": "jsvelsetag",
            "label": "{{else ...}}",
            "hidden": false
          },
          {
            "name": "jsvontag",
            "label": "{^{on ...}}",
            "hidden": false
          },
          {
            "name": "jsvcustomtags",
            "label": "Custom tags",
            "hidden": true
          }
        ],
        "expanded": true
      },
      {
        "name": "jsvlinktmpl",
        "label": "Render and link a template",
        "categories": [
          {
            "name": "jsvtmpllink",
            "label": "myTmpl.link()"
          },
          {
            "name": "jsv.d.link",
            "label": "$.link.myTmpl()"
          }
        ],
        "expanded": true,
        "hidden": false
      },
      {
        "name": "jsvapps",
        "label": "Building apps",
        "categories": [
          {
            "name": "jsvmodel",
            "label": "Data / View Model",
            "categories": [
              {
                "name": "jsvviewmodelsapi",
                "label": "$.views.viewModels"
              }
            ],
            "expanded": false
          },
          {
            "name": "linkedtmpls",
            "label": "Data-linked templates"
          },
          {
            "name": "jsvtagcontrols",
            "label": "Custom tag controls"
          },
          {
            "name": "jsvhelpers-converters",
            "label": "Helpers and converters"
          },
          {
            "name": "mvvm-views",
            "label": "MVVM -- Dynamic  view hierarchy",
            "hidden": false
          }
        ],
        "expanded": true,
        "hidden": false
      },
      {
        "name": "toplink",
        "label": "Top-level data-linking",
        "hidden": false,
        "categories": [
          {
            "name": "jsv.toplink-true",
            "label": "Declarative: $.link(true, ...)"
          },
          {
            "name": "jsv.toplink-expr",
            "label": "Programmatic: $.link(...)"
          }
        ],
        "expanded": true
      },
      {
        "name": "$view",
        "label": "Views: from UI to data",
        "categories": [
          {
            "name": "jsv.d.view",
            "label": "$.view()"
          }
        ],
        "expanded": true
      },
      {
        "name": "link-targets",
        "label": "Targets for data-linking",
        "categories": [
          {
            "name": "link-formelems",
            "label": "Form elements",
            "categories": [
              {
                "name": "link-input",
                "label": "textbox / checkbox / radio"
              },
              {
                "name": "link-select",
                "label": "select"
              },
              {
                "name": "link-textarea",
                "label": "textarea"
              },
              {
                "name": "link-button",
                "label": "button",
                "hidden": false
              }
            ],
            "expanded": true
          },
          {
            "name": "link-text-html",
            "label": "innerText / innerHTML",
            "hidden": false
          },
          {
            "name": "link-css",
            "label": "CSS attributes",
            "hidden": false
          },
          {
            "name": "link-class",
            "label": "class",
            "hidden": false
          },
          {
            "name": "link-visibility",
            "label": "visibility",
            "hidden": false
          },
          {
            "name": "link-elemattribs",
            "label": "Element attributes",
            "hidden": false
          },
          {
            "name": "link-tags",
            "label": "Tag bindings",
            "hidden": true
          },
          {
            "name": "link-widgets",
            "label": "jQuery UI widgets",
            "hidden": true
          },
          {
            "name": "link-computed",
            "label": "Computed observables",
            "hidden": true
          },
          {
            "name": "link-svg",
            "label": "SVG elements",
            "hidden": false
          },
          {
            "name": "link-contenteditable",
            "label": "contenteditable elements"
          }
        ],
        "expanded": true,
        "hidden": false
      },
      {
        "name": "jsvunlink",
        "label": "unlink()",
        "categories": [
          {
            "name": "jsvtmplunlink",
            "label": "template.unlink()"
          },
          {
            "name": "jsv.d.unlink",
            "label": "$.unlink()"
          },
          {
            "name": "jsv.db.unlink",
            "label": "$(...).unlink()"
          }
        ],
        "expanded": true,
        "hidden": true
      },
      {
        "name": "jsvsettings",
        "label": "Settings",
        "hidden": false,
        "categories": [
          {
            "name": "jsvsettings/delimiters",
            "label": "Delimiters"
          },
          {
            "name": "jsvsettings/debugmode",
            "label": "Debug mode"
          },
          {
            "name": "jsvsettings/trigger",
            "label": "Trigger",
            "hidden": false
          },
          {
            "name": "jsvsettings/allowcode",
            "label": "Allow code"
          }
        ],
        "expanded": false
      },
      {
        "name": "jsvadvanced",
        "label": "Advanced",
        "categories": [
          {
            "name": "jsvsettings/advanced",
            "label": "Advanced settings"
          },
          {
            "name": "jsvobjects",
            "label": "JsViews objects",
            "categories": [
              {
                "name": "jsvviewsobject",
                "label": "$.views object",
                "expanded": true,
                "hidden": true
              },
              {
                "name": "jsvtemplateobject",
                "label": "template object",
                "hidden": true
              },
              {
                "name": "jsvviewobject",
                "label": "view object"
              },
              {
                "name": "jsvtagobject",
                "label": "tag object",
                "hidden": true
              },
              {
                "name": "jsvviewcontextobject",
                "label": "View context object",
                "hidden": true
              },
              {
                "name": "jsvtagcontextobject",
                "label": "Tag context object",
                "hidden": true
              },
              {
                "name": "jsvlinkcontextobject",
                "label": "Link context object",
                "hidden": true
              }
            ],
            "expanded": true
          },
          {
            "name": "other",
            "label": "And computed observable, {{on}}, DataMap...",
            "hidden": true
          }
        ],
        "expanded": false
      }
    ],
    "expanded": true
  },
  {
    "filter": "jsv",
    "name": "jsoapi",
    "label": "JsObservable API - Observing data",
    "heading": "JsObservable API documentation",
    "description": "Detailed API docs on using JsObservable for observing or triggering data changes in a single-page app",
    "categories": [
      {
        "name": "$observable",
        "label": "Observable objects and arrays"
      },
      {
        "name": "propchange",
        "label": "Modify an object observably",
        "categories": [
          {
            "name": "setprop",
            "label": "$.observable(object).setProperty()"
          },
          {
            "name": "removeprop",
            "label": "$.observable(obj).removeProperty()"
          }
        ],
        "expanded": true
      },
      {
        "name": "arrchange",
        "label": "Modify an array observably",
        "categories": [
          {
            "name": "insert",
            "label": "$.observable(array).insert()"
          },
          {
            "name": "remove",
            "label": "$.observable(array).remove()"
          },
          {
            "name": "move",
            "label": "$.observable(array).move()"
          },
          {
            "name": "refresh",
            "label": "$.observable(array).refresh()"
          }
        ],
        "expanded": true
      },
      {
        "name": "observeobjectsarrays",
        "label": "Respond to data changes",
        "categories": [
          {
            "name": "onpropchange",
            "label": "onPropertyChange"
          },
          {
            "name": "onarrchange",
            "label": "onArrayChange"
          },
          {
            "name": "observe",
            "label": "$.observe()",
            "hidden": false
          },
          {
            "name": "unobserve",
            "label": "$.unobserve()",
            "hidden": false
          },
          {
            "name": "observeAll",
            "label": "$.observable().observeAll()",
            "hidden": false
          },
          {
            "name": "unobserveAll",
            "label": "$.observable().unobserveAll()",
            "hidden": false
          }
        ],
        "expanded": true
      },
      {
        "name": "computed",
        "label": "Computed observables"
      },
      {
        "name": "jsoadvanced",
        "label": "Advanced",
        "categories": [
          {
            "name": "namespaces",
            "label": "Namespaces"
          }
        ],
        "expanded": false
      }
    ],
    "expanded": true
  },
  {
    "name": "samples",
    "label": "Samples",
    "heading": "Samples for JsRender, JsViews or JsObservable",
    "description": "Examples of some of the ways you can use JsRender templates, JsViews tag controls, and more",
    "categories": [
      {
        "filter": "jsr",
        "name": "samples/jsr",
        "label": "JsRender samples",
        "categories": [
          {
            "name": "samples/jsr/converters",
            "label": "Converters and encoding"
          },
          {
            "name": "samples/jsr/composition",
            "label": "Template composition",
            "categories": [
              {
                "name": "samples/jsr/composition/tmpl",
                "label": "tmpl parameter"
              },
              {
                "name": "samples/jsr/composition/from-strings",
                "label": "From strings"
              },
              {
                "name": "samples/jsr/composition/remote-tmpl",
                "label": "Remote templates"
              },
              {
                "name": "samples/jsr/composition/sub-tmpl",
                "label": "Using sub-templates"
              },
              {
                "name": "samples/jsr/composition/tmpl-objects",
                "label": "Contextual template objects"
              }
            ],
            "expanded": true
          },
          {
            "name": "samples/jsr/tags",
            "label": "Custom tags",
            "categories": [
              {
                "name": "samples/jsr/tags/wrap-content",
                "label": "Wrapping content"
              },
              {
                "name": "samples/jsr/tags/extend-for",
                "label": "Extending for"
              }
            ],
            "expanded": true
          },
          {
            "name": "samples/jsr/helpers",
            "label": "Helpers"
          },
          {
            "name": "samples/jsr/paths",
            "label": "Paths"
          }
        ],
        "expanded": true
      },
      {
        "hidden": true,
        "filter": "jsv",
        "name": "samples/jso",
        "label": "JsObservable samples"
      },
      {
        "filter": "jsv",
        "name": "samples/jsv",
        "label": "JsViews samples",
        "categories": [
          {
            "name": "samples/data-link",
            "label": "Data-linking tags and elements",
            "categories": [
              {
                "name": "samples/data-link/from-render-to-link",
                "label": "From rendering to linking"
              },
              {
                "name": "samples/data-link/for-and-if",
                "label": "Linking {^{for}} and {^{if}}"
              },
              {
                "name": "samples/data-link/class",
                "label": "Linking class"
              },
              {
                "name": "samples/data-link/toggle",
                "label": "Toggling class with data-link"
              },
              {
                "name": "samples/data-link/attributes",
                "label": "Linking attributes"
              },
              {
                "name": "samples/data-link/visibility",
                "label": "Linking visibility"
              },
              {
                "name": "samples/data-link/hover",
                "label": "Linking visibility and hover"
              },
              {
                "name": "samples/data-link/css",
                "label": "Linking CSS attributes"
              },
              {
                "name": "samples/data-link/svg",
                "label": "Linking SVG elements"
              },
              {
                "name": "samples/data-link/computed",
                "label": "Computed ....!!",
                "hidden": true
              }
            ],
            "expanded": true
          },
          {
            "name": "samples/editable",
            "label": "Editable data",
            "categories": [
              {
                "name": "samples/editable/tags",
                "label": "Data-linked tags"
              },
              {
                "name": "samples/editable/elems",
                "label": "Data-linked elements"
              },
              {
                "name": "samples/editable/toplevel-for",
                "label": "Top-level elems with {for...}"
              },
              {
                "name": "samples/editable/observe",
                "label": "$.observe()"
              },
              {
                "name": "samples/editable/compiled",
                "label": "Compiled View Models"
              },
              {
                "name": "samples/editable/submit",
                "label": "Submit changes"
              }
            ],
            "expanded": true
          },
          {
            "name": "samples/form-elems",
            "label": "Form elements",
            "categories": [
              {
                "name": "samples/form-els/simple",
                "label": "Form element binding"
              },
              {
                "name": "samples/form-els/array-binding",
                "label": "Array binding"
              },
              {
                "name": "samples/form-els/converters",
                "label": "2-way binding and converters"
              },
              {
                "name": "samples/form-els/visible-binding",
                "label": "Form elements and visibility"
              },
              {
                "name": "samples/form-els/edit",
                "label": "Edit tag control",
                "hidden": true
              },
              {
                "name": "samples/form-els/validation",
                "label": "With validation",
                "hidden": true
              },
              {
                "name": "samples/form-els/submit",
                "label": "Submitting the form",
                "hidden": true
              }
            ],
            "expanded": true
          },
          {
            "name": "samples/computed",
            "label": "Computed observables",
            "categories": [
              {
                "name": "samples/computed/fullname",
                "label": "fullName variants",
                "hidden": false
              },
              {
                "name": "samples/computed/shopping-cart",
                "label": "Shopping cart"
              }
            ],
            "expanded": false
          },
          {
            "name": "samples/tag-controls",
            "label": "Tag controls",
            "categories": [
              {
                "name": "samples/tag-controls/tabs",
                "label": "tabs control"
              },
              {
                "name": "samples/tag-controls/multiselect",
                "label": "multiselect control"
              },
              {
                "name": "samples/tag-controls/tree",
                "label": "tree control",
                "categories": [
                  {
                    "name": "samples/tag-controls/tree/visible-binding",
                    "label": "tree with 'visible' binding"
                  },
                  {
                    "name": "samples/tag-controls/tree/if-binding",
                    "label": "tree with if-binding"
                  },
                  {
                    "name": "samples/tag-controls/tree/editable",
                    "label": "Editable tree"
                  }
                ],
                "expanded": false
              },
              {
                "name": "samples/tag-controls/edit",
                "label": "edit control",
                "categories": [
                  {
                    "name": "samples/tag-controls/edit/simple-textbox",
                    "label": "Simple textbox control"
                  },
                  {
                    "name": "samples/tag-controls/edit/generic",
                    "label": "Generic edit control"
                  },
                  {
                    "name": "samples/tag-controls/edit/array-binding",
                    "label": "Array binding"
                  }
                ],
                "expanded": false
              },
              {
                "name": "samples/tag-controls/validate",
                "label": "validate control",
                "categories": [
                  {
                    "name": "samples/tag-controls/validate/simple",
                    "label": "Simple validate"
                  },
                  {
                    "name": "samples/tag-controls/validate/group",
                    "label": "Validation group"
                  },
                  {
                    "name": "samples/tag-controls/validate/array-binding",
                    "label": "Array binding"
                  }
                ],
                "expanded": false
              },
              {
                "name": "samples/tag-controls/datepicker",
                "label": "datepicker control",
                "categories": [
                  {
                    "name": "samples/tag-controls/datepicker/simple",
                    "label": "Simple datepicker"
                  },
                  {
                    "name": "samples/tag-controls/datepicker/variants",
                    "label": "datepicker variants"
                  },
                  {
                    "name": "samples/tag-controls/datepicker/with-validation",
                    "label": "With validation"
                  },
                  {
                    "name": "samples/tag-controls/datepicker/with-validation-wizard",
                    "label": "With validation wizard"
                  },
                  {
                    "name": "samples/tag-controls/datepicker/with-converters",
                    "label": "With converters"
                  }
                ],
                "expanded": false
              },
              {
                "name": "samples/tag-controls/slider",
                "label": "slider control",
                "categories": [
                  {
                    "name": "samples/tag-controls/slider/simple",
                    "label": "Simple slider"
                  },
                  {
                    "name": "samples/tag-controls/slider/variants",
                    "label": "slider variants"
                  },
                  {
                    "name": "samples/tag-controls/slider/with-validation",
                    "label": "With validation"
                  }
                ],
                "expanded": false
              },
              {
                "name": "samples/tag-controls/range",
                "label": "range control"
              },
              {
                "name": "samples/tag-controls/jsonview",
                "label": "jsonview control"
              }
            ],
            "expanded": true
          }
        ],
        "expanded": true
      }
    ],
    "expanded": true
  },
  {
    "name": "download",
    "label": "Download",
    "heading": "Downloading JsViews, JsRender and JsObservable",
    "description": "",
    "categories": [
      {
        "name": "download",
        "label": "Latest version"
      },
      {
        "name": "download/specific",
        "label": "Specific versions",
        "expanded": true,
        "hidden": true
      },
      {
        "name": "download/pages",
        "label": "Example pages",
        "categories": [
          {
            "name": "download/pages-jsr-jq",
            "label": "JsRender with jQuery"
          },
          {
            "name": "download/pages-jsr",
            "label": "JsRender without jQuery"
          },
          {
            "name": "download/pages-jsv",
            "label": "JsViews"
          }
        ],
        "expanded": true
      },
      {
        "name": "download/tag-controls",
        "label": "Sample tag controls",
        "categories": [],
        "expanded": true
      }
    ],
    "expanded": true
  },
  {
    "name": "community",
    "label": "JsViews Community",
    "heading": "JsViews and JsRender Community",
    "description": "Viewing the source code, filing bugs or feature requests...",
    "categories": [
      {
        "name": "github",
        "label": "GitHub",
        "expanded": true
      }
    ],
    "expanded": true
  }
];