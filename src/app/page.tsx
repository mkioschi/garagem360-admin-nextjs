export default function Home() {
  return (
    <>
      <div className="p-8">
        <div className="grid grid-cols-5 gap-4 rounded-sm border border-card-border bg-card p-8 shadow-card">
          <button className="rounded-md bg-primary p-2 text-primary-foreground hover:bg-primary-active dark:bg-gray-400">
            Botão de teste
          </button>

          <button className="rounded-md bg-success p-2 text-success-foreground hover:bg-success-active">
            Botão de teste
          </button>

          <button className="rounded-md bg-info p-2 text-info-foreground hover:bg-info-active">
            Botão de teste
          </button>

          <button className="rounded-md bg-warning p-2 text-warning-foreground hover:bg-warning-active">
            Botão de teste
          </button>

          <button className="rounded-md bg-danger p-2 text-danger-foreground hover:bg-danger-active">
            Botão de teste
          </button>
        </div>
      </div>
    </>
  )
}
