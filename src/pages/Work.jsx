import AppLayout from '../App'
import WorkGrid from '../components/Work'

export default function WorkPage() {
  return (
    <AppLayout>
      <section className="pt-28">
        <div className="mx-auto max-w-7xl px-6">
          <h1 className="text-4xl sm:text-5xl font-semibold text-white">Our Work</h1>
          <p className="mt-3 text-slate-300 max-w-2xl">Select launches across industries. Each engagement tailored to the problem, not the tech fad.</p>
        </div>
        <WorkGrid />
      </section>
    </AppLayout>
  )
}
