function showAnswer(response) {
  alert(response.data.answer);
}

let apiKey = "31044e85dc6dotb5a7ff80ae77ab2504";
let context = `Be polite and provide a short answer. Finish your answer with a compliment`;
let prompt = `Who wrote the Harry Potter books?`;
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(showAnswer);
