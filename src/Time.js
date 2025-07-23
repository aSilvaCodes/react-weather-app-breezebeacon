export default function Time() {
  const now = new Date();
  return <p className="time">{now.toLocaleString()}</p>;
}
