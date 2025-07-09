import { Route, Routes } from "react-router-dom";
import { CreateRooms } from "./pages/create-rooms";
import { RoomDetail } from "./pages/room-detail";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

export const queryClient = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route element={<CreateRooms />} index />
        <Route element={<RoomDetail />} path="/room/:roomId" />
      </Routes>
    </QueryClientProvider>
  )
}
