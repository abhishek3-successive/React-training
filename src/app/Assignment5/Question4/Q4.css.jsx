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

  export default styles