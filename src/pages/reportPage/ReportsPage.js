import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import jsPDF from "jspdf";
import "jspdf-autotable";
import activitiesData from "../../data/activities.json"; // Importa el JSON
import "./ReportsPage.css"; // 📌 Importar estilos

ChartJS.register(ArcElement, Tooltip, Legend);

const ReportsPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setData(
      activitiesData.sports.flatMap((sport) =>
        sport.activities.map((activity) => ({
          name: activity.name,
          location: activity.details.location,
          difficulty: activity.details.difficulty,
          distance: activity.details.distance,
          rating: activity.rating,
          category: sport.name,
        }))
      )
    );
  }, []);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.text("Reporte de Actividades", 20, 10);
    doc.autoTable({
      head: [["Nombre", "Ubicación", "Dificultad", "Distancia", "Calificación"]],
      body: data.map((item) => [item.name, item.location, item.difficulty, item.distance, item.rating]),
    });
    doc.save("reporte_actividades.pdf");
  };

  const chartData = {
    labels: [...new Set(data.map((item) => item.category))],
    datasets: [
      {
        data: data.reduce((acc, curr) => {
          const index = acc.labels.indexOf(curr.category);
          acc.values[index] += 1;
          return acc;
        }, { labels: [...new Set(data.map((item) => item.category))], values: new Array(new Set(data.map((item) => item.category)).size).fill(0) }).values,
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <div className="reports-page">
      <h1 className="title-report">Reportes de Actividades</h1>

      {data.length > 0 ? (
        <>
          <div className="chart-container-report">
            <Pie data={chartData} />
          </div>

          <button onClick={generatePDF} className="btn-report btn-primary-report">
            Exportar a PDF
          </button>
        </>
      ) : (
        <p className="loading-text-report">Cargando datos...</p>
      )}

      <button onClick={() => navigate("/")} className="btn btn-secondary-report">
        Volver al inicio
      </button>
    </div>
  );
};

export default ReportsPage;
