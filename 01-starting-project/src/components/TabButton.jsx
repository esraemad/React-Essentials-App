export default function TabButton({ children, onclickk, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : null} onClick={onclickk}>
        {children}
      </button>
    </li>
  );
}
