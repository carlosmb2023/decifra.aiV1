export default function Loader() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "30vh"
    }}>
      <div className="decifra-loader" role="status"></div>
      <style jsx>{`
        .decifra-loader {
          border: 6px solid #3971FF;
          border-top: 6px solid #fff;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}