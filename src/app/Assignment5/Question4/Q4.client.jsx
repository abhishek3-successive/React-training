'use client';

import { useState, useEffect } from "react";

export default function PaginatedList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        // Example API with 100 posts
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!res.ok) throw new Error("Failed to fetch data");
        const json = await res.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  // Calculate pagination indices
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  // Handlers
  const handlePrev = () => setCurrentPage((p) => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage((p) => Math.min(p + 1, totalPages));

  // Styles
  const styles = {
    container: {
      maxWidth: "700px",
      margin: "40px auto",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
      borderRadius: "8px",
      backgroundColor: "#fefefe",
      boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    },
    heading: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#222",
    },
    list: {
      listStyleType: "none",
      paddingLeft: 0,
      marginBottom: "20px",
    },
    listItem: {
      padding: "12px",
      borderBottom: "1px solid #ddd",
      fontSize: "16px",
      color: "#333",
    },
    pagination: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
    },
    button: {
      padding: "8px 16px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "none",
      backgroundColor: "#0070f3",
      color: "white",
      cursor: "pointer",
      userSelect: "none",
    },
    buttonDisabled: {
      backgroundColor: "#999",
      cursor: "not-allowed",
    },
    error: {
      color: "red",
      textAlign: "center",
      fontWeight: "bold",
    },
    loading: {
      textAlign: "center",
      fontSize: "18px",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Paginated Data List</h2>

      {loading && <div style={styles.loading}>Loading data...</div>}
      {error && <div style={styles.error}>{error}</div>}

      {!loading && !error && (
        <>
          <ul style={styles.list}>
            {currentItems.map((item) => (
              <li key={item.id} style={styles.listItem}>
                <strong>{item.id}. </strong>
                {item.title}
              </li>
            ))}
          </ul>

          <div style={styles.pagination}>
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              style={{
                ...styles.button,
                ...(currentPage === 1 ? styles.buttonDisabled : {}),
              }}
            >
              Previous
            </button>

            <span>
              Page {currentPage} of {totalPages}
            </span>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              style={{
                ...styles.button,
                ...(currentPage === totalPages ? styles.buttonDisabled : {}),
              }}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}
