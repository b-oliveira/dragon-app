import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DragonService, type Dragon } from "../../services";
import { Button, ContentHeader, IconButton, Input } from "../../components";
import "./styles.css";
import { ArrowLeftIcon } from "../../icons";

type Props = {
  dragon?: Dragon;
};

export const DragonRegisterPage = ({ dragon }: Props) => {
  const isEdit = !!dragon;
  const [form, setForm] = useState<Dragon>(
    dragon || {
      name: "",
      type: "",
    }
  );
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEdit) {
        await DragonService.update(form);
      } else {
        await DragonService.create(form);
      }
      navigate("/dragons");
    } catch (error) {
      alert("Erro ao cadastrar dragão");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <ContentHeader title={isEdit ? "Editar Dragão" : "Novo Dragão"}>
        <IconButton
          onClick={() =>
            navigate("/dragons", {
              replace: true,
            })
          }
        >
          <ArrowLeftIcon />
        </IconButton>
      </ContentHeader>
      <form onSubmit={handleSubmit} className="dragon-form">
        <Input
          id="name"
          labelName="Nome"
          type="text"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          id="type"
          labelName="Tipo"
          type="text"
          value={form.type}
          onChange={handleChange}
          required
        />
        <Input
          id="imageUrl"
          labelName="Url da imagem"
          type="text"
          value={form.imageUrl}
          onChange={handleChange}
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Salvando..." : "Salvar"}
        </Button>
      </form>
    </div>
  );
};
