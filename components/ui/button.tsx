import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

export default function Button({ loading, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      style={{
        background: "#3971FF",
        color: "#fff",
        border: "none",
        borderRadius: 8,
        padding: "12px 28px",
        fontWeight: 700,
        fontSize: "1.1rem",
        position: "relative",
        opacity: loading ? 0.7 : 1,
        pointerEvents: loading ? "none" : "auto",
        transition: "all 0.2s"
      }}
    >
      {loading ? <span className="loader-btn"></span> : children}
      <style jsx>{`
        .loader-btn {
          border: 4px solid #fff;
          border-top: 4px solid #3971FF;
          border-radius: 50%;
          width: 22px;
          height: 22px;
          display: inline-block;
          vertical-align: middle;
          animation: spin 0.7s linear infinite;
          margin-right: 8px;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </button>
  );
}