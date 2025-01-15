interface PageHeaderProps {
  title: string;
  description: string;
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex flex-col space-y-1.5 py-1.5"> 
      <h2 className="text-lg font-semibold leading-none tracking-tight sm:text-2xl sm:font-bold xl:text-3xl">
        {title}
      </h2>

      <p className="text-sm text-muted-foreground leading-relaxed sm:text-base xl:text-lg">
        {description}
      </p>
    </div>
  )
}