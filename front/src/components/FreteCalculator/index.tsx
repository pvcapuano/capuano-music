import React, { useState } from "react";

interface FreteCalculatorProps {}

const FreteCalculator: React.FC<FreteCalculatorProps> = () => {
  const [cep, setCep] = useState("");
  const [frete, setFrete] = useState<string | null>(null);
  const [cepValido, setCepValido] = useState(true);

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
    setCepValido(true);
  };

  const handleCalcularClick = () => {
    const regex = /^[0-9]{5}-[0-9]{3}$/;

    if (regex.test(cep)) {
      setFrete("R$ 50,00");
    } else {
      setCepValido(false);
    }
  };

  return (
    <div className="flex flex-col my-3">
      <label htmlFor="cepInput">
        Calcule o prazo e valor do frete deste produto
      </label>
      <div className="flex justify-between my-3">
        <input
          id="cepInput"
          type="text"
          maxLength={9}
          value={cep}
          onChange={handleCepChange}
          placeholder="00000-000"
          className="border-2 w-3/5 md:w-2/5 p-2"
        />
        <button
          className="bg-slate-400 hover:bg-amber-500 rounded-lg text-white rounded-xl uppercase p-2 md:w-2/5"
          onClick={handleCalcularClick}
        >
          Calcular
        </button>
      </div>

      {!cepValido && <p>CEP inválido.</p>}
      {frete && (
        <div className="my-3">
          <table className="border-2 w-full">
            <thead className="bg-slate-200">
              <tr className="text-left">
                <th className="p-1">Prazo</th>
                <th className="p-1">Custo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-1">2 a 3 dias</td>
                <td className="p-1">{frete}</td>
              </tr>
              <tr>
                <td className="p-1">5 a 10 dias</td>
                <td className="p-1">Grátis</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FreteCalculator;
