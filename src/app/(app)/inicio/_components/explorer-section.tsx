import Link from "next/link";

import {
  HardDriveUploadIcon,
  MegaphoneIcon,
  SettingsIcon,
  StarIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function HomeExplorerSection() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card className="relative">
        <CardContent className="p-6">
          <div className="flex flex-col space-y-4 mb-6">
            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-[60px] rounded-full" />
              <div className="w-full space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-[60px] rounded-full" />
              <div className="w-full space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Skeleton className="h-12 w-[60px] rounded-full" />
              <div className="w-full space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          </div>

          <div className="w-44 bg-muted flex items-center gap-2 py-1.5 px-3 mb-2 rounded-md dark:bg-secondary">
            <StarIcon className="size-4" />
            <span className="text-sm text-foreground">
              1 Minuto - Básico
            </span>
          </div>

          <h3 className="text-lg font-semibold mb-2">
            Configure seu perfil
          </h3>

          <p className="text-sm text-muted-foreground">
            Configurar com informações relevantes, como foto do perfil, número de telefone, etc.
          </p>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex justify-between">
          <Link href="#" className="text-sm text-link hover:underline">
            Saiba mais
          </Link>

          <Link href="/minha-conta">
            <Button type="button" variant="secondary" className="flex items-center gap-2">
              <SettingsIcon className="size-4" />
              Configurações
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-full rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          </div>

          <div className="w-56 bg-muted flex items-center gap-2 py-1.5 px-3 mb-2 rounded-md dark:bg-secondary">
            <StarIcon className="size-4" />
            <span className="text-sm text-foreground">
              5 Minutos - Intermediário
            </span>
          </div>

          <h3 className="text-lg font-semibold mb-2">
            Importe sua base de dados
          </h3>

          <p className="text-sm text-muted-foreground">
            Faça upload de arquivos contendo todos os seus leads para prospectar via plataforma.
          </p>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex justify-between">
          <Link href="#" className="text-sm text-link hover:underline">
            Saiba mais
          </Link>

          <Link href="/uploads">
            <Button type="button" variant="secondary" className="flex items-center gap-2">
              <HardDriveUploadIcon className="size-4" />
              Importar Leads
            </Button>
          </Link>
        </CardFooter>
      </Card>

      <Card>
        <CardContent className="p-6">
          <div className="mb-6">
            <div className="flex flex-col space-y-3">
              <div className="grid grid-cols-3 items-center gap-4">
                <Skeleton className="h-12 w-full rounded-xl" />
                <Skeleton className="h-12 w-full rounded-xl" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>

              <div className="grid grid-cols-3 items-center gap-4">
                <Skeleton className="h-12 w-full rounded-xl" />
                <Skeleton className="h-12 w-full rounded-xl" />
                <Skeleton className="h-12 w-full rounded-xl" />
              </div>

              <div className="space-y-2">
                <div className="grid grid-cols-2 items-center gap-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>

                <div className="grid grid-cols-2 items-center gap-4">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                </div>

                <Skeleton className="h-4 w-full" />
              </div>
            </div>
          </div>

          <div className="w-52 bg-muted flex items-center gap-2 py-1.5 px-3 mb-2 rounded-md dark:bg-secondary">
            <StarIcon className="size-4" />
            <span className="text-sm text-foreground">
              3 minutos - (Opicional)
            </span>
          </div>

          <h3 className="text-lg font-semibold mb-2">
            Crie sua primeira campanha
          </h3>

          <p className="text-sm text-muted-foreground">
            Crie sua campanha de envios para os leads selecionados, você pode agendar um envio ou fazer envios em massa.
          </p>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex justify-between">
          <Link href="#" className="text-sm text-link hover:underline">
            Saiba mais
          </Link>

          <Link href="/campanhas">
            <Button type="button" variant="secondary" className="flex items-center gap-2">
              <MegaphoneIcon className="size-4" />
              Criar Campanha
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}