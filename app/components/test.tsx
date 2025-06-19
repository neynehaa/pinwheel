import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="bg-gradient-to-br from-red-400 via-pink-400 to-orange-400 rounded-3xl p-8 md:p-12 lg:p-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Helping teams in the world with focus
            </h1>
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-3 text-base font-medium"
            >
              Download The Theme
            </Button>
          </div>
          <div className="text-white/90 text-lg leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi egestas Werat viverra id et aliquet.
              vulputate egestas sollicitudin.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
