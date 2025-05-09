import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DragonService, type Dragon } from "../../services";
import { DragonRegisterPage } from "..";

export const DragonDatailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [dragon, setDragon] = useState<Dragon | null>(null);

  useEffect(() => {
    if (id) {
      DragonService.getById(id).then(setDragon);
    }
  }, [id]);

  if (!dragon) return <p>Carregando...</p>;

  return <DragonRegisterPage dragon={dragon} />;
};
