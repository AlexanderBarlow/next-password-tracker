
import React from "react";

interface PasswordCardProps {
  item: {
    id: number;
    title: string;
    username: string;
  };
  onCopy: (id: number) => void;
  onDelete: (id: number) => void;
}

const PasswordCard: React.FC<PasswordCardProps> = ({
  item,
  onCopy,
  onDelete,
}) => (
  <div className="card darkColor mb-3" style={{ width: "fit-content" }}>
    <div className="card-body">
      <h5 className="card-title darkGreen">{item.title}</h5>
      <p className="card-text oliveGreen">{item.username}</p>
      <div className="d-flex align-items-center justify-content-center">
        <span className="password-link">●●●●●●●●</span>
        <button
          className="btn yellow darkColor Copy ms-3"
          onClick={() => onCopy(item.id)}
        >
          Copy
        </button>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <a href={`/${item.id}`} className="btn yellow darkColor update">
          Update
        </a>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <button
          className="btn yellow darkColor delete"
          onClick={() => onDelete(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default PasswordCard;
