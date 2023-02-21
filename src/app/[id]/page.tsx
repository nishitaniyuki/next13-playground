import { notFound } from 'next/navigation';
import Link from "next/link";

export default async function Schedule({ params }) {
  const schedules = await fetch('http://localhost:3001/schedules', { cache: 'no-store' }).then(res => res.json())
  const selectedSchedule = schedules.filter(schedule => schedule.id === params.id)[0]
  if (!selectedSchedule) {
    notFound()
  }

  return (
    <>
      <h1>{selectedSchedule.title}</h1>
      <h2>date</h2>
      {(new Date(selectedSchedule.date)).toString()}
      <h2>description</h2>
      {selectedSchedule.description}
      <hr />
      <Link href="/">Back</Link>
    </>
  )
}
