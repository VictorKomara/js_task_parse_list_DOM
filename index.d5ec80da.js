Array.from(document.querySelectorAll("[data-salary]")).sort(function(t,r){return+r.dataset.salary.slice(1).split(",").join("")-+t.dataset.salary.slice(1).split(",").join("")}).forEach(function(t){return document.querySelector("#list").appendChild(t)});
//# sourceMappingURL=index.d5ec80da.js.map
