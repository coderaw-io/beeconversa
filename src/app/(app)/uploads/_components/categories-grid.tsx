
import { Card, CardContent } from "@/components/ui/card";

export function CategoriesGrid() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Card>
        <CardContent className="p-6 flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            fill="#3b82f6"
            viewBox="0 0 256 256"
          >
            <path d="M200,24H72A16,16,0,0,0,56,40V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H56v24a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm-40,80h40v48H160ZM72,40H200V88H160V80a16,16,0,0,0-16-16H72ZM40,80H144v79.83c0,.06,0,.11,0,.17s0,.11,0,.17V176H40ZM72,216V192h72a16,16,0,0,0,16-16v-8h40v48Zm-3.76-62.06-12-48a8,8,0,1,1,15.52-3.88l6.76,27,6.32-12.66a8,8,0,0,1,14.32,0l6.32,12.66,6.76-27a8,8,0,0,1,15.52,3.88l-12,48a8,8,0,0,1-6.89,6,8.46,8.46,0,0,1-.87.05,8,8,0,0,1-7.16-4.42L92,137.89l-8.84,17.69a8,8,0,0,1-14.92-1.64Z" />
          </svg>

          <h3 className="font-medium">Word</h3>
          <p className="text-sm text-muted-foreground">16 Arquivos</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            fill="#22c55e"
            viewBox="0 0 256 256"
          >
            <path d="M200,24H72A16,16,0,0,0,56,40V64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H56v24a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24Zm-40,80h40v48H160Zm40-16H160V80a16,16,0,0,0-16-16V40h56ZM72,40h56V64H72ZM40,80H144v79.83c0,.06,0,.11,0,.17s0,.11,0,.17V176H40ZM72,192h56v24H72Zm72,24V192a16,16,0,0,0,16-16v-8h40v48ZM65.85,146.88,81.59,128,65.85,109.12a8,8,0,0,1,12.3-10.24L92,115.5l13.85-16.62a8,8,0,1,1,12.3,10.24L102.41,128l15.74,18.88a8,8,0,0,1-12.3,10.24L92,140.5,78.15,157.12a8,8,0,0,1-12.3-10.24Z" />
          </svg>

          <h3 className="font-medium">Excel</h3>
          <p className="text-sm text-muted-foreground">27 Arquivos</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            fill="#71717a"
            viewBox="0 0 256 256"
          >
            <path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM160,51.31,188.69,80H160ZM200,216H56V40h88V88a8,8,0,0,0,8,8h48V216Zm-32-80a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,136Zm0,32a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,168Z" />
          </svg>

          <h3 className="font-medium">Texto</h3>
          <p className="text-sm text-muted-foreground">5 Arquivos</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 flex flex-col items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            fill="#ef4444"
            viewBox="0 0 256 256"
          >
            <path d="M224,152a8,8,0,0,1-8,8H192v16h16a8,8,0,0,1,0,16H192v16a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8h32A8,8,0,0,1,224,152ZM92,172a28,28,0,0,1-28,28H56v8a8,8,0,0,1-16,0V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172Zm-16,0a12,12,0,0,0-12-12H56v24h8A12,12,0,0,0,76,172Zm88,8a36,36,0,0,1-36,36H112a8,8,0,0,1-8-8V152a8,8,0,0,1,8-8h16A36,36,0,0,1,164,180Zm-16,0a20,20,0,0,0-20-20h-8v40h8A20,20,0,0,0,148,180ZM40,112V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v24a8,8,0,0,1-16,0V96H152a8,8,0,0,1-8-8V40H56v72a8,8,0,0,1-16,0ZM160,80h28.69L160,51.31Z" />
          </svg>

          <h3 className="font-medium">PDF</h3>
          <p className="text-sm text-muted-foreground">11 Arquivos</p>
        </CardContent>
      </Card>
    </div>
  )
}