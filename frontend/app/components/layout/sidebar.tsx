export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 shadow-sm p-4">
      <h2 className="text-xl font-bold mb-6">Auth FullStack</h2>

      <nav className="flex flex-col gap-3">
        <a href="/dashboard">
          Dashboard
        </a>
        <a href="/profile">
          Perfil
        </a>
      </nav>
    </div>
  )
}