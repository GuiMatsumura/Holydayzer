import express from "express";
import cors from "cors";

const server = express();
server.use(cors());

let feriado;

const holidays = [
  { date: "1/1/2022", name: "Confraternização mundial" },
  { date: "1/3/2022", name: "Carnaval" },
  { date: "4/17/2022", name: "Páscoa" },
  { date: "4/21/2022", name: "Tiradentes" },
  { date: "5/1/2022", name: "Dia do trabalho" },
  { date: "6/16/2022", name: "Corpus Christi" },
  { date: "9/7/2022", name: "Independência do Brasil" },
  { date: "10/12/2022", name: "Nossa Senhora Aparecida" },
  { date: "11/2/2022", name: "Finados" },
  { date: "11/15/2022", name: "Proclamação da República" },
  { date: "12/25/2022", name: "Natal" },
];

const date = new Date();

for (let i = 0; i < holidays.length; i++) {
  if (date.toLocaleDateString() === holidays[i].date) {
    feriado = `Sim, hoje é ${holidays[i].name}`;
  } else {
    feriado = "Não, hoje não é feriado";
  }
}

server.get("/holidays", (req, res) => {
  res.send(holidays);
});

server.get("/is-today-holiday", (req, res) => {
  res.send(feriado);
});

server.listen(5000);
