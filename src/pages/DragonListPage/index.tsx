import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";
import { DragonService, type Dragon } from "../../services";
import {
  ContentHeader,
  IconButton,
  Image,
  ImagePlaceholder,
  List,
  ListItem,
  Table,
} from "../../components";
import "./styles.css";
import { SearchIcon, TrashIcon } from "../../icons";
import { PlusIcon } from "../../icons/PlusIcon";

export const DragonListPage = () => {
  const navigate = useNavigate();

  const [dragons, setDragons] = useState<Dragon[]>([]);

  useEffect(() => {
    const loadDragons = async () => {
      const dragons = await DragonService.getAll();
      console.log(dragons);
      setDragons(dragons);
    };
    loadDragons();
  }, []);

  const handleDelete = async (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir?")) {
      await DragonService.remove(id);
      setDragons((oldDragons) => oldDragons.filter((d) => d.id !== id));
    }
  };

  const getFormattedDate = (date?: string) => {
    if (!date) return "";
    const timeZone = "America/Sao_Paulo";
    const zonedDate = toZonedTime(date, timeZone);
    return format(zonedDate, "dd/MM/yyyy HH:mm");
  };

  return (
    <>
      <ContentHeader title="Lista de Dragões">
        <IconButton
          onClick={() =>
            navigate("/dragons/new", {
              replace: true,
            })
          }
        >
          <PlusIcon />
        </IconButton>
      </ContentHeader>
      <div className="dragon-table-container">
        <Table
          columnsName={["Imagem", "Nome", "Tipo", "Criado", "Ações"]}
          data={dragons}
          renderRow={(dragon) => (
            <tr key={dragon.id}>
              <td>
                {dragon.imageUrl ? (
                  <Image src={dragon.imageUrl} alt={dragon.name} />
                ) : (
                  <ImagePlaceholder />
                )}
              </td>
              <td>{dragon.name}</td>
              <td>{dragon.type}</td>
              <td>{getFormattedDate(dragon.createdAt)}</td>
              <td>
                <IconButton onClick={() => handleDelete(dragon.id as string)}>
                  <TrashIcon />
                </IconButton>
                <IconButton
                  onClick={() =>
                    navigate(`/dragons/${dragon.id}`, {
                      replace: true,
                    })
                  }
                >
                  <SearchIcon />
                </IconButton>
              </td>
            </tr>
          )}
        />
      </div>
      <div className="dragon-list-container">
        <List>
          {dragons.map((dragon) => (
            <ListItem
              key={dragon.id}
              avatar={dragon.imageUrl}
              primaryText={dragon.name}
              secondaryText={dragon.type}
              clickAction={() =>
                navigate(`/dragons/${dragon.id}`, {
                  replace: true,
                })
              }
              deleteButton={
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(dragon.id as string);
                  }}
                >
                  <TrashIcon />
                </IconButton>
              }
            />
          ))}
        </List>
      </div>
    </>
  );
};
