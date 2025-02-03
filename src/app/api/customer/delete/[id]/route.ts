import { storageKeys } from "@/config/storage-keys";
import { customerApi } from "@/lib/axios";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const clientId = (await params).id;
  const accessToken = request.cookies.get(storageKeys.accessToken)?.value;

  if (!accessToken) {
    return NextResponse.json({ error: "Token not found!" }, { status: 401 });
  }

  const { data } = await customerApi.delete(`/customers?id=${clientId}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    }
  });

  if (!data) {
    return NextResponse.json(
      { error: "Ocorreu um erro ao deletar cliente." },
      { status: 500 }
    );
  }

  return NextResponse.json(null, { status: 204 });
}