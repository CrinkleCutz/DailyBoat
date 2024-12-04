export function HotSpringsPreview() {
  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-xl font-semibold mb-4">Strawberry Park Hot Springs</h2>
      <div className="rounded-xl overflow-hidden border border-gray-700 bg-gray-800">
        <iframe
          src="https://strawberryhotsprings.com/"
          className="w-full h-[600px]"
          title="Strawberry Park Hot Springs"
          sandbox="allow-same-origin allow-scripts"
        ></iframe>
      </div>
    </div>
  )
}