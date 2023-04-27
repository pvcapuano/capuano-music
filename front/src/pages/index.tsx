import { useEffect, useState } from "react";

interface Instrumento {
  id: number;
  title: string;
  price: number;
  model: string;
  category: string;
  photo?: File;
  brand: string;
}

export default function Home() {
  const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

  useEffect(() => {
    async function fetchInstrumentos() {
      const response = await fetch("http://localhost:1337/api/instrumentos");
      const data = await response.json();
      console.log(data.data);
      setInstrumentos(data.data);
    }
    fetchInstrumentos();
  }, []);

  return (
    <div>
      <h1>Instrumentos</h1>

      {instrumentos.map((instrumento) => (
        <div key={instrumento.id}>
          <h1>{instrumento.attributes.title} - </h1>
          <span>{instrumento.attributes.category}</span>
          <p> {instrumento.attributes.description}</p>
          <p>R$ {instrumento.attributes.price}</p>
          <img src="http://localhost:1337/uploads/guitarra_fender_squier_standard_telecaster_vintage_blonde_a6f85ff87a.jpg"></img>
        </div>
      ))}
    </div>
  );
}
