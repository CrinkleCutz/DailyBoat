import { Snowflake } from 'lucide-react'

export function Header() {
  return (
    <header className="w-full py-6 px-4">
      <div className="flex items-center justify-center gap-2">
        <Snowflake className="w-8 h-8 text-blue-400" />
        <h1 className="text-3xl font-bold text-white">Goral's Snow Info</h1>
      </div>
      <p className="text-center text-gray-400 mt-2">Steamboat Springs, Colorado</p>
    </header>
  )
}