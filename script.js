// Root div
const rootDiv = document.getElementById("root");

// Row Button
const rowButton = document.createElement("input");
rowButton.setAttribute("type", "button");
rowButton.setAttribute("id", "addRow");
rowButton.setAttribute("value", "Add Row");
rowButton.classList.add("btn", "btn-outline-primary", "btn-extra-style");
rootDiv.appendChild(rowButton);

// Column Button
const columnButton = document.createElement("input");
columnButton.setAttribute("type", "button");
columnButton.setAttribute("id", "addColumn");
columnButton.setAttribute("value", "Add Column");
columnButton.classList.add("btn", "btn-outline-primary", "btn-extra-style");
rootDiv.appendChild(columnButton);

// Table
const tbl = document.createElement("table");
tbl.setAttribute("id", "dTable");
tbl.classList.add("table", "table-bordered", "table-hover");
// tr
let tr = tbl.insertRow(-1);
for (let i = 0; i < 1; i++) {
  // th
  let th = document.createElement("th");
  th.innerHTML = "Table";
  tr.appendChild(th);
}
rootDiv.appendChild(tbl);

// onClick row button
rowButton.addEventListener("click", addRow);

// onClick row button
columnButton.addEventListener("click", addColumn);

function addColumn() {
  let tblRows = [...document.querySelectorAll("#dTable tr")];
  addTableProp(tblRows, tblRows.length, "column added");
}

function addRow() {
  let rowCount = tbl.rows.length;
  let columnCount = tbl.rows[0].cells.length;
  let tr = tbl.insertRow(rowCount);
  addTableProp("", columnCount, "row added", tr);
}

// helper function for row & column functionality
function addTableProp(tblRows, length, message, insertedRow) {
  for (let i = 0; i < length; i++) {
    let tblPos, td;
    if (insertedRow) {
      td = document.createElement("td");
      td = insertedRow.insertCell(i);
    } else {
      td = document.createElement(i ? "td" : "th");
      tblPos = tblRows[i];
    }
    td.innerHTML = message;
    tblPos && tblPos.appendChild(td);
  }
}
