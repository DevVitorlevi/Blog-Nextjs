'use client'

export default function Header() {
    return (
        <h1
            onClick={() => window.alert(123)}
            className="text-6xl font-bold text-blue-500 hover:text-white hover:bg-blue-500"
        >
            Olá! Clique Aqui
        </h1>
    )
}
