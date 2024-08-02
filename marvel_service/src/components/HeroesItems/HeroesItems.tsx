const items = [...Array(33).keys()];

function Items({ currentItems }) {
  return (
    <div className="items">
    {currentItems && currentItems.map((item) => (
      <div>
        <h3>Item #{item}</h3>
      </div>
    ))}
      </div>
  );
}