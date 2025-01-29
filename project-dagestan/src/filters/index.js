import Vue from "vue";

Vue.filter("cutText", function (text, length = 400) {
  if (!text) {
    return "";
  }

  if (text.length > length) {
    return text.slice(0, length) + "... Читать далее";
  } else {
    return text;
  }
});
