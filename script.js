function removeAngleBrackets(data) {
  let res = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i] == "<") res += "&lt;";
    else if (data[i] == ">") res += "&gt;";
    else res += data[i];
  }
  return res;
}

let classMap = {};
classMap["html"] = "html";
classMap["babel"] = "javascript";

$(document).ready(function() {
  $("#format-code-button").click(function() {
    let code = $("#input-code-textarea").val();
    let langType = $("#code-language-dropdown").val();
    let res;
    try {
      res = prettier.format(code, {
        parser: langType,
        plugins: prettierPlugins
      });
    } catch (e) {
      console.log(e);
      res =
        "Please verify correct language is selected and there is no Syntax error";
      langType = "html";
    }
    if (langType == "html") {
      res = removeAngleBrackets(res);
    }
    $("#output-code").html(res);
    $("#output-code").addClass(classMap[langType]);
    $("#output-code-textarea").val(res);
    hljs.highlightAll();
    console.log(res);
  });
});

function converttext(data) {
  inputtext = data;
  out = inputtext.replace(/\&/g, "&amp;");
  out = out.replace(/\</g, "&lt;");
  out = out.replace(/\>/g, "&gt;");
  out = out.replace(/\"/g, "&quot;");
  out = out.replace(/\'/g, "&#39;");
  out = out.replace(/\|/g, "&#124;");
  return out;
}

function converttext(data) {
  let res = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i] == "&") res += "&amp;";
    else if (data[i] == "<") res += "&lt;";
    else if (data[i] == ">") res += "&gt;";
    else if (data[i] == '"') res += "quot;";
    else if (data[i] == "'") res += "&#39;";
    else if (data[i] == "|") res += "&#124;";
    else res += data[i];
  }
  return res;
}
