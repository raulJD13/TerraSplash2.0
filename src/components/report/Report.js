import React, { useEffect, useState, useRef, useMemo } from "react";
import { useTable } from "react-table";
import { Bar } from "react-chartjs-2";
import jsPDF from "jspdf";
import "jspdf-autotable";
import activitiesData from "../../data/activities.json"; 

const Report = () => {
  const [data, setData] = useState([]);
  const chartRef = useRef(null);

  // 🔹 Cargar datos del JSON
  useEffect(() => {
    // Extraer actividades del JSON
    const extractedData = activitiesData.sports.flatMap((sport) =>
      sport.activities.map((activity) => ({
        name: activity.name,
        location: activity.details.location,
        difficulty: activity.details.difficulty,
        distance: activity.details.distance,
        rating: activity.rating,
        category: sport.name,
      }))
    );

    setData(extractedData);
  }, []);

  // 🔹 Definir columnas para la tabla
  const columns = useMemo(
    () => [
      { Header: "Actividad", accessor: "name" },
      { Header: "Ubicación", accessor: "location" },
      { Header: "Dificultad", accessor: "difficulty" },
      { Header: "Distancia", accessor: "distance" },
      { Header: "Puntuación", accessor: "rating" },
      { Header: "Categoría", accessor: "category" },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  // 🔹 Configuración del gráfico
  const chartData = useMemo(
    () => ({
      labels: data.map((activity) => activity.name),
      datasets: [
        {
          label: "Dificultad (1-5)",
          data: data.map((activity) =>
            activity.difficulty === "Easy"
              ? 1
              : activity.difficulty === "Media"
              ? 3
              : 5
          ),
          backgroundColor: "rgba(255, 99, 132, 0.6)",
        },
      ],
    }),
    [data]
  );

  // 🔹 Exportar a PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Reporte de Actividades", 10, 10);
    doc.autoTable({
      head: [["Actividad", "Ubicación", "Dificultad", "Distancia", "Puntuación", "Categoría"]],
      body: data.map((activity) => [
        activity.name,
        activity.location,
        activity.difficulty,
        activity.distance,
        activity.rating,
        activity.category,
      ]),
    });

    // Capturar el gráfico como imagen y agregarlo al PDF
    if (chartRef.current) {
      const image = chartRef.current.toBase64Image();
      doc.addImage(image, "PNG", 10, 80, 180, 100);
    }

    doc.save("informe_actividades.pdf");
  };

  return (
    <div>
      <h1>Reporte de Actividades</h1>

      {/* 🔹 Tabla */}
      <table
        {...getTableProps()}
        style={{ border: "1px solid black", marginBottom: "20px" }}
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{ border: "1px solid black", padding: "5px" }}
                  key={column.id}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{ border: "1px solid black", padding: "5px" }}
                    key={cell.id}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      {/* 🔹 Gráfico */}
      <Bar data={chartData} ref={chartRef} />

      {/* 🔹 Botón de exportación */}
      <button onClick={exportToPDF} style={{ marginTop: "20px" }}>
        Exportar a PDF
      </button>
    </div>
  );
};

export default Report;
