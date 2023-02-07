function extractText() {
  // TODO

  const list = document.getElementById("items");
  const item = Array.from(list.children);

  const result = item
                .map((li) => li.textContent)
                .join("\n");

  const output = document.getElementById('result');
  output.value = result;
}
