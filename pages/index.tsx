export default function Home() {
  return (
    <>
      <style jsx global>{`
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto;
        }
      `}</style>
      <div
        style={{
          backgroundColor: "#FF9473",
          padding: "10%",
          minHeight: "100vh",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: 50,
            fontWeight: 800,
            marginBottom: 0,
          }}
        >
          INTERVAL TIMER
        </h1>
        <p
          style={{
            color: "white",
            fontSize: 30,
            fontWeight: 500,
            marginTop: 0,
          }}
        >
          A mobile app for creating and customizing exercise routines.
        </p>
        <p style={{ color: "white", fontSize: 22, fontWeight: 500 }}>
          Found any bugs or have any feature suggestions?{" "}
          <a href="mailto:sindreaubert@gmail.com" style={{ color: "white" }}>
            Send me a mail at sindreaubert@gmail.com
          </a>
        </p>
      </div>
    </>
  );
}
