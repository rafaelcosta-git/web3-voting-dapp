import { useEffect, useState } from "react";
import { useConfig } from "wagmi";
import { readContract, writeContract } from "@wagmi/core";
import ABI from "./ABI.json";

type Voting = {
  option1: string;
  option2: string;
  votes1: number;
  votes2: number;
  maxDate: number;
};

export default function Vote() {
  const CONTRACT_ADDRESS = "0x6F3E12fdA30dDFFb4971CCC12089D65001b5AEC9";
  const config = useConfig();

  const [message, setMessage] = useState("");
  const [voting, setVoting] = useState<Voting>({
    maxDate: 0,
    option1: "",
    option2: "",
    votes1: 0,
    votes2: 0,
  });
  const [showVotes, setShowVotes] = useState<number>(0);

  async function loadVoting() {
    try {
      const result = await readContract(config, {
        address: CONTRACT_ADDRESS,
        abi: ABI,
        chainId: config.chains[0].id,
        functionName: "getCurrentVoting",
        args: [],
      });

      setVoting(result as Voting);
    } catch (err: any) {
      console.error(err);
      setMessage(err?.message ?? "Erro ao ler o contrato");
    }
  }

  useEffect(() => {
    loadVoting();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function isExpired() {
    return Number(voting.maxDate) < Date.now() / 1000;
  }

  function getMaxDate() {
    return new Date(Number(voting.maxDate) * 1000).toLocaleString("pt-BR");
  }

  // 🔥 Normaliza nome (remove acentos e maiúsculas)
  function normalizeName(name: string) {
    return name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  // 🔥 Mapeamento de imagens
  function getImageUrl(name: string) {
    const key = normalizeName(name);

    const images: Record<string, string> = {
      luiz: "https://assets.about.me/background/users/l/u/i/luiztools_1598723138_576.jpg",
      monica: "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png",
      // coloca aqui qualquer outra pessoa se quiseres
    };

    return (
      images[key] ??
       "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" 
    );
  }

  function getVotesCount(option: 1 | 2) {
    if (option === 1) {
      return showVotes === 1 ? Number(voting.votes1) + 1 : Number(voting.votes1);
    }
    return showVotes === 2 ? Number(voting.votes2) + 1 : Number(voting.votes2);
  }

  const disabledVoting = isExpired() || showVotes > 0;

  function doVote(option: number) {
    writeContract(config, {
      address: CONTRACT_ADDRESS,
      abi: ABI,
      chainId: config.chains[0].id,
      functionName: "addVote",
      args: [option],
    })
      .then(async () => {
        setShowVotes(option);
        setMessage("Voto computado com sucesso!");
        await loadVoting();
      })
      .catch((err: any) => {
        console.error(err);
        setMessage(err?.message ?? "Erro ao votar");
      });
  }

  function handleVote(option: 1 | 2) {
    setMessage("Confirmando na carteira... aguarde...");
    doVote(option);
  }

  return (
    <div className="container px-4 py-5">
      <div className="row align-items-center">
        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
          Webbb3
        </h1>
        <p className="lead">Votação on-chain do BBB.</p>

        {isExpired() ? (
          <p className="lead mb-3">
            Votação encerrada. Confira abaixo os resultados.
          </p>
        ) : (
          <p className="lead mb-3">
            Você tem até {getMaxDate()} para votar.
          </p>
        )}
      </div>

      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-1" />

        {/* OPTION 2 */}
        <div className="col-5 text-center">
          <h3 className="my-2">{voting.option2}</h3>

          <img
            src={getImageUrl(voting.option2)}
            className="img-fluid rounded shadow"
            width={250}
            height={250}
          />

          {disabledVoting ? (
            <button
              className="btn btn-secondary p-3 my-2"
              style={{ width: 250 }}
              disabled
            >
              {getVotesCount(2)}
            </button>
          ) : (
            <button
              className="btn btn-primary p-3 my-2"
              style={{ width: 250 }}
              onClick={() => handleVote(2)}
            >
              Quero que saia este
            </button>
          )}
        </div>

        {/* OPTION 1 */}
        <div className="col-5 text-center">
          <h3 className="my-2">{voting.option1}</h3>

          <img
            src={getImageUrl(voting.option1)}
            className="img-fluid rounded shadow"
            width={250}
            height={250}
          />

          {disabledVoting ? (
            <button
              className="btn btn-secondary p-3 my-2"
              style={{ width: 250 }}
              disabled
            >
              {getVotesCount(1)}
            </button>
          ) : (
            <button
              className="btn btn-primary p-3 my-2"
              style={{ width: 250 }}
              onClick={() => handleVote(1)}
            >
              Quero que saia este
            </button>
          )}
        </div>

        <div className="col-1" />
      </div>

      <div className="row align-items-center">
        <p className="message text-center">{message}</p>
      </div>
    </div>
  );
}
