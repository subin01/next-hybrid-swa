export default async function List() {

  const data = await fetch("https://67ccc436dd7651e464ecb8a1.mockapi.io/V1/Users");
  const items = await data.json();

  return (
    <div>
      <ul>
        {items.map((item:{name:string, id:string}) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}