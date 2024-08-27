export default function Divider({ title, iconClassName }) {
  return (
    <div className="dividerBig">
      <div className="divider1"></div>
      <div className="dividerTitle">
        <h2>{title}</h2>
        <i className={iconClassName}></i>
      </div>
      <div className="divider2"></div>
    </div>
  );
}
