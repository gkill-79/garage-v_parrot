import { NextResponse } from "next/server";

export async function DELETE(request) {
  const { id } = request.params;
  const appointmentRepository = getRepository(Appointment);

  const appointment = await appointmentRepository.findOne(id);

  if (!appointment) {
    return NextResponse.status(404).json({ message: "Appointment not found" });
  }

  await appointmentRepository.delete(id);
  
  return NextResponse.status(200).json({ message: "Appointment successfully deleted" });
}


export async function PUT(request) {
  const { id } = request.params;
  const appointmentRepository = getRepository(Appointment);

  const appointment = await appointmentRepository.findOne(id);

  if (!appointment) {
    return NextResponse.status(404).json({ message: "Appointment not found" });
  }

  const { body } = request;
  const { date, time, description } = body;

  appointment.date = date;
  appointment.time = time;
  appointment.description = description;

  await appointmentRepository.save(appointment);

  return NextResponse.status(200).json({ message: "Appointment successfully updated" });
}










