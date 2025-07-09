import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

export interface IGetRoomResponse {
  id: string
  name: string
}

export const CreateRooms = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['get-rooms'],
    queryFn: async () => {
      const results = await fetch('http://localhost:3335/rooms')
      const result: IGetRoomResponse[] = await results.json()

      return result
    }
  })

  return (
    <div>
      {isLoading && <p>Carregando...</p>}

      <div className="flex flex-col gap-1">
        {data?.map(room => {
          return (
            <Link key={room.id} to={`/room/${room.id}`}>{room.name}</Link>
          )
        })}
      </div>
    </div>
  )
}