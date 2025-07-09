import { Navigate, useParams } from "react-router-dom"

export type RoomDetailParams = {
  roomId: string
}

export const RoomDetail = () => {
  const params = useParams<RoomDetailParams>()

  if (!params.roomId) {
    return <Navigate to={'/'} replace />
  }

  return <h1>ROOM DETAIL</h1>
}