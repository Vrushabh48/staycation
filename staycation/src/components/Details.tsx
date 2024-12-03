
interface details{
    title: string,
    p1: string,
    p2: string,
    p3: string
}

export default function Details({title, p1, p2, p3}: details) {
  return (
    <div className="text-white w-[1174px] ml-32 mt-28">
      <div>
        <h1 className="text-4xl font-cinzel font-normal">{title}</h1>
      </div>
      <div>
        <ul className="font-lexend font-light text-xl mt-6 list-disc pl-5 space-y-4">
          <li>{p1}</li>
          <li>{p2}</li>
          <li>{p3}</li>
        </ul>
      </div>
    </div>
  );
}
