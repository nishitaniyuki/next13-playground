import Link from "next/link"

export default async function Schedules() {
  const schedules = await fetch('http://localhost:3001/schedules', { cache: 'no-store' }).then(res => res.json())

  return (
    <>
      <h1>Schedules</h1>
      <ul>
        {schedules.map(({ id, title, date }) => (
          <li key={id}><Link href={`/${id}`}>{(new Date(date)).toDateString()} / {title}</Link></li>
        ))}
      </ul>
    </>
  )
}
