import { Mail, Phone } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-6">
            <a 
              href="mailto:contact@digitalpro.agency" 
              className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
            >
              <Mail className="h-4 w-4" />
              <span className="hidden xs:inline">contact@digitalpro.agency</span>
              <span className="xs:hidden">Email Us</span>
            </a>
            <a 
              href="https://wa.me/923481388124" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors duration-300"
            >
              <Phone className="h-4 w-4" />
              <span>+923481388124</span>
            </a>
          </div>
        <div className="hidden sm:flex items-center gap-4 text-primary-foreground/70">
  <span className="space-x-6">
    <span>24/7</span>
    <span>Available</span>
  </span>
</div>
        </div>
      </div>
    </div>
  )
}
