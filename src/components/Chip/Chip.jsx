import "./Chip.css"

export function Chip({ label = "", isActive = false, onClick=()=>{} }) {
  const buttonClassName = `chip ${isActive ? "active": ""}`
  return (
    <button className={buttonClassName} onClick={onClick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
