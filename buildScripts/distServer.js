import express from "express";
import path from "path";
import compression from "compression";

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static("dist"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.get("/users", (req, res) => {
  // Hard coding for simplicity. Pretend this hits a real database. https://www.mockaroo.com/
  res.json([
    {"id":"652bb054-c2cf-45c4-a9d9-8ba3522c1e4d","firstName":"Karena","lastName":"Fer","email":"kfer0@ameblo.jp"},
    {"id":"410bf1fb-fcac-406c-ac97-3016009f10f6","firstName":"Carley","lastName":"Cosans","email":"ccosans1@networksolutions.com"},
    {"id":"081ecfe8-0f8b-498d-9d1d-3af454783132","firstName":"Rriocard","lastName":"MacGiany","email":"rmacgiany2@4shared.com"},
    {"id":"3f75054f-3506-41bc-ba64-e8b2f8d942b2","firstName":"Ira","lastName":"Stovin","email":"istovin3@pbs.org"},
    {"id":"13246a95-8dbb-4806-823b-7d6c5fc34924","firstName":"Ozzy","lastName":"Heynen","email":"oheynen4@goo.gl"},
    {"id":"cf28e841-534d-4aa6-8972-f9d933a9a086","firstName":"Weylin","lastName":"Daintrey","email":"wdaintrey5@prlog.org"},
    {"id":"deb58939-ebf1-4cd0-8c08-f752ca2919d8","firstName":"Faustine","lastName":"Chattell","email":"fchattell6@globo.com"},
    {"id":"fabf8656-2f1d-42ad-aeca-9b7990e30dd3","firstName":"Gusty","lastName":"Seamans","email":"gseamans7@theatlantic.com"},
    {"id":"a90be49e-9e43-4b75-9f72-28cdeac5fa30","firstName":"Marybeth","lastName":"Pexton","email":"mpexton8@fastcompany.com"},
    {"id":"4ffd0937-5a44-4746-9c47-16a18f80c7fb","firstName":"Diann","lastName":"Georgi","email":"dgeorgi9@elpais.com"}
  ]);
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running... http://localhost:${port}`);
  }
});
