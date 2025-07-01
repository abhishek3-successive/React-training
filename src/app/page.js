import Link from "next/link";

export default function HomePage() {
  return (
    <main
    style={{
        minHeight: "100vh",
        backgroundColor: "#5F9EA0",
        padding: "40px",
        fontFamily: "sans-serif",
      }}>
        <h1> Welcome to Assignments</h1>
      <ul style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          listStyle: "none",
          padding: 0,
        }}>

        <li
        style={{
            background: "black",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
            fontWeight: "bold",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}>
          <Link href="/Assignment1">Assignment-1</Link>
        </li>

        <li
        style={{
            background: "black",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
            fontWeight: "bold",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}>
          <Link href="/Assignment2">Assignment-2</Link>
        </li>
         <li
        style={{
            background: "black",
            padding: "20px",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
            textAlign: "center",
            fontWeight: "bold",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}>
<<<<<<< HEAD
          <Link href="/Assignment4">Assignment-4</Link>
=======
          <Link href="/Assignment3">Assignment-3</Link>
>>>>>>> 9ea42733042e66b8cd27c623b16f57b3ebce4ed0
        </li>
      </ul>
    </main>
  );
}